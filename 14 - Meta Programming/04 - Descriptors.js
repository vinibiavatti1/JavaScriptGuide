/**
 * Descriptors
 *
 * Configures attributes (value, writable, enumerable, configurable, get, set) on object
 * properties using Reflect.defineProperty to intercept reads/writes or control property access.
 *
 * Descriptors are commonly used to implement encapsulation (getters/setters), define read-only
 * or non-enumerable properties, enforce runtime type/value validation during assignment, and
 * trigger side-effects (such as state change notifications or database updates) on property access.
 */

/**
 * Define Object
 * - Plain object target holding internal data state.
 * - Note: The underscore prefix (e.g. '_name') is a convention indicating a private variable
 *   intended to be accessed via property accessors.
 */
const person = { _name: 'John' }

/**
 * Define Descriptor
 * - Intercepts property access via getter and setter methods.
 * - Note: 'enumerable: true' allows property discovery in loops and keys list, while 'configurable:
 *   true' permits property deletion or descriptor modifications later.
 */
Reflect.defineProperty(person, 'name', {
    set(value) {
        console.log('Set Intercepted')
        this._name = value
    },
    get() {
        console.log('Get Intercepted')
        return this._name
    },
    enumerable: true,
    configurable: true
})

/**
 * Using Descriptor
 * - Mutates and accesses the defined property through accessor logic.
 * - Output: Set Intercepted | Get Intercepted | Jane
 */
person.name = 'Jane'
console.log(person.name)
