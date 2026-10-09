/**
 * Chain Of Responsibility
 *
 * Avoids coupling the sender of a request to its receiver by giving more than one object a chance
 * to handle the request. In JavaScript, we can implement this functionally by executing an array of
 * handler functions in sequence until a handler halts the pipeline.
 *
 * Output: HELLO WORLD
 */
const pipe = (...fns) => data => fns.reduce((acc, fn) => fn(acc), data)
const trimHandler = data => data.trim()
const toUpperHandler = data => data.toUpperCase()
const pipeline = pipe(trimHandler, toUpperHandler)
console.log(pipeline(' hello world '))
