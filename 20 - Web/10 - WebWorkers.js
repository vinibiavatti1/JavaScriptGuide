/**
 * Web Workers
 *
 * Enables multi-threaded execution in web applications by running background scripts on a separate
 * worker thread. This keeps the main UI thread responsive during heavy computation tasks.
 */

//==================================================================================================
// Main Thread Setup
//==================================================================================================

/**
 * Worker Instantiation & Communication
 * - Spawns a background worker script and exchanges messages via the 'postMessage' API.
 * - Listens for returned messages or uncaught worker errors.
 */
const worker = new Worker('worker.js')
worker.addEventListener('message', event => {
    console.log('Result received from worker:', event.data)
})
worker.addEventListener('error', error => {
    console.error('Worker error:', error.message)
})

/**
 * Dispatch Heavy Task
 * - Sends data to the worker thread to trigger heavy background computations.
 */
worker.postMessage({ task: 'heavyTask' })

//==================================================================================================
// Worker Thread Context (worker.js)
//==================================================================================================

/**
 * Background Execution Logic
 * - Operates in an isolated global scope ('self') without direct access to the DOM or 'window'.
 * - Executes heavy tasks and posts the result back to the main thread.
 */
self.addEventListener('message', event => {
    const { task } = event.data
    if (task === 'heavyTask') {
        // Process...
        self.postMessage({ status: 'success' })
    }
})

//==================================================================================================
// Cleanup
//==================================================================================================

/**
 * Terminate Worker
 * - Immediately halts the worker thread and releases browser memory resources.
 */
worker.terminate()
