/**
 * Number
 *
 * In JavaScript, all numeric values are stored as double-precision 64-bit floating-point numbers
 * (following the IEEE 754 standard). There is no separate integer type; both integers and decimals
 * are represented as numbers.
 */

/**
 * Assigning
 * - Basic numeric assignments, including integers, negative numbers, decimals,
 *   and shorthand notations.
 */
let a = 1     // int
let b = -1    // int (negative)
let c = 3.14  // float
let d = -3.14 // float (negative)
let e = .1    // float (shorthand for 0.1)
let f = 1.    // float (shorthand for 1.0)

/**
 * Notations
 * - Representing numbers in alternative numeric bases (binary, hex, octal) and scientific notation.
 * - Output: 12 255 45 2000
 */
a = 0b001100  // Binary
b = 0xff      // Hexadecimal
c = 0o55      // Octal
d = 2e3       // Scientific (2 * 10^3)
console.log(a, b, c, d)

/**
 * Casting
 * - Parsing strings into numeric values. Note that 'parseInt' discards decimals.
 * - Output: 3 3.14
 */
a = parseInt('3.14')
b = parseFloat('3.14')
console.log(a, b)

/**
 * Casting With Radix
 * - Parsing strings from a specific base (radix) into a base-10 integer.
 * - Output: 21
 */
a = parseInt('15', 16)
console.log(a)

/**
 * Underscore (Numeric Separators)
 * - Using underscores to improve readability in large numeric literals.
 * - Output: 1000000
 */
a = 1_000_000
console.log(a)

/**
 * Identifying
 * - Checking if a number is an integer using 'Number.isInteger()'.
 * - Output: true false
 */
console.log(Number.isInteger(1), Number.isInteger(3.14))

/**
 * Overflow
 * - The 'Number.MAX_SAFE_INTEGER' returns the maximum integer safely representable in JavaScript
 *   without precision loss.
 * - Exceeding the safe integer limit results in precision loss and scientific notation.
 * - Output: 9007199254740991 2.1361278361368216e+32
 */
a = Number.MAX_SAFE_INTEGER
b = 213612783613682163621638268362176
console.log(a, b)

/**
 * Inifity
 * - Represents mathematical infinity, resulting from overflows or division by zero.
 * - The 'Number.isFinite' can be used to identify a finite number.
 * - Output: Infinity false
 */
a = 1 / 0
console.log(a, Number.isFinite(a))

/**
 * NaN (Not a Number)
 * - Represents a computational error/indetermination or an invalid numeric operation.
 * - The 'Number.isNaN' can be used to identify a NaN.
 * - Output: NaN true
 */
a = 0 / 0
console.log(a, Number.isNaN(a))
