/**
 * High Order Functions (HOF)
 *
 * Functions that accept other functions as arguments, return functions, or both. They form the core
 * foundation of functional programming (FP), enabling behavior abstraction, delayed execution, and
 * reusable function composition.
 */

/**
 * Function As Argument
 * - Passes a predicate or mapper function to abstract collection iteration and filtering logic.
 * - Output: [ 2, 4 ]
 */
const filter = (list, predicate) => {
    const result = []
    for (const item of list) {
        if (predicate(item)) result.push(item)
    }
    return result
}
const numbers = [1, 2, 3, 4, 5]
const isEven = n => n % 2 === 0
console.log(filter(numbers, isEven))

/**
 * Function As Return
 * - Returns a configured function that encapsulates state, creating specialized utilities.
 * - Output: [SUCCESS] Database connected | [ERROR] Connection lost
 */
const createLogger = prefix => message => console.log(`[${prefix}] ${message}`)
const logSuccess = createLogger('SUCCESS')
const logError = createLogger('ERROR')
logSuccess('Database connected')
logError('Connection lost')
