/**
 * Number
 *
 * In JavaScript, all numeric values are stored as double-precision 64-bit floating-point numbers
 * (following the IEEE 754 standard). There is no separate integer type; both integers and decimals
 * are represented as numbers.
 */

/**
 * Declaration
 * - Basic numeric assignments, including integers, negative numbers, decimals,
 *   and shorthand notations.
 */
let n1 = 1     // int
let n2 = -1    // int (negative)
let n3 = 3.14  // float
let n4 = -3.14 // float (negative)
let n5 = .1    // float (shorthand for 0.1)
let n6 = 1.    // float (shorthand for 1.0)

/**
 * Notations
 * - Representing numbers in alternative numeric bases (binary, hex, octal) and scientific notation.
 * - Output: 12 255 45 2000
 */
n1 = 0b001100  // Binary
n2 = 0xff      // Hexadecimal
n3 = 0o55      // Octal
n4 = 2e3       // Scientific (2 * 10^3)
console.log(n1, n2, n3, n4)

/**
 * Casting
 * - Parsing strings into numeric values. Note that 'parseInt' discards decimals.
 * - Note: The 'radix' param allows to parse strings from a specific base into a base-10 integer.
 * - Output: 3 3.14
 */
n1 = parseInt('3.14')
n2 = parseFloat('3.14')
console.log(n1, n2)

/**
 * Underscore (Numeric Separators)
 * - Using underscores to improve readability in large numeric literals.
 * - Output: 1000000
 */
n1 = 1_000_000
console.log(n1)

/**
 * Identifying
 * - Checking if a number is an integer using 'Number.isInteger()'.
 * - Output: true false
 */
console.log(
    Number.isInteger(1),
    Number.isInteger(3.14)
)

/**
 * Type Of
 * - Checking if a value is strictly of type 'number' using the 'typeof' operator.
 * - Output: true
 */
let n = 1
console.log(typeof n === 'number')

/**
 * To String
 * - Converts the value into its string representation using the 'toString()' method.
 * - Output: 1
 */
n = 1
console.log(n.toString())

/**
 * To Fixed
 * - Formats a number using fixed-point notation, specifying the number of decimal places.
 * - Returns a string representation of the number.
 * - Output: 1.00
 */
n = 1
console.log(n.toFixed(2))

/**
 * Overflow
 * - The 'Number.MAX_SAFE_INTEGER' returns the maximum integer safely representable in JavaScript
 *   without precision loss.
 * - Exceeding the safe integer limit results in precision loss and scientific notation.
 * - Output: 9007199254740991 2.1361278361368216e+32
 */
n = 213612783613682163621638268362176
console.log(Number.MAX_SAFE_INTEGER, n)

/**
 * Inifity
 * - Represents mathematical infinity, resulting from overflows or division by zero.
 * - The 'Number.isFinite' can be used to identify a finite number.
 * - Output: Infinity false
 */
n = 1 / 0
console.log(n, Number.isFinite(n))

/**
 * NaN (Not a Number)
 * - Represents a computational error/indetermination or an invalid numeric operation.
 * - The 'Number.isNaN' can be used to identify a NaN.
 * - Output: NaN true
 */
n = 0 / 0
console.log(n, Number.isNaN(n))
