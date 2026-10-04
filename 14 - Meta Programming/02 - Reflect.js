/**
 * Reflect
 *
 * Demonstrates the native 'Reflect' built-in object, providing reflection methods for interceptable
 * JavaScript operations. Reflect methods map 1:1 with Proxy handler traps.
 */

/**
 * Apply
 * - Invokes a target function with a specified 'this' context and arguments array.
 * - Simulates: func(args)
 * - Output: John says hello
 */
function say(message) {
    return `${this.name} says ${message}`
}
const message = Reflect.apply(say, { name: 'John' }, ['hello'])
console.log(message)

/**
 * Construct
 * - Instantiates a constructor function or class.
 * - Simulates: new Class(args)
 * - Output: Person { name: 'John' }
 */
class Person {
    constructor(name) {
        this.name = name
    }
}
const person = Reflect.construct(Person, ['John'])
console.log(person)

/**
 * Has Property
 * - Checks if a property exists on an object or its prototype chain.
 * - Simulates: 'prop' in obj
 * - Output: true
 */
let obj = { name: 'John' }
console.log(Reflect.has(obj, 'name'))

/**
 * Set Property
 * - Assigns a value to a property and returns a boolean indicating success.
 * - Simulates: obj[prop] = val
 * - Output: true 30
 */
obj = { name: 'John' }
let ok = Reflect.set(obj, 'age', 30)
console.log(ok, obj.age)

/**
 * Get Property
 * - Reads a property value from an object.
 * - Simulates: obj[prop]
 * - Output: John
 */
obj = { name: 'John' }
console.log(Reflect.get(obj, 'name'))

/**
 * Delete Property
 * - Removes a property from an object and returns a boolean indicating success.
 * - Simulates: delete obj.prop
 * - Output: true { name: 'John' }
 */
obj = { name: 'John', age: 30 }
ok = Reflect.deleteProperty(obj, 'age')
console.log(ok, obj)

/**
 * Define Property
 * - Defines or modifies a property with a descriptor and returns a boolean indicating success.
 * - Output: true 30
 */
obj = { name: 'John' }
ok = Reflect.defineProperty(obj, 'age', {
    value: 30,
    writable: true,
    enumerable: true,
    configurable: true
})
console.log(ok, obj.age)

/**
 * Get Own Property Descriptor
 * - Returns the property descriptor object for a direct property of an object.
 * - Output: { value: 'John', writable: true, enumerable: true, configurable: true }
 */
obj = { name: 'John' }
console.log(Reflect.getOwnPropertyDescriptor(obj, 'name'))

/**
 * Own Keys
 * - Returns an array of an object's own property keys (including non-enumerable properties and
 *   Symbols).
 * - Output: [ 'name', Symbol(id) ]
 */
obj = { name: 'John', [Symbol('id')]: 123 }
console.log(Reflect.ownKeys(obj))

/**
 * Set Prototype Of
 * - Sets the prototype ([[Prototype]]) of a specified object and returns a boolean indicating
 *   success.
 * - Output: true active
 */
obj = { name: 'John' }
const proto = { status: 'active' }
ok = Reflect.setPrototypeOf(obj, proto)
console.log(ok, obj.status)

/**
 * Get Prototype Of
 * - Returns the prototype ([[Prototype]]) of the specified object.
 * - Output: true
 */
obj = { name: 'John' }
const employee = Object.create(obj)
console.log(Reflect.getPrototypeOf(employee) === obj)

/**
 * Is Extensible
 * - Checks if an object allows adding new properties and returns a boolean.
 * - Output: true
 */
obj = { name: 'John' }
console.log(Reflect.isExtensible(obj))

/**
 * Prevent Extensions
 * - Prevents new properties from ever being added to an object and returns a boolean indicating
 *   success.
 * - Output: true false
 */
obj = { name: 'John' }
ok = Reflect.preventExtensions(obj)
console.log(ok, Reflect.isExtensible(obj))
