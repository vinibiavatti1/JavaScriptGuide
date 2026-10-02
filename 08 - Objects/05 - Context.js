/**
 * Context
 *
 * In JavaScript, the 'this' keyword refers to the execution context of a function. Its value is
 * determined dynamically at call-time (where and how the function is invoked), except for Arrow
 * Functions, which capture 'this' lexically.
 *
 * Explicit Binding Utilities:
 * - call: Invokes the function immediately, setting 'this' and passing arguments individually.
 * - apply: Invokes the function immediately, setting 'this' and passing arguments as an Array.
 * - bind: Returns a new function with 'this' permanently bound, without invoking it immediately.
 */

//==================================================================================================
// Context Kept
//==================================================================================================

/**
 * Implicit Binding
 * - When a function is called as an object method (person.greet()), 'this' implicitly refers
 *   to the object to the left of the dot.
 * - Output: Hi, I am John
 */
let person = {
    name: 'John',
    greet() {
        console.log(`Hi, I am ${this.name}`)
    }
}
person.greet()

//==================================================================================================
// Context Lost
//==================================================================================================

/**
 * Implicit Binding (Context Lost)
 * - Standard functions create their own 'this' context when invoked independently.
 * - Calling 'inner()' inside a method loses the parent 'this' binding and defaults to undefined or
 *   global.
 * - Output: Hi, I am undefined
 */
person = {
    name: 'John',
    greet() {
        function inner() {
            console.log(`Hi, I am ${this?.name}`)
        }
        inner() // Invoked standalone, 'this' is lost
    }
}
person.greet()

/**
 * Implicit Binding (With Arrow Functions)
 * - Arrow functions do not have their own 'this' binding.
 * - They capture 'this' lexically from the surrounding scope ('greet' method).
 * - Output: Hi, I am John
 */
person = {
    name: 'John',
    greet() {
        const inner = () => {
            console.log(`Hi, I am ${this?.name}`)
        }
        inner()
    }
}
person.greet()

/**
 * Explicit Binding (Recovered Using 'call' or 'apply')
 * - The 'call(this)' invokes the function immediately, explicitly forcing its 'this' to match the
 *   parent's 'this'.
 * - Note: The 'apply' works identically to 'call', but receives extra arguments as an Array instead
 *   of individual comma-separated values (e.g., fn.call(this, a, b) vs fn.apply(this, [a, b])).
 * - Output: Hi, I am John
 */
person = {
    name: 'John',
    greet() {
        function inner() {
            console.log(`Hi, I am ${this?.name}`)
        }
        inner.call(this) // Executes immediately with forced 'this'
    }
}
person.greet()

/**
 * Explicit Binding (Recovered Using 'bind')
 * - The 'bind(this)' creates and returns a NEW function with 'this' permanently bound to the
 *   provided context.
 * - Does not execute immediately; the newly created function must be called afterwards.
 * - Output: Hi, I am John
 */
person = {
    name: 'John',
    greet() {
        function inner() {
            console.log(`Hi, I am ${this?.name}`)
        }
        const boundInner = inner.bind(this) // Returns new bound function
        boundInner()
    }
}
person.greet()

//==================================================================================================
// Important Notes
//==================================================================================================

/**
 * Detached Callback
 * - Passing an object method directly as a callback function detaches it from its parent object.
 * - The function reference is executed independently by the timer runtime, losing 'this' (defaults
 *   to undefined/globalThis).
 * - Output: Hi, I am undefined | Hi, I am John
 */
person = {
    name: 'John',
    greet() {
        console.log(`Hi, I am ${this?.name}`)
    }
}
setTimeout(person.greet, 0)         // Context Lost
setTimeout(() => person.greet(), 0) // Context Kept
