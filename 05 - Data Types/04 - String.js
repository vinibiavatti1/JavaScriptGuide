/**
 * String
 *
 * Represents a sequence of characters and is used to represent and manipulate text. Values are
 * immutable UTF-16 code unit sequences.
 */

//==================================================================================================
// Strings
//==================================================================================================

/**
 * Declaration
 * - Direct assignment of string literal values using quotes or backticks.
 */
let str = 'Hello World'

/**
 * Declaration With Multiline
 * - Creating multi-line strings natively using template literals.
 * - Output: Hello | World
 */
str = `Hello
World
`
console.log(str)

/**
 * Concatenating
 * - Combining multiple strings using the addition operator.
 * - Output: Hello World
 */
str = 'Hello' + ' ' + 'World'
console.log(str)

/**
 * Interpolation
 * - Embedding expressions and variables directly inside template literals.
 * - Output: My name is John and I'm 30 years old
 */
let name = 'John', age = 30
str = `My name is ${name} and I'm ${age} years old`
console.log(str)

/**
 * Length
 * - Returns the length of a string in UTF-16 code units.
 * - Output: 11
 */
str = 'Hello World'
console.log(str.length)

/**
 * Join
 * - Joins all elements of an array into a string using a specified separator.
 * - Output: Hello World
 */
const arr = ['Hello', 'World']
console.log(arr.join(' '))

/**
 * Casting
 * - Converting non-string primitives into strings using 'toString'.
 * - Output: '200'
 */
let a = 200
let b = a.toString()
console.log(b)

/**
 * Type Of
 * - Checking if a value is strictly of type 'string'.
 * - Output: true
 */
str = 'Hello World'
console.log(typeof str === 'string')

//==================================================================================================
// Scape Characters
//==================================================================================================

/**
 * Scape Characters Reference
 * - Special characters usable inside strings.
 */;
`
\'     - Single Quote
\"     - Double Quote
\\     - Backslash
\0     - Null Byte
\n     - New Line
\r     - Carriage Return
\t     - Horizontal Tab
\v     - Vertical Tab
\b     - Backspace
\f     - Form Feed (new page)
\x53   - Hex value (2 digits)
\u0053 - Unicode (4 digits)
\u{53} - Unicode (Code point with braces)
`;

/**
 * Example
 * - Using escape characters inside a string literal.
 * - Output: 'Hello | World'
 */
str = '\'Hello\nWorld\''
console.log(str)

//==================================================================================================
// Iteration
//==================================================================================================

/**
 * Index Access
 * - Accessing characters by numerical index. Negative values are not allowed (returns undefined).
 * - Output: d
 */
str = 'Hello World'
console.log(str[10])

/**
 * While
 * - Iterating through characters using a while loop.
 * - Output: H | e | l | l | o
 */
str = 'Hello'
let i = 0
while (i < str.length) {
    console.log(str[i])
    i++
}

/**
 * For
 * - Iterating through characters using a standard for loop.
 * - Output: H | e | l | l | o
 */
str = 'Hello'
for (let i = 0; i < str.length; i++) {
    console.log(str[i])
}

/**
 * For Of
 * - Iterating through characters cleanly using a for...of loop.
 * - Output: H | e | l | l | o
 */
str = 'Hello'
for (let char of str) {
    console.log(char)
}

//==================================================================================================
// Index Operations
//==================================================================================================

/**
 * Char At
 * - Returns the character at the specified index (does not support negative indexing).
 * - Output: H
 */
str = 'Hello World'
let result = str.charAt(0)
console.log(result)

/**
 * At
 * - Returns the character at the specified index, supporting negative indexing.
 * - Output: H
 */
str = 'Hello World'
result = str.at(-11)
console.log(result)

/**
 * Char Code At
 * - Returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index.
 * - Output: 72
 */
str = 'Hello World'
result = str.charCodeAt(0)
console.log(result)

/**
 * Code Point At
 * - Returns a non-negative integer that is the Unicode code point value.
 * - Output: 72
 */
str = 'Hello World'
result = str.codePointAt(0)
console.log(result)

/**
 * Index Of
 * - Returns the index of the first occurrence of the specified substring.
 * - Output: 2
 */
str = 'Hello World'
result = str.indexOf('l')
console.log(result)

/**
 * Last Index Of
 * - Returns the index of the last occurrence of the specified substring.
 * - Output: 9
 */
str = 'Hello World'
result = str.lastIndexOf('l')
console.log(result)

//==================================================================================================
// Transformation
//==================================================================================================

/**
 * Concat
 * - Concatenates the string arguments to the calling string.
 * - Output: Hello World
 */
str = 'Hello'
result = str.concat(' ', 'World')
console.log(result)

/**
 * Trim
 * - Removes whitespace from both ends of a string.
 * - Output: 'Hello World'
 */
str = ' Hello World '
result = str.trim()
console.log(result)

/**
 * Trim Start
 * - Removes whitespace from the beginning of a string.
 * - Output: 'Hello World '
 */
str = ' Hello World '
result = str.trimStart()
console.log(result)

/**
 * Trim End
 * - Removes whitespace from the end of a string.
 * - Output: ' Hello World'
 */
str = ' Hello World '
result = str.trimEnd()
console.log(result)

/**
 * Pad Start
 * - Pads the current string with another string until the resulting string reaches the given
 *   length.
 * - Output: --Hello
 */
str = 'Hello'
result = str.padStart(7, '-')
console.log(result)

/**
 * Pad End
 * - Pads the current string from the end with a given string.
 * - Output: Hello--
 */
str = 'Hello'
result = str.padEnd(7, '-')
console.log(result)

/**
 * Repeat
 * - Returns a new string which contains the specified number of copies of the string.
 * - Output: HelloHello
 */
str = 'Hello'
result = str.repeat(2)
console.log(result)

/**
 * Replace
 * - Replaces the first occurrence of a specified value with another.
 * - Output: Hello World x
 */
str = 'Hello x x'
result = str.replace('x', 'World')
console.log(result)

/**
 * Replace All
 * - Replaces all occurrences of a specified value with another.
 * - Output: Hello World World
 */
str = 'Hello x x'
result = str.replaceAll('x', 'World')
console.log(result)

/**
 * To Upper Case
 * - Converts the entire string to uppercase.
 * - Output: HELLO WORLD
 */
str = 'Hello World'
result = str.toUpperCase()
console.log(result)

/**
 * To Lower Case
 * - Converts the entire string to lowercase.
 * - Output: hello world
 */
str = 'Hello World'
result = str.toLowerCase()
console.log(result)

/**
 * To Locale Upper Case
 * - Converts a string to uppercase, respecting any locale-specific case mappings.
 * - Output: HELLO WORLD
 */
str = 'Hello World'
result = str.toLocaleUpperCase('en-US')
console.log(result)

/**
 * To Locale Lower Case
 * - Converts a string to lowercase, respecting any locale-specific case mappings.
 * - Output: hello world
 */
str = 'Hello World'
result = str.toLocaleLowerCase('en-US')
console.log(result)

/**
 * Substring
 * - Extracts characters between two indices (does not support negative indices).
 * - Output: ll
 */
str = 'Hello World'
result = str.substring(2, 4)
console.log(result)

/**
 * Slice
 * - Extracts a section of a string and returns it as a new string (supports negative indices).
 * - Output: ll
 */
str = 'Hello World'
result = str.slice(2, -7)
console.log(result)

/**
 * Split
 * - Splits a String object into an array of strings by separating the string into substrings.
 * - Output: [ 'Hello', 'World' ]
 */
str = 'Hello World'
result = str.split(' ')
console.log(result)

/**
 * Normalize
 * - Returns the Unicode Normalization Form of a given string.
 * - Output: Hello World
 */
str = 'Hello World'
result = str.normalize('NFC')
console.log(result)

/**
 * To Well Formed
 * - Returns a well-formed version of the string, replacing lone surrogates.
 * - Output: Hello World
 */
str = 'Hello World'
result = str.toWellFormed()
console.log(result)

//==================================================================================================
// Equality and Matching
//==================================================================================================

/**
 * Starts With
 * - Determines whether a string begins with the characters of a specified string.
 * - Output: true
 */
str = 'Hello World'
result = str.startsWith('Hello')
console.log(result)

/**
 * Ends With
 * - Determines whether a string ends with the characters of a specified string.
 * - Output: true
 */
str = 'Hello World'
result = str.endsWith('World')
console.log(result)

/**
 * Includes
 * - Determines whether one string may be found within another string.
 * - Output: true
 */
str = 'Hello World'
result = str.includes('Wor')
console.log(result)

/**
 * Locale Compare
 * - Returns a number indicating whether a reference string comes before, after, or is the same as
 *   the given string.
 * - Output: 0
 */
str = 'Hello World'
result = str.localeCompare('Hello World')
console.log(result)

/**
 * Is Well Formed
 * - Returns a boolean indicating whether the string contains no lone surrogates.
 * - Output: true
 */
str = 'Hello World'
result = str.isWellFormed()
console.log(result)

//==================================================================================================
// Regex Operations
//==================================================================================================

/**
 * Match
 * - Retrieves the matches when matching a string against a regular expression.
 * - Output: [ 'Hello', 'World' ]
 */
str = 'Hello World'
result = str.match(/[A-Za-z]+/g)
console.log(result)

/**
 * Match All
 * - Returns an iterator of all results matching a string against a regular expression.
 * - Output:
 *   [ 'Hello', index: 0, input: 'Hello World', groups: undefined ]
 *   [ 'World', index: 6, input: 'Hello World', groups: undefined ]
 */
str = 'Hello World'
result = str.matchAll(/[A-Za-z]+/g)
for (let entry of result) console.log(entry)

/**
 * Search
 * - Executes a search for a match between a regular expression and this String object.
 * - Output: 6
 */
str = 'Hello World'
result = str.search(/World/)
console.log(result)
