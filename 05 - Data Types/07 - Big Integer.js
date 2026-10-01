/**
 * Big Integer
 *
 * BigInt is a built-in object in JavaScript that provides a way to represent whole numbers larger
 * than 'Number.MAX_SAFE_INTEGER', allowing representation of arbitrarily large integers.
 */

/**
 * Declaration
 * - Creating big integers by appending 'n' to an integer literal or using the 'BigInt()'
 *   constructor.
 * - Note: Passing a large number directly as a regular number into 'BigInt()' causes precision loss
 *   before creation; strings should be used instead.
 */
let n1 = 999999999999999999999999999999n
let n2 = BigInt('999999999999999999999999999999')

/**
 * Type Of
 * - Checking if a value is strictly of type 'bigint' using the 'typeof' operator.
 * - Output: true
 */
let n = 999999999999999999999999999999n
console.log(typeof n === 'bigint')

/**
 * To String
 * - Converts the value into its string representation using the 'toString()' method.
 * - Output: 999999999999999999999999999999
 */
n = 999999999999999999999999999999n
console.log(n.toString())

/**
 * Downcasting
 * - Converting a 'bigint' to a regular number ('Number') via parsing functions, which can cause
 *   precision loss for huge values.
 * - Output: 1e+30 1e+30
 */
n1 = parseInt(999999999999999999999999999999n)
n2 = parseFloat(999999999999999999999999999999n)
console.log(n1, n2)

/**
 * Calculation
 * - Performing arithmetic operations with 'bigint' values.
 * - Note: Mixing 'bigint' and regular 'number' types in calculations is not allowed and throws a
 *   TypeError.
 * - Output: 3n
 */
n1 = 1n
n2 = 2n
console.log(n1 + n2)
