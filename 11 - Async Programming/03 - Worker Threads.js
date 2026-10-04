/**
 * Worker Threads
 *
 * The 'node:worker_threads' module enables the execution of JavaScript code in parallel on separate
 * system threads. This is useful for CPU-intensive operations without blocking the main Event Loop.
 */
import { Worker, isMainThread, parentPort, workerData } from 'node:worker_threads'

/**
 * Worker Creation
 * - Instantiates a new Worker thread by passing a file path (or 'import.meta.filename' to
 *   self-reference).
 * - Note: A separate file path (e.g., './worker.js') or inline code string via '{ eval: true }' can
 *   also be used.
 */
let worker
if (isMainThread) {
    worker = new Worker(import.meta.filename, {
        workerData: { name: 'John', age: 30 }
    })
    setTimeout(() => worker.terminate(), 100)
}

/**
 * Worker Data
 * - Passes initial data to the worker thread upon creation via the 'workerData' property.
 * - Output: { name: 'John', age: 30 }
 */
if (!isMainThread) {
    console.log(workerData)
}

/**
 * Communication (Main Thread -> Worker)
 * - Sends messages from the main thread using 'worker.postMessage()' and receives them via
 *   'parentPort'.
 * - Output: Worker received: Hello World
 */
if (isMainThread) {
    worker.postMessage('Hello World')
} else {
    parentPort.on('message', (message) => {
        console.log(`Worker received: ${message}`)
    })
}

/**
 * Communication (Worker -> Main Thread)
 * - Sends messages from the worker thread using 'parentPort.postMessage()' and receives them via
 *   'worker'.
 * - Output: Main received: Hello World
 */
if (!isMainThread) {
    parentPort.postMessage('Hello World')
} else {
    worker.on('message', (message) => {
        console.log(`Main received: ${message}`)
    })
}
