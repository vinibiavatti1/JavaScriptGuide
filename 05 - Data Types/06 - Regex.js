/**
 * Regex
 *
 * Regular expressions are patterns used to match character combinations in strings. In JavaScript,
 * regex can be represented using literals (enclosed in forward slashes) or the RegExp object.
 */

//==================================================================================================
// Regex
//==================================================================================================

/**
 * Declaration
 * - Assigning a regular expression pattern directly using a literal.
 */
let regex = /[A-Z]+/

/**
 * Type Of
 * - Checking if a value is strictly an instance of RegExp using the 'instanceof' operator.
 * - Note: The 'typeof' operator returns 'object' for regex because regex is derived from Object.
 * - Output: true
 */
regex = /[A-Z]+/
console.log(regex instanceof RegExp)

/**
 * To String
 * - Converts the value into its string representation using the 'toString()' method.
 * - Output: /[A-Z]+/
 */
regex = /[A-Z]+/
console.log(regex.toString())

//==================================================================================================
// Test
//==================================================================================================

/**
 * Test
 * - Searches for a match in a string, returning 'true' if found and 'false' otherwise.
 * - Output: true false
 */
regex = /\d+/
console.log(
    regex.test('123'),
    regex.test('ABC')
)

//==================================================================================================
// Exec
//==================================================================================================

/**
 * Exec
 * - Executes a search for a match in a string, returning detailed match information or 'null'.
 * - Output: [ '123', index: 4, input: 'ABC 123 GHI', groups: undefined ]
 */
regex = /\d+/
let result = regex.exec('ABC 123 GHI')
console.log(result)

/**
 * Groups
 * - Captures specific parts of the matched string using parentheses, accessible by array index.
 * - Output: 2000-01-15 2000 01 15
 */
regex = /(\d{4})-(\d{2})-(\d{2})/
result = regex.exec('2000-01-15')
console.log(
    result[0],
    result[1],
    result[2],
    result[3],
)

/**
 * Named Groups
 * - Assigns names to capturing groups using '(?<name>...)' to access them via 'result.groups'.
 * - Output: 2000 01 15
 */
regex = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/
result = regex.exec('2000-01-15')
console.log(
    result.groups.year,
    result.groups.month,
    result.groups.day,
)

//==================================================================================================
// Flags
//==================================================================================================

/**
 * Flags
 * - Modifiers appended to regular expressions to alter their matching behavior.
 * - Multiple flags can be combined together (e.g., '/pattern/gi').
 * - Output:
 */
let a = /a/   // Default: matches the first occurrence
let b = /a/g  // Global: matches all occurrences in the string
let c = /a/i  // IgnoreCase: makes the search case-insensitive
let d = /^a/m // Multiline: anchors match start of each line
let e = /./s  // DotAll: dot matches newlines as well
let f = /a/u  // Unicode: treats pattern as a sequence of unicode code points
let g = /a/y  // Sticky: matches only from the index specified by lastIndex
let h = /a/d  // HasIndices: generates start and end indices for captures
let i = /a/v  // UnicodeSets: advanced Unicode character sets and operations
