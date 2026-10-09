/**
 * Wrappers
 *
 * Higher-order functions that wrap existing functions to augment, intercept, or gate execution
 * flow. They enable clean cross-cutting concerns like logging, access control, and pipeline
 * processing without modifying the underlying target function logic.
 */

/**
 * Decorator
 * - Wraps a target function to dynamically attach additional behavior without modifying its
 *   structure.
 * - Output: Calling function: sum | 8
 */
const withLogging = fn => (...args) => {
    console.log('Calling function:', fn.name)
    return fn(...args)
}
const sum = (x, y) => x + y
const sumWithLogging = withLogging(sum)
console.log(sumWithLogging(3, 5))

/**
 * Guard
 * - Evaluates preconditions or authorization rights before permitting a target function to execute.
 * - Output: Executing delete
 */
const withAdminCheck = (context, fn) => (...args) => {
    if (context.role !== 'admin') {
        throw new Error('Forbidden')
    }
    return fn(...args)
}
const exec = command => console.log('Executing', command)
const execAdmin = withAdminCheck({ role: 'admin' }, exec)
execAdmin('delete')

/**
 * Middleware
 * - Intercepts execution flow to apply cross-cutting logic before invoking the next function.
 * - Output: Redirecting to /admin
 */
const authMiddleware = (context, next) => {
    if (context.role !== 'admin') {
        throw new Error('Forbidden')
    }
    return next()
}
const redirect = url => console.log('Redirecting to', url)
authMiddleware({ role: 'admin' }, () => {
    redirect('/admin')
})
