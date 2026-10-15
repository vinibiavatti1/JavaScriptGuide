/**
 * Data Types
 *
 * An overview of the built-in data types and reference structures available in modern JavaScript
 * and Node.js, distinguishing between immutable primitive values and mutable reference types.
 */

//==================================================================================================
// Data Types
//==================================================================================================

/**
 * Primitive Types
 * - Immutable values stored directly on the stack that represent a single atomic value.
 */
const a1 = 1                // number
const a2 = 3.14             // number
const a3 = 123n             // bigint
const a4 = true             // boolean
const a5 = 'John Doe'       // string
const a6 = Symbol('id')     // symbol
const a7 = null             // null
const a8 = undefined        // undefined

/**
 * Collections
 * - Data structures designed for storing collections of items or unique keyed values.
 */
const b1 = ['A', 'B', 'C']  // array
const b2 = new Set()        // set
const b3 = new Map()        // map

/**
 * Objects
 * - Mutable reference structures stored on the heap representing key-value collections or entities.
 */
const c1 = { name: 'John' } // object

/**
 * Specialized Types
 * - Advanced or domain-specific native objects providing rich functionality.
 */
const d1 = /[a-z]*/g        // regex (regular expression pattern)
const d2 = () => { }        // function (callable reference block)
const d3 = new Date()       // date-time object

//==================================================================================================
// Operations
//==================================================================================================

/**
 * Type Of
 * - Returns a string indicating the type of the unevaluated operand.
 * - Note the historical JS edge-cases: typeof null returns 'object' and arrays/maps/sets evaluate
 *   to 'object'.
 * - Output: number
 */
const x = 3.14
console.log(typeof x)

/**
 * Deep Clone
 * - Creates a deep copy of an object using the native structuredClone function.
 * - Note: Handles nested objects, arrays, and complex types (Dates, Maps, Sets) without reference
 *   sharing.
 * - Output: { name: 'John', address: { street: 'Main Street', number: 123 } }
 */
const obj = {
    name: 'John',
    address: {
        street: 'Main Street',
        number: 123
    }
}
const clone = structuredClone(obj)
console.log(clone)
