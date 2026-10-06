/**
 * Decorator
 *
 * Dynamically adds new behavior or responsibilities to an object or function without altering its
 * original implementation. In JavaScript, we can implement this functionally using higher-order
 * functions that wrap existing functions to extend their functionality.
 */
const calc = (x, y) => x + y
const withLog = (fn) => (...args) => {
    console.log('log:', fn.name, args)
    return fn(...args)
}
const calcWithLog = withLog(calc);
calcWithLog(3, 5)
// Output: log: calc [ 3, 5 ]
