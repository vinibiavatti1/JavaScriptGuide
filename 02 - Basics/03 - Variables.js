/**
 * Variables
 *
 * Variables are named containers for storing data values. In modern JavaScript (ES6+), we use
 * declarations like 'let' to manage variable scopes safely, while 'var' is the legacy
 * function-scoped way of declaring variables.
 *
 * Syntax: let <name> = <value>
 */

/**
 * Let
 * - Declares a block-scoped local variable, optionally initializing it to a value.
 * - Output: 1
 */
let x = 1
console.log(x)

/**
 * Var (Legacy)
 * - Declares a function-scoped or globally-scoped variable, optionally initializing it to a value.
 * - Note: Legacy approach, prone to hoisting issues.
 * - Output: 1
 */
var y = 1
console.log(y)

/**
 * Multiple Declaration
 * - Declares multiple variables in a single statement separated by commas.
 * - Output: 1 2 3
 */
let a = 1, b = 2, c = 3
console.log(a, b, c)

/**
 * Mutability
 * - Demonstrates that variables can have their values reassigned after initialization.
 * - Output: 2
 */
let z = 1
z = 2
console.log(z)
