/**
 * Objects
 *
 * Objects are key-value collections in JavaScript. Modern ECMAScript provides built-in syntax and
 * static 'Object' methods to create, mutate, inspect, merge, and control object immutability.
 */

//==================================================================================================
// Objects
//==================================================================================================

/**
 * Declaration
 * - Defines an object literal with key-value pairs.
 * - Output: { name: 'John', age: 30 }
 */
let obj = { name: 'John', age: 30 }
console.log(obj)

//==================================================================================================
// Properties & Methods
//==================================================================================================

/**
 * Read Proeprty
 * - Reads a property value using standard dot notation.
 * - Output: John Doe
 */
obj = { name: 'John', age: 30 }
console.log(obj.name)

/**
 * Set Property
 * - Adds a new key-value pair or updates an existing property on the target object.
 * - Output: { name: 'John', age: 30, role: 'admin' }
 */
obj = { name: 'John', age: 30 }
obj.role = 'admin'
console.log(obj)

/**
 * Delete Property
 * - Removes a property directly from an object, mutating its structure.
 * - Output: { name: 'John' }
 */
obj = { name: 'John', age: 30 }
delete obj.age
console.log(obj)

/**
 * Computed Properties
 * - Uses dynamic bracket notation and computed property names.
 * - Output: 30
 */
const propName = 'age'
obj = { name: 'John', [propName]: 30 }
console.log(obj[propName])

/**
 * Check Property Exists
 * - Safely checks if an object owns a direct property without checking its prototype chain
 *   (ES2022).
 * - Output: false
 */
obj = { name: 'John' }
console.log(Object.hasOwn(obj, 'age'))

/**
 * Methods
 * - Defines functions attached to object properties, where 'this' references the calling instance.
 * - Output: Hello, my name is: John
 */
obj = {
    name: 'John',
    greet() {
        return `Hello, my name is: ${this.name}`
    }
}
console.log(obj.greet())

//==================================================================================================
// Iteration
//==================================================================================================

/**
 * For In (Exclusive to Objects)
 * - Iterates over all enumerable string properties of an object (including inherited prototype
 *   keys).
 * - Output: name John | age 30
 */
obj = { name: 'John', age: 30 }
for (let key in obj) {
    console.log(key, obj[key])
}

/**
 * For Of (Keys)
 * - Iterates over an array of the object's own enumerable property keys using Object.keys().
 * - Output: name | age
 */
obj = { name: 'John', age: 30 }
for (let key of Object.keys(obj)) {
    console.log(key)
}

/**
 * For Of (Values)
 * - Iterates over an array of the object's own enumerable values using Object.values().
 * - Output: John | 30
 */
obj = { name: 'John', age: 30 }
for (let val of Object.values(obj)) {
    console.log(val)
}

/**
 * For Of (Entries)
 * - Iterates over [key, value] tuple arrays using Object.entries().
 * - Output: name John | age 30
 */
obj = { name: 'John', age: 30 }
for (let [key, val] of Object.entries(obj)) {
    console.log(key, val)
}

//==================================================================================================
// Immutability
//==================================================================================================

/**
 * Freeze
 * - Prevents adding, deleting, or reassigning existing properties (shallow immutability).
 */
obj = { name: 'John', age: 30 }
Object.freeze(obj)
// obj.name = 'Jane' -> Error: Cannot assign to read only property.

/**
 * Seal
 * - Prevents adding or removing properties, but allows modifying existing property values.
 */
obj = { name: 'John', age: 30 }
Object.seal(obj)
// obj.surname = 'Doe' -> Error: Cannot add property surname, object is not extensible.

/**
 * Is Frozen
 * - Returns true if the object is frozen (no changes, additions, or deletions permitted).
 * - Output: true
 */
obj = { name: 'John', age: 30 }
Object.freeze(obj)
console.log(Object.isFrozen(obj))

/**
 * Is Sealed
 * - Returns true if the object is sealed (no structure changes, but values can mutate).
 * - Output: true
 */
obj = { name: 'John', age: 30 }
Object.seal(obj)
console.log(Object.isSealed(obj))

//==================================================================================================
// Utility Operations
//==================================================================================================

/**
 * Optional Chaining (?.) & Nullish Coalescing (??)
 * - Safely reads nested values without throwing TypeError if an intermediate node is
 *   null/undefined.
 * - Output: undefined 'Default'
 */
obj = { person: null }
console.log(
    obj.person?.name,
    obj.person?.age ?? 'Default'
)

/**
 * Destructuring
 * - Unpacks properties into individual variables and groups remaining keys into a rest object.
 * - Output: John 30 { role: 'admin' }
 */
obj = { name: 'John', age: 30, role: 'admin' }
const { name, age, ...rest } = obj
console.log(name, age, rest)

/**
 * Spread Operator (...)
 * - Performs a shallow copy and allows overriding or merging properties immutably.
 * - Output: { name: 'John', age: 40 }
 */
obj = { name: 'John', age: 30 }
let clone = { ...obj, age: 40 }
console.log(clone)

/**
 * From Entries
 * - Converts an iterable list of key-value pairs back into an object (inverse of Object.entries).
 * - Output: { name: 'John', age: 30 }
 */
let arr = [['name', 'John'], ['age', 30]]
obj = Object.fromEntries(arr)
console.log(obj)

/**
 * Assign
 * - Copies enumerable own properties from source objects into a target object (mutates target).
 * - Output: { name: 'John', age: 30, role: 'admin' }
 */
obj = { name: 'John', age: 30 }
Object.assign(obj, { role: 'admin' })
console.log(obj)

//==================================================================================================
// Value Comparison
//==================================================================================================

/**
 * Object.is
 * - Generic value-equality algorithm for primitives and object references.
 * - Differs from '===' by handling NaN correctly and distinguishing -0 from +0.
 * - Output: true false
 */
console.log(Object.is(NaN, NaN))
console.log(Object.is(-0, +0))
