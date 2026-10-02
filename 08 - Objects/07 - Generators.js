/**
 * Generators
 *
 * Generator functions are special functions (declared with an asterisk 'function*') that can pause
 * their execution using the 'yield' keyword and resume later when requested. Unlike regular
 * functions that run to completion, generators return an Iterator/Generator object that lazily
 * produces values on demand.
 *
 * Generators are typically used to:
 * 1. Lazily produce large or infinite sequences of data without loading everything into memory.
 * 2. Implement custom iterables that integrate seamlessly with 'for...of' and the spread operator.
 * 3. Handle bidirectional communication or paused execution flows (e.g., state machines).
 */

//==================================================================================================
// Generators
//==================================================================================================

/**
 * Generator
 * - Defined using the 'function*' syntax.
 * - Uses the 'yield' keyword to pause execution and emit values to the consumer.
 */
function* range(end) {
    let i = 0
    while (i < end) {
        yield i
        i++
    }
}

/**
 * Generator Usage
 * - Invoking 'generator()' creates an iterator without executing the function body yet.
 * - Calling 'gen.next()' resumes execution up to the next 'yield'.
 * - Returns `{ value: any, done: boolean }`. The 'done' property switches to 'true' when the
 *   sequence has finished.
 * - Output: 0 | 1 | true
 */
let numbers = range(2)
console.log(
    numbers.next().value,
    numbers.next().value,
    numbers.next().done,
)

/**
 * Iteration
 * - Because Generator objects implement the Iterable protocol, 'for...of' loops automatically
 *   consume values until 'done: true' is reached.
 * - Output: 0 | 1 | 2
 */
numbers = range(3)
for (let n of numbers) {
    console.log(n)
}

//==================================================================================================
// Bidiretional Generators
//==================================================================================================

/**
 * Bidiretional Generator
 * - Demonstrates two-way data flow using 'yield'.
 * - The 'yield balance' emits the current value outward, then pauses.
 * - When '.next(val)' is called again, the passed value enters through 'yield' and is assigned to
 *   'amount'.
 */
function* createAccount(initialBalance) {
    let balance = initialBalance
    while (true) {
        const amount = yield balance
        balance += amount
    }
}

/**
 * Bidiretional Generator Usage
 * - First '.next()' primes the generator up to the first yield (emits initialBalance 100).
 * - Subsequent '.next(value)' calls pass data INTO the paused yield point to update state.
 * - Output: 100 | 150 | 350 | 250
 */
const account = createAccount(100)
console.log(
    account.next().value,    // Initial balance: 100
    account.next(50).value,  // Deposits 50  -> 150
    account.next(200).value, // Deposits 200 -> 350
    account.next(-100).value // Withdraws 100 -> 250
)

//==================================================================================================
// Generator Delegation
//==================================================================================================

/**
* Generator Delegation (yield*)
 * - The 'yield*' operator delegates iteration to another iterable object or generator.
 * - Pauses the outer generator until the delegated iterable is fully consumed.
 */
function* combinedNumbers() {
    yield* range(2) // Delegate iteration to another generator (yields 0, 1)
    yield* [2, 3]   // Delegate iteration to a native iterable Array (yields 2, 3)
    yield 4         // Yield own value (yields 4)
}

/**
 * Delegated Generator Usage
 * - Sequentially yields values from delegated iterables followed by its own yield expressions.
 * - Output: 0 | 1 | 2 | 3 | 4
 */
numbers = combinedNumbers()
console.log(
    numbers.next().value,
    numbers.next().value,
    numbers.next().value,
    numbers.next().value,
    numbers.next().value,
)
