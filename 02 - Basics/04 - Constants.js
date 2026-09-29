/**
 * Constants
 *
 * Constants are block-scoped variables whose values cannot be reassigned through
 * re-assignment, and they cannot be redeclared. By convention, global or module-level
 * configuration constants are often named using UPPER_SNAKE_CASE.
 *
 * Syntax: const <name> = <value>
 */

/**
 * Global Const
 * - Declares a read-only constant at the module or global scope.
 * - Output: 1
 */
const API_VERSION = 1
console.log(API_VERSION)

/**
 * Local Const
 * - Declares a constant that is block-scoped, meaning it only exists within the enclosing
 *   curly braces {}.
 * - Output: 1
 */
{
    const apiVersion = 1
    console.log(apiVersion)
}

/**
 * Multiple Declaration
 * - Declares multiple constants in a single statement separated by commas.
 * - Output: 1 2 3
 */
const A = 1, B = 2, C = 3
console.log(A, B, C)
