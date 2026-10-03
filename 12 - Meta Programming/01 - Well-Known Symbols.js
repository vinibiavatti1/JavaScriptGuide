// Disposable
// Iterator
// Conversion









/**
 * Auto Disposable
 *
 *
 */

/**
 * Implement Auto Disposable
 * -
 */
class Resource {
    constructor() {
        console.log('created')
    }

    run() {
        console.log('running')
    }

    [Symbol.dispose]() {
        console.log('disposed')
    }
}

/**
 * Use Auto Disposable
 * -
 * - Output: created | running | disposed
 */
{
    using res = new Resource()
    res.run()
} // <- Automatically runs the auto disposable method

/**
 * Implement Async Auto Disposable
 * -
 */
class AsyncResource {
    constructor() {
        console.log('created')
    }

    async run() {
        console.log('running')
    }

    async [Symbol.dispose]() {
        console.log('async disposed')
    }
}

/**
 * Use Async Auto Disposable
 * -
 * - Output: created | running | async disposed
 */
{
    using asyncRes = new AsyncResource()
    await asyncRes.run()
} // <- Automatically runs the async auto disposable method
