/**
 * Functions
 *
 * Function types are used to define strict signatures for callable structures, specifying parameter
 * types, return types, optional/rest parameters, and overload patterns.
 */

//==================================================================================================
// Functions
//==================================================================================================

/**
 * Standard Function
 * - Enforces explicit parameter annotations and return type contracts on named declarations.
 */
function process(id: number): boolean {
    return id > 0
}

/**
 * Function As Expression
 * - Types both the variable signature and the assigned implementation contract.
 */
const run: (task: string) => void = function (task: string): void { }

/**
 * Arrow Function
 * - Leverages type inference or explicit annotations for typed arrow function expressions.
 */
const perform = (action: string): boolean => true

//==================================================================================================
// Parameters
//==================================================================================================

/**
 * Parameters
 * - Guarantees argument count and positional type checking against signature definitions.
 * - Output: My name is John and I'm 30 years old
 */
function greet(name: string, age: number): void {
    console.log(`My name is ${name} and I'm ${age} years old`)
}
greet('John', 30)

/**
 * Default Parameters
 * - Automatically infers parameter type from default values when explicit annotations are omitted.
 * - Output: $100 | €100
 */
function formatPrice(amount: number, currency: string = '$'): void {
    console.log(`${currency}${amount}`)
}
formatPrice(100)
formatPrice(100, '€')

/**
 * Optional Parameters
 * - Uses the '?' modifier to allow arguments to be passed as defined values or 'undefined'.
 */
function printName(first: string, last?: string): void {
    console.log(last ? `${first} ${last}` : first)
}

/**
 * Rest Parameters
 * - Requires typed array or tuple annotations to constrain rest argument collections.
 * - Output: [ 'Hello', 'World' ]
 */
function print(...args: string[]): void {
    console.log(args)
}
print('Hello', 'World')

/**
 * Destructured Parameters
 * - Applies inline object type annotations or interface shapes directly to destructured properties.
 * - Output: John admin
 */
function createUser({ name, role = 'admin' }: { name: string; role?: string }): void {
    console.log(name, role)
}
createUser({ name: 'John' })

/**
 * Rest Properties
 * - Types remaining destructured properties into a typed residual object structure.
 * - Output: John { role: 'admin' }
 */
function configureUser({ name, ...rest }: { name: string;[key: string]: unknown }): void {
    console.log(name, rest)
}
configureUser({ name: 'John', role: 'admin' })

//==================================================================================================
// Return
//==================================================================================================

/**
 * Return Value
 * - Validates that returning expressions strictly match declared or inferred return types.
 * - Output: 8
 */
function sum(x: number, y: number): number {
    return x + y
}
let result: number = sum(5, 3)
console.log(result)

/**
 * Multiple Return Values
 * - Preserves structural return types via typed tuples or object shapes for destructuring.
 * - Output: 1 0
 */
function divmod(x: number, y: number): [number, number] {
    return [Math.floor(x / y), x % y]
}
const [div, mod] = divmod(5, 2)
console.log(div, mod)

/**
 * Void
 * - Explicitly indicates the absence of a return value in functions that perform side effects.
 */
function logMessage(message: string): void {
    console.log(message)
}

/**
 * Never
 * - Represents functions that never return control to the caller (e.g., throw errors or infinite
 *   loops).
 */
function raiseError(message: string): never {
    throw new Error(message)
}

//==================================================================================================
// Overloads
//==================================================================================================

/**
 * Function Overloads
 * - Declares multiple public signatures above a single unified implementation signature.
 * - Output: 10
 */
function parseValue(value: string): number
function parseValue(value: number): string
function parseValue(value: string | number): string | number {
    if (typeof value === 'string') {
        return parseInt(value, 10)
    }
    return value.toString()
}
console.log(parseValue('10'))

export { }
