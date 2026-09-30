/**
 * Readline
 *
 * Provides an interface for reading data from a readable stream (such as process.stdin) line by
 * line.
 */

/**
 * Imports
 * - Imports the promise-based readline interface from Node.js core.
 */
import { createInterface } from 'node:readline/promises'

/**
 * Create Interface
 * - Initializes the readline instance by passing input and output streams as an options object.
 */
const rl = createInterface(process.stdin, process.stdout)

/**
 * Question
 * - Prompts the user and waits asynchronously for their input.
 * - Output: John Doe
 */
const answer = await rl.question('What is your name? ')
console.log(answer)

/**
 * Readline Line Event
 * - Listens continuously for input lines from the user, processing each entry as they press Enter.
 * - Output: Echoes back each typed line until closed.
 */
rl.on('line', (line) => {
    console.log(`Received: ${line}`)
    if (line.trim() === 'exit') {
        rl.close()
    }
})

/**
 * Close
 * - Closes the readline interface instance, releasing the control streams so the process can exit.
 */
rl.close()
