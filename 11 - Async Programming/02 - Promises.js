/**
 * Promises
 *
 * Promises represent the eventual completion or failure of asynchronous operations in JavaScript.
 * They manage state transitions ('pending', 'fulfilled', 'rejected') and enable structured async
 * control flow through chaining, concurrent combinators ('Promise.all', 'Promise.any'), and modern
 * 'async/await' syntax.
 */

//==================================================================================================
// Traditional Callbacks
//==================================================================================================

/**
 * Callback Functions
 * - Demonstrates handling asynchronous operations using traditional callback functions.
 */
function handleMessage(message, callback) {
    setImmediate(() => {
        callback(`Message '${message}' processed!`)
    })
}

/**
 * Callback Execution
 * - Invokes a function using a traditional callback to handle the asynchronous result.
 * - Output: Message 'Hello World' processed!
 */
handleMessage('Hello World', (result) => {
    console.log(result)
})

//==================================================================================================
// Promises
//==================================================================================================

/**
 * Promise Construction
 * - Wraps asynchronous operations inside a standard Promise constructor with resolve and reject.
 */
function processMessage(message) {
    return new Promise((resolve, reject) => {
        setImmediate(() => {
            try {
                resolve(`Message '${message}' processed!`)
            } catch {
                reject('Error')
            }
        })
    })
}

/**
 * Promise Chaining
 * - Consumes a Promise using chained '.then()', '.catch()', and '.finally()' methods.
 * - Output: Message 'Hello World' processed! | finally
 */
processMessage('Hello World')
    .then(result => console.log(result))
    .catch((error) => console.log(error))
    .finally(() => console.log('finally'))

//==================================================================================================
// Async & Await
//==================================================================================================

/**
 * Async Functions
 * - Uses the 'async' keyword to simplify returning Promises and handling asynchronous logic.
 */
async function processMessageAsync(message) {
    return `Message '${message}' processed!`
}

/**
 * Await Operator
 * - Pauses execution until an asynchronous operation completes using top-level 'await'.
 * - Output: Message 'Hello World' processed!
 */
let result = await processMessageAsync('Hello World')
console.log(result)

//==================================================================================================
// Promise Combinators
//==================================================================================================

/**
 * Resolve & Reject
 * - Creates pre-resolved or pre-rejected Promise instances directly using helper static methods.
 * - Output: op1:completed | op2:error
 */
let op1 = Promise.resolve('op1:completed')
let op2 = Promise.reject('op2:error')
op1.then(result => console.log(result))
op2.catch(error => console.log(error))

/**
 * All
 * - Waits for all input Promises to resolve, failing immediately if any Promise rejects.
 * - Output: op1:completed | op2:completed
 */
op1 = Promise.resolve('op1:completed')
op2 = Promise.resolve('op2:completed')
let results = await Promise.all([op1, op2])
results.forEach(result => console.log(result))

/**
 * All Settled
 * - Waits for all input Promises to settle (either fulfilled or rejected) without short-circuiting.
 * - Output: rejected undefined | fulfilled op2:completed
 */
op1 = Promise.reject('op1:rejected')
op2 = Promise.resolve('op2:completed')
results = await Promise.allSettled([op1, op2])
results.forEach(result => console.log(result.status, result.value))

/**
 * Any
 * - Returns the value of the first Promise to fulfill, ignoring rejections unless all reject.
 * - Output: op1:completed
 */
op1 = Promise.resolve('op1:completed')
op2 = Promise.resolve('op2:completed')
result = await Promise.any([op1, op2])
console.log(result)

/**
 * Race
 * - Settles as soon as any of the input Promises settles (either resolves or rejects).
 * - Output: op1:completed
 */
op1 = Promise.resolve('op1:completed')
op2 = Promise.resolve('op2:completed')
result = await Promise.race([op1, op2])
console.log(result)

//==================================================================================================
// Promise Utilities
//==================================================================================================

/**
 * With Resolvers
 * - Creates a Promise alongside its direct 'resolve' and 'reject' functions in a single call.
 * - Output: promise:completed
 */
const { promise, resolve, reject } = Promise.withResolvers()
resolve('promise:completed')
result = await promise
console.log(result)
