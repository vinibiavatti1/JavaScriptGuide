/**
 * Data Types
 *
 * An overview of the various built-in data types available in modern JavaScript and Node.js.
 */

/**
 * Primitive Types
 * - Immutable values stored directly on the stack that represent a single atomic value.
 */
const x1 = 1                // number
const x2 = 3.14             // number
const x3 = 123n             // bigint
const x4 = true             // boolean
const x5 = 'John Doe'       // string
const x6 = Symbol('id')     // symbol
const x7 = null             // null
const x8 = undefined        // undefined

/**
 * Complex Types
 * - Mutable reference structures stored on the heap with dynamic behaviors or collection
 *   interfaces.
 */
const y1 = { name: 'John' } // object
const y2 = ['A', 'B', 'C']  // array
const y3 = new Set()        // set
const y4 = new Map()        // map
const y5 = /[a-z]*/g        // regex
const y6 = () => { }        // function
const y7 = Temporal.PlainDateTime.from('2026-09-30T13:09:25')

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
