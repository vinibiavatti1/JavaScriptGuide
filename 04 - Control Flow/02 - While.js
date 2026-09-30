/**
 * While
 *
 * Loop statements are used to execute a block of code repeatedly as long as a specified condition
 * evaluates to true.
 */

/**
 * While
 * - Evaluates the condition before each iteration. If true, the code block executes.
 * - Output: 0 | 1 | 2
 */
let i = 0
while (i < 3) {
    console.log(i)
    i++
}

/**
 * While Without Block
 * - Executes a single statement repeatedly without curly braces as long as the condition holds.
 * - Output: 0 | 1 | 2
 */
i = 0
while (i < 3) console.log(i++)

/**
 * Infinite Loop
 * - Runs indefinitely when the condition always evaluates to true.
 * - Requires a control statement like 'break' or an exception to exit safely.
 */
while (true) {
    break
}

/**
 * Do While
 * - Similar to a standard while loop, but guarantees that the code block executes at least once
 *   because the condition is evaluated at the end of each iteration.
 * - Output: 0 | 1 | 2
 */
i = 0
do {
    console.log(i)
    i++
} while (i < 3)
