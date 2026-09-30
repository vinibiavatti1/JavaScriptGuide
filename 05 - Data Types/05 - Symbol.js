/**
 * Symbol
 *
 * Represents a unique and immutable primitive value, primarily used as unique identifiers for
 * object properties to prevent naming collisions.
 */

/**
 * Declaration
 * - Direct assignment of a symbol using the 'Symbol' factory function with an optional description.
 */
let id = Symbol('id')

/**
 * Unique
 * - Symbols are guaranteed to be unique. Even with the same description, they are never equal.
 * - Output: false (always)
 */
let id1 = Symbol('id')
let id2 = Symbol('id')
console.log(id1 === id2)

/**
 * Description
 * - Accessing the optional description string passed during creation via the '.description'
 *   property.
 * - Output: id
 */
id = Symbol('id')
console.log(id.description)

/**
 * Hidden Key
 * - Using symbols as object keys to make them hidden from standard iteration (like `for...in`).
 * - Output: name John
 */
id = Symbol('id')
const obj = { name: 'John', [id]: 'secret' }
for (let key in obj) {
    console.log(key, obj[key])
}

/**
 * Type Of
 * - Checking if a value is strictly of type 'symbol' using the 'typeof' operator.
 * - Output: true
 */
id = Symbol('id')
console.log(typeof id === 'symbol')

/**
 * To String
 * - Converts the value into its string representation using the 'toString()' method.
 * - Output: Symbol(id)
 */
id = Symbol('id')
console.log(id.toString())
