/**
 * Errors
 *
 * Demonstrates built-in errors, structured throwing, handling patterns, error wrapping via cause,
 * and custom Error classes.
 *
 * Note: While JavaScript permits throwing any data type (e.g., strings, numbers, objects), throwing
 * instances of the Error class (or its subclasses) is the standard convention. Only Error instances
 * guarantee stack trace generation (stack), descriptive naming (name), and standard API
 * interoperability across loggers and frameworks.
 */

//==================================================================================================
// Built-In Errors
//==================================================================================================

/**
 * Built In Errors
 * - Standard native exceptions provided by JavaScript to represent common execution failures.
 */;
`
Error          - Generic base class for all standard runtime errors.
TypeError      - Thrown when a value is not of the expected type or operation is invalid.
RangeError     - Thrown when a numeric value or parameter falls outside its allowed range.
ReferenceError - Thrown when attempting to access an undeclared or uninitialized variable.
SyntaxError    - Thrown when parsing syntactically invalid code or JSON strings.
URIError       - Thrown when URI encoding/decoding functions receive invalid parameters.
EvalError      - Legacy error related to global eval() execution (kept for backward compatibility).
AggregateError - Wraps multiple error instances into a single object (e.g., in Promise.any()).
`;

//==================================================================================================
// Error Throwing
//==================================================================================================

/**
 * Throw Error
 * - Validates input arguments explicitly and throws specialized Error instances on failure.
 */
function div(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw new TypeError('Invalid number')
    }
    if (y == 0) {
        throw new RangeError('Cannot divide by zero')
    }
    return x / y
}

//==================================================================================================
// Error Handling
//==================================================================================================

/**
 * Try Catch
 * - Intercepts thrown exceptions during execution.
 * - Note: Since JS does not support multiple catch blocks, inspect err.name or use 'instanceof'
 *   to differentiate and handle specific error types safely.
 * - Output: RangeError | Cannot divide by zero | RangeError: Cannot divide by zero at div (...)
 */
try {
    div(1, 0)
} catch (err) {
    console.log(err.name, err.message, err.stack)
}

/**
 * Try Catch Finally
 * - Executes the 'finally' block guaranteed after try/catch completion, regardless of outcome.
 * - Output: Cannot divide by zero | finally...
 */
try {
    div(1, 0)
} catch (err) {
    console.log(err.message)
} finally {
    console.log('finally...')
}

//==================================================================================================
// Error Wrapping
//==================================================================================================

/**
 * Cause Attribute
 * - Wraps a low-level error into a high-level contextual error using the ES2022 'cause' property.
 */
function calc(x, y) {
    try {
        return div(x, y)
    } catch (err) {
        throw new Error('Could not calc', { cause: err })
    }
}

/**
 * Example
 * - Traverses the chained error tree via err.cause to access the original root cause.
 * - Output: Could not calc -> Cannot divide by zero
 */
try {
    calc(1, 0)
} catch (err) {
    console.log(err.message, '->', err.cause.message)
}

//==================================================================================================
// Custom Errors
//==================================================================================================

/**
 * Custom Error
 * - Custom errors are defined by creating a new subclass of Error ('extends Error'). New properties
 *   are allowed to encapsulate domain metadata.
 */
class CustomError extends Error {
    #code
    constructor(code, message, options) {
        super(message, options)
        this.name = 'CustomError'
        this.#code = code
    }
    get code() {
        return this.#code
    }
}

/**
 * Throw Custom Error
 * - Instantiates and throws the specialized custom exception.
 */
function perform() {
    throw new CustomError(90001, 'Cannot execute this operation')
}

/**
 * Handle Custom Error
 * - Handle and extracts custom properties alongside standard Error attributes.
 * - Output: 90001 | CustomError | Cannot execute this operation
 */
try {
    perform()
} catch (err) {
    console.log(err.code, err.name, err.message)
}

//==================================================================================================
// Capturing Unhandled Errors
//==================================================================================================

/**
 * Uncaught Exception
 * - Listens for uncaught exceptions at the process level (Node.js) to prevent immediate silent
 *   crashes.
 * - Note: While this prevents process termination, best practices dictate logging the error and
 *   gracefully shutting down the application state.
 */
process.on('uncaughtException', (err) => {
    console.error('Uncaught Exception:', err.code, err.message)
})

/**
 * Example
 * - Triggers an unhandled exception to test the 'uncaughtException' event trigger.
 * - Output: Uncaught Exception: 87000 Unknown error
 */
setTimeout(() => { throw new CustomError(87000, 'Unknown error') }, 100)
