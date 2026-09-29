/**
 * Event Loop Architecture
 *
 * The Event Loop is the "heart" of Node.js. It allows Node.js to handle thousands
 * of operations at the same time, even though JavaScript runs on a single thread.
 *
 * Simple Real-World Analogy (A Restaurant Waiter):
 * Imagine a restaurant with only ONE waiter (Node.js single thread):
 * - Traditional Restaurant (Multi-threaded): Hires one waiter per table. If 50 tables
 *   arrive, you need 50 waiters. If tables are just waiting for food, those waiters
 *   stand around doing nothing, wasting space and money.
 * - Node.js Restaurant (Event Loop): Has just ONE super-fast waiter. When a table
 *   orders, the waiter writes it down, passes it to the kitchen, and immediately moves
 *   on to take orders at the next table. When the kitchen finishes a dish, a bell rings
 *   (an event), and the waiter delivers it. No time is wasted waiting.
 *
* Comparison with Multi-Threaded Languages (like Java, C#, or Python):
 * - Traditional Languages: Each incoming client request or operation is assigned to a
 *   dedicated OS thread from a pool. If threads run out, requests must wait. Handling
 *   massive concurrency requires managing heavy thread overhead and CPU context switching.
 * - Node.js (Single-Threaded Event Loop): Operates primarily on a single main thread.
 *   When a heavy or blocking operation occurs (such as reading a file or querying a database),
 *   Node.js delegates it to the underlying system kernel or thread pool (libuv) and
 *   continues handling other tasks immediately instead of blocking.
 *
 * How the Event Loop Works in Simple Steps:
 * 1. Execute Code:
 *    - Runs your normal, step-by-step synchronous code first.
 * 2. Handle Asynchronous Tasks (The Queue):
 *    - When an asynchronous task finishes (like a timer ending or a file being read),
 *      its result goes into a waiting queue.
 * 3. The Loop Checks and Executes:
 *    - The Event Loop constantly checks this queue and runs the waiting callbacks
 *      one by one, ensuring nothing gets lost.
 */

/**
 * Simple Execution Example with setTimeout:
 * 1. Runs immediately and prints 'First'.
 * 2. Sets a timer for 1 second. Instead of freezing the program, Node.js hands
 *    this timer over to the system and moves on instantly.
 * 3. Runs immediately and prints 'Third' (demonstrating non-blocking behavior).
 * 4. After 1 second passes, the timer finishes, and its function callback is placed
 *    in the Event Loop queue.
 * 5. The Event Loop picks it up and prints 'Second'.
 */
console.log('First');
setTimeout(() => {
    console.log('Second');
}, 1000);
console.log('Third');
