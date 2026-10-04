/**
 * Proxy
 *
 * Wraps a target object or function to intercept, validate, or redefine fundamental operations
 * (such as property access, assignment, and function invocation) before they reach the target.
 *
 * Proxy traps mirror the 'Reflect' API methods one-to-one, allowing clean delegation back to the
 * target. Common use cases include data validation, logging/tracing, access control, state
 * management reactive systems, and mocking objects or API handlers in testing environments.
 */

//==================================================================================================
// Object Proxy
//==================================================================================================

/**
 * Define Object
 * - Target plain object to be wrapped by the Proxy.
 */
const person = { name: 'John' }

/**
 * Define Object Proxy (Define Traps)
 * - Intercepts property reads ('get') and writes ('set') using Reflect traps.
 */
const personProxy = new Proxy(person, {
    set(target, p, newValue, receiver) {
        console.log('Set Intercepted')
        return Reflect.set(target, p, newValue, receiver)
    },
    get(target, p, receiver) {
        console.log('Get Intercepted')
        return Reflect.get(target, p, receiver)
    }
})

/**
 * Using Object Proxy
 * - Mutates and accesses properties through the proxy, triggering the respective traps.
 * - Output: Set Intercepted | Get Intercepted | Jane
 */
personProxy.name = 'Jane'
console.log(personProxy.name)

//==================================================================================================
// Function Proxy
//==================================================================================================

/**
 * Define Function
 * - Target function to be intercepted on invocation.
 */
function sum(x, y) {
    return x + y
}

/**
 * Define Function Proxy (Define Traps)
 * - Intercepts function execution calls using the 'apply' trap.
 */
const sumProxy = new Proxy(sum, {
    apply(target, thisArg, argArray) {
        console.log('Apply Intercepted')
        return Reflect.apply(target, thisArg, argArray)
    }
})

/**
 * Using Function Proxy
 * - Invokes the proxied function, executing custom logic before delegating to the target function.
 * - Output: Apply Intercepted | 8
 */
const result = sumProxy(3, 5)
console.log(result)
