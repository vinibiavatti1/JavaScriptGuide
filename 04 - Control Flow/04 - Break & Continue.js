/**
 * Break & Continue
 *
 * Control flow statements used to alter the execution behavior of loops and blocks. 'break' exits a
 * loop or block entirely, while 'continue' skips to the next iteration.
 */

/**
 * Break
 * - Terminates the loop entirely when a specific condition is met, jumping execution outside of it.
 * - Output: 0 | 1 | 2
 */
for (let i = 0; i < 10; i++) {
    if (i === 3) {
        break;
    }
    console.log(i)
}

/**
 * Continue
 * - Skips the current iteration of the loop and immediately proceeds to the next iteration check.
 * - Output: 0 | 2
 */
for (let i = 0; i < 3; i++) {
    if (i === 1) {
        continue;
    }
    console.log(i)
}

/**
 * Break With Label
 * - Uses a label identifier to break out of an outer (nested) loop from deep inside an inner loop.
 * - Output: 0 0 | 0 1 | 0 2
 */
outerLoop: for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        if (j === 3) {
            break outerLoop;
        }
        console.log(i, j)
    }
}

/**
 * Continue With Label
 * - Uses a label identifier to skip the current iteration of an outer loop from inside an inner
 *   loop.
 * - Output: 0 0 | 0 1 | 1 0 | 1 1 (skips inner iterations when condition meets)
 */
outerLoop: for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 3; j++) {
        if (j === 1) {
            continue outerLoop
        }
        console.log(i, j)
    }
}

/**
 * Label With Block
 * - Applies a label to an arbitrary code block, allowing a 'break' statement to exit the block
 *   early.
 * - Output: before
 */
myBlock: {
    console.log('before')
    break myBlock
    console.log('after') // skipped
}
