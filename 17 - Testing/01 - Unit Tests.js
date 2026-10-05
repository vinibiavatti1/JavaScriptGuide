/**
 * Unit Tests
 *
 * Node.js provides a native testing module ('node:test') and a strict assertion module
 * ('node:assert/strict') to execute unit tests without external dependencies. It supports lifecycle
 * hooks, exception assertions, parameterized test matrices, mock utilities, and BDD-style suites.
 *
 * Using the strict assertion mode ('node:assert/strict') is recommended over the legacy default
 * mode. Strict assertions enforce strict equality checks (using '===' semantics instead of '==')
 * and prevent unexpected type coercion.
 */
import { test, describe, it, before, beforeEach, after, afterEach } from 'node:test'
import assert from 'node:assert/strict'

//==================================================================================================
// Node.js Test Command
//==================================================================================================

/**
 * Run Tests Command
 * - Executes tests natively using the Node.js test runner. By default, it automatically finds
 *   files inside the 'test/' directory or matching patterns like '.test.js' and '.spec.js'.
 */
'node --test'
'node --test file.test.js'
'node --test --test-name-pattern="should divide"'
'node --test --watch'

//==================================================================================================
// Test Hooks
//==================================================================================================

/**
 * Before / After
 * - Runs setup and teardown logic once before all tests start and after all tests complete.
 */
before(() => {
    // Global setup logic (e.g., database connections, test servers)
})
after(() => {
    // Global teardown logic (e.g., closing sockets, clearing test files)
})

/**
 * Before Each / After Each
 * - Executes setup and cleanup callbacks before and after every individual test case execution.
 */
beforeEach(() => {
    // Reset state before each test case
})
afterEach(() => {
    // Cleanup state after each test case
})

//==================================================================================================
// Basic Tests
//==================================================================================================

/**
 * Tested Function
 * - Divides two numbers and throws a RangeError when attempting to divide by zero.
 */
function div(x, y) {
    if (y === 0) {
        throw new RangeError('Cannot divide by zero')
    }
    return x / y
}

/**
 * Test Success Result
 * - Verifies that the division function returns the expected numeric result using strict equality.
 * - Output: ✔ should divide correctly
 */
test('should divide correctly', () => {
    const result = div(4, 2)
    assert.strictEqual(result, 2)
})

/**
 * Test Error Result
 * - Verifies that an expected error is thrown when invoking a function with invalid arguments.
 * - Output: ✔ should throw RangeError when dividing by zero
 */
test('should throw RangeError when dividing by zero', () => {
    assert.throws(() => div(1, 0), { name: 'RangeError', message: 'Cannot divide by zero' })
})

//==================================================================================================
// Parameterized Tests
//==================================================================================================

/**
 * Parameterized Tests (Data-Driven)
 * - Iterates over an array of input matrices to execute the same test against multiple values.
 * - Output:
 *   ✔ should divide 1 by 1 correctly
 *   ✔ should divide 2 by 1 correctly
 *   ✔ should divide 1 by 2 correctly
 *   ✔ should divide 2 by 2 correctly
 */
const cases = [
    { x: 1, y: 1, expected: 1 },
    { x: 2, y: 1, expected: 2 },
    { x: 1, y: 2, expected: 0.5 },
    { x: 2, y: 2, expected: 1 },
]
cases.forEach(({ x, y, expected }) => {
    test(`should divide ${x} by ${y} correctly`, () => {
        const result = div(x, y)
        assert.strictEqual(result, expected)
    })
})

//==================================================================================================
// Test Context ('t')
//==================================================================================================

/**
 * Tested Function
 * - Helper function that executes a given callback function a specified number of times.
 */
function run(fn, times) {
    for (let i = 0; i < times; i++) {
        fn()
    }
}

/**
 * Mock
 * - Uses the TestContext ('t') object to create spy functions and track call counts.
 * - Output: ✔ should spy function invocation count
 */
test('should spy function invocation count', (t) => {
    const spy = t.mock.fn(() => { })
    run(spy, 3)
    assert.strictEqual(spy.mock.calls.length, 3)
})

//==================================================================================================
// Behavior-Driven Development (BDD) Tests
//==================================================================================================

/**
 * BDD Suite Syntax (Describe & It)
 * - Organizes related assertions into logical test suites using 'describe' and 'it' blocks.
 * - Note: The 'it' function is an alias to the 'test' function.
 * - Output:
 *   ▶ div() suite
 *     ✔ should divide correctly
 *     ✔ should throw RangeError when dividing by zero
 */
describe('div() suite', () => {
    it('should divide correctly', () => {
        const result = div(4, 2)
        assert.strictEqual(result, 2)
    })

    it('should throw RangeError when dividing by zero', () => {
        assert.throws(() => div(1, 0), { name: 'RangeError', message: 'Cannot divide by zero' })
    })
})
