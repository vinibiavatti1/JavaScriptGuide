/**
 * Functions
 *
 * Functions are reusable blocks of code designed to perform a specific task. In JavaScript,
 * functions are first-class objects, meaning they can be assigned to variables, passed as
 * arguments, and returned from other functions.
 */

//==================================================================================================
// Functions
//==================================================================================================

/**
 * Declaration
 * - Defines a named function using the 'function' keyword.
 * - Subject to full hoisting, allowing it to be invoked before its declaration in the file.
 */
function process() { }

/**
 * Declaration (As Expression)
 * - Assigns an anonymous function to a variable.
 * - Not hoisted; cannot be executed before the line where it is defined.
 */
const run = function () { }

/**
 * Declaration (As Arrow Function)
 * - Uses a compact syntax with the arrow operator (=>).
 * - Lexically binds the 'this' context from surrounding scope and lacks its own 'arguments'.
 * - Preferred in Functional Programming due to concise syntax, immutability of bindings, and
 *   predictable scope.
 */
const perform = () => { }

/**
 * Auto Executable Function
 * - Immediately Invoked Function Expression (IIFE) that executes as soon as it is defined.
 * - Output: Hello World
 */
(function () {
    console.log('Hello World')
})()

//==================================================================================================
// Parameters
//==================================================================================================

/**
 * Positional Parameters
 * - Accepts arguments mapping sequentially to parameter positions in the signature.
 * - Output: My name is John and I'm 30 years old
 */
function greet(name, age) {
    console.log(`My name is ${name} and I'm ${age} years old`)
}
greet('John', 30)

/**
 * Optional Parameters
 * - Initializes parameters with default values if omitted or passed as undefined.
 * - Output: $100 | €100
 */
function formatPrice(amount, currency = '$') {
    console.log(`${currency}${amount}`)
}
formatPrice(100)
formatPrice(100, '€')

/**
 * Destructured Parameters
 * - Destructures properties directly from an options object passed as an argument.
 * - Output: John admin
 */
function createUser({ name, role = 'admin' }) {
    console.log(name, role)
}
createUser({ name: 'John' })

/**
 * Rest Parameters
 * - Collects all remaining individual arguments into a single Array instance.
 * - Output: [ 'Hello', 'World' ]
 */
function print(...args) {
    console.log(args)
}
print('Hello', 'World')

/**
 * Rest Properties
 * - Gathers remaining object properties into a separate object during parameter destructuring.
 * - Output: John { role: 'admin' }
 */
function configureUser({ name, ...rest }) {
    console.log(name, rest)
}
configureUser({ name: 'John', role: 'admin' })

/**
 * Spread Arguments
 * - Expands an iterable (like an Array) into individual arguments during a function call.
 * - Output: 12
 */
function mul(x, y) {
    return x * y
}
const args = [4, 3]
console.log(mul(...args))

//==================================================================================================
// Return
//==================================================================================================

/**
 * Return Value
 * - Explicitly specifies the output value to be returned from the function call.
 * - Output: 8
 */
function sum(x, y) {
    return x + y
}
let result = sum(5, 3)
console.log(result)

/**
 * Multiple Return Values
 * - Emulates multiple return values by returning an array or object to be destructured.
 * - Output: 1 0
 */
function divmod(x, y) {
    return [x / y, x % y]
}
const [div, mod] = divmod(2, 2)
console.log(div, mod)

/**
 * Implicit Return (Arrow Functions)
 * - Returns an expression directly without using explicit 'return' or block curly braces.
 * - Output: 8
 */
const add = (x, y) => x + y
result = add(5, 3)
console.log(result)

/**
 * Explicit Return (Arrow Functions)
 * - Requires an explicit 'return' statement when arrow function body uses block curly braces.
 * - Output: 2
 */
const sub = (x, y) => {
    return x - y
}
result = sub(5, 3)
console.log(result)

/**
 * Implicit Object Return (Arrow Functions)
 * - Returns an object literal implicitly by wrapping the object in parentheses.
 * - Output: { name: 'John' }
 */
const createPerson = (name) => ({ name: name })
result = createPerson('John')
console.log(result)

/**
 * Guards
 * - Uses early return statements to terminate execution early when conditions are met.
 * - Output: null
 */
function divide(x, y) {
    if (y == 0) { // Guard
        return null
    }
    return x / y
}
result = divide(1, 0)
console.log(result)

/**
 * Undefined Return
 * - Functions without an explicit return statement return 'undefined' by default.
 * - Output: undefined
 */
function noReturn() { }
result = noReturn()
console.log(result)
