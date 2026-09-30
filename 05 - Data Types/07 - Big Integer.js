/**
 * Big Integer
 *
 * BigInt is a built-in object in JavaScript that provides a way to represent whole numbers larger
 * than 'Number.MAX_SAFE_INTEGER', allowing representation of arbitrarily large integers.
 */

/**
 * Assigning
 * - Creating big integers by appending 'n' to an integer literal or using the 'BigInt()'
 *   constructor.
 * - Note: Passing a large number directly as a regular number into 'BigInt()' causes precision loss
 *   before creation; strings should be used instead.
 */
let a = 999999999999999999999999999999n
let b = BigInt('999999999999999999999999999999')

/**
 * Type Of
 * - Checking if a value is strictly of type 'bigint' using the 'typeof' operator.
 * - Output: true
 */
a = 999999999999999999999999999999n
console.log(typeof a === 'bigint')

/**
 * Downcasting
 * - Converting a 'bigint' to a regular number ('Number') via parsing functions, which can cause
 *   precision loss for huge values.
 * - Output: 1e+30 1e+30
 */
a = parseInt(999999999999999999999999999999n)
b = parseFloat(999999999999999999999999999999n)
console.log(a, b)

/**
 * Calculation
 * - Performing arithmetic operations with 'bigint' values.
 * - Note: Mixing 'bigint' and regular 'number' types in calculations is not allowed and throws a
 *   TypeError.
 * - Output: 3n
 */
let a = 1n
let b = 2n
console.log(a + b)
