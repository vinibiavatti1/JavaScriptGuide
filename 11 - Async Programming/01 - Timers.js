/**
 * Timers
 *
 * Timers are fundamental operations used to schedule code execution by placing callbacks onto the
 * event loop queue. They allow non-blocking asynchronous execution after a specified delay or at
 * recurring intervals.
 *
 * Output Order: microtask | immediate | interval | timeout
 */

/**
 * Interval
 * - Repeatedly executes a callback function at specified time intervals in milliseconds.
 * - The interval is stopped using 'clearInterval' to prevent infinite execution.
 * - Output: interval (each 1 second)
 */
const interval = setInterval(() => {
    console.log('interval')
    clearInterval(interval)
}, 1000)

/**
 * Timeout
 * - Executes a callback function once after a specified delay in milliseconds.
 * - Output: timeout (after 1 second)
 */
setTimeout(() => {
    console.log('timeout')
}, 1000)

/**
 * Immediate
 * - Schedules a callback to execute on the Check phase of the event loop, right after I/O events.
 * - Note: Unlike setTimeout(fn, 0) which relies on timer thresholds, setImmediate executes faster
 *   within I/O callbacks.
 * - Output: immediate
 */
setImmediate(() => {
    console.log('immediate')
})

/**
 * Queue Microtask (High Priority)
 * - Enqueues a callback function to run on the microtask queue, which executes before the next
 *   event loop iteration.
 * - Note: Microtasks have maximum execution priority over regular timers and I/O tasks, running
 *   immediately after the current synchronous code stack empties.
 * - Output: microtask
 */
queueMicrotask(() => {
    console.log('microtask')
})
