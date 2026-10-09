/**
 * Decorator
 *
 * Dynamically adds new behavior or responsibilities to an object or function without altering its
 * original implementation. In JavaScript, we can implement this functionally using higher-order
 * functions that wrap existing functions to extend their functionality.
 *
 * Output: Calling function: sum | 8
 */
const withLogging = fn => (...args) => {
    console.log('Calling function:', fn.name)
    return fn(...args)
}
const sum = (x, y) => x + y
const sumWithLogging = withLogging(sum)
console.log(sumWithLogging(3, 5))
