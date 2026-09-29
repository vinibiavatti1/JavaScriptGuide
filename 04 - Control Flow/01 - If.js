/**
 * If (Condition Statement)
 *
 * Conditional statements are used to perform different actions based on different conditions.
 * They execute blocks of code only when a specified boolean expression evaluates to true.
 */

/**
 * If
 * - Executes a block of code if a specified condition evaluates to true.
 * - Output: x is positive
 */
let x = 1
if (x > 0) {
    console.log('x is positive')
}

/**
 * If Without Block
 * - Executes a single statement following the condition without the need for curly braces.
 * - Recommended only for short, single-line readability.
 * - Output: x is positive
 */
x = 1
if (x > 0) console.log('x is positive')

/**
 * Ternary If
 * - A compact shorthand for an if-else statement.
 * - Evaluates a condition and returns one of two expressions depending on whether it is true or
 *   false.
 * - Output: x is positive
 */
x = 1
console.log(x > 0 ? 'x is positive' : 'x is negative')

/**
 * If Else
 * - Executes one block of code if the condition is true, and an alternative block if it is false.
 * - Output: x is negative
 */
x = -1
if (x > 0) {
    console.log('x is positive')
} else {
    console.log('x is negative')
}

/**
 * Else If
 * - Chains multiple conditional checks sequentially until one evaluates to true or falls back to
 *   the final else.
 * - Output: x is zero
 */
x = 0
if (x > 0) {
    console.log('x is positive')
} else if (x < 0) {
    console.log('x is negative')
} else {
    console.log('x is zero')
}

/**
 * Instance Of
 * - Checks whether an object has in its prototype chain the prototype properties of a constructor.
 * - Output: x is an Array
 */
let x = [1, 2, 3]
if (x instanceof Array) {
    console.log('x is an Array')
}

/**
 * Short-Circuit Evaluation (Logical Operators)
 * - Uses the logical AND (&&) to conditionally execute an expression.
 * - The right-side expression is only evaluated if the left-side expression is truthy.
 * - Output: Action executed!
 */
let shouldExecute = true
shouldExecute && console.log('Action executed!')

/**
 * Short-Circuit Alternative (Logical OR - ||)
 * - Uses the logical OR (||) to execute an expression only if the left-side is falsy (fallback
 *   action).
 * - Output: Fallback executed!
 */
let fallbackCondition = false
fallbackCondition || console.log('Fallback executed!')
