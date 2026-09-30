/**
 * Boolean
 *
 * Represents a logical entity and can have two values: `true` and `false`. Often used in
 * conditional testing and flow control.
 */

/**
 * Assigning
 * - Direct assignment of boolean literal values.
 */
let a = true
let b = false

/**
 * Casting
 * - Converting truthy/falsy values into strict booleans using the double NOT operator ('!!') or the
 * 'Boolean()' constructor.
 * - Output: true true
 */
a = !!'hello'
b = Boolean('hello')
console.log(a, b)

/**
 * Type Of
 * - Checking if a value is strictly of type 'boolean' using the 'typeof' operator.
 * - Output: true
 */
a = true
console.log(typeof a === 'boolean')

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
