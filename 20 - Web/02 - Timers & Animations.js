/**
 * Timers & Animations
 *
 * Provides mechanisms for scheduling asynchronous code execution after a delay, running repeated
 * periodic tasks, and syncing smooth visual rendering updates with the browser's repaint cycle.
 */

/**
 * Set Timeout
 * - Executes a function after waiting a specified number of milliseconds.
 * - The 'clearTimeout' cancels a timeout previously established by calling 'setTimeout()'.
 * - Output: Delayed action
 */
const timerId = setTimeout(() => console.log('Delayed action'), 1000)
clearTimeout(timerId)

/**
 * Set Interval
 * - Repeatedly calls a function with a fixed time delay between each call.
 * - The 'clearInterval' cancels a timed repeating action established by 'setInterval()'.
 * - Output: Tick | Tick
 */
const intervalId = setInterval(() => console.log('Tick'), 1000)
clearInterval(intervalId)

/**
 * Request Animation Frame
 * - Tells the browser to execute a callback function before the next repaint for smooth animations.
 * - The 'cancelAnimationFrame' cancels an animation frame request previously scheduled through
 *   'requestAnimationFrame()'.
 */
const anim = requestAnimationFrame(timestamp => console.log('Rendering frame at:', timestamp))
cancelAnimationFrame(anim)
