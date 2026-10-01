/**
 * Boolean
 *
 * Represents a logical entity and can have two values: `true` and `false`. Often used in
 * conditional testing and flow control.
 */

/**
 * Declaration
 * - Direct assignment of boolean literal values.
 */
let b1 = true
let b2 = false

/**
 * Casting
 * - Converting truthy/falsy values into strict booleans using the double NOT operator ('!!') or the
 * 'Boolean()' constructor.
 * - Output: true true
 */
b1 = !!'hello'
b2 = Boolean('hello')
console.log(b1, b2)

/**
 * Type Of
 * - Checking if a value is strictly of type 'boolean' using the 'typeof' operator.
 * - Output: true
 */
let is = true
console.log(typeof is === 'boolean')

/**
 * To String
 * - Converts the value into its string representation using the 'toString()' method.
 * - Output: true
 */
is = true
console.log(is.toString())

/**
 * Truthy and Falsy
 * - Values that evaluate to 'false' in a boolean context are called 'falsy'. Everything else is
 *   considered 'truthy'.
 * - Note: Empty array ([]), empty object ({}), string with spaces (' '), etc, are considered
 *   'truthy'.
 * - Output: false (for all cases)
 */
console.log(
    Boolean(false),
    Boolean(0),
    Boolean(-0),
    Boolean(0n),
    Boolean(''),
    Boolean(null),
    Boolean(undefined),
    Boolean(NaN),
)
