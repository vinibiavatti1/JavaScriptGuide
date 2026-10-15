/**
 * Generics
 *
 * Generic types are used to create reusable, type-safe components, functions, and data structures
 * that work across a variety of types rather than a single concrete type.
 */

//==================================================================================================
// Generic Functions
//==================================================================================================

/**
 * Generic Function
 * - Captures the argument type into a type variable (T) to enforce return type parity.
 */
function identity<T>(value: T): T {
    return value
}
const numValue = identity<number>(42)
const strValue = identity('Hello') // Inferred as identity<string>

/**
 * Generic Arrow Functions
 * - Defines generic parameter signatures within arrow function expressions.
 */
const getFirstElement = <T>(array: T[]): T | undefined => {
    return array[0]
}
const firstNum = getFirstElement([10, 20, 30])

//==================================================================================================
// Generic Interfaces & Types
//==================================================================================================

/**
 * Generic Interface
 * - Parameterizes interface contracts to wrap arbitrary data structures cleanly.
 */
interface ApiResponse<T> {
    data: T
    status: number
    success: boolean
}
type User = {
    id: number
    name: string
}
const response: ApiResponse<User> = {
    data: { id: 1, name: 'John' },
    status: 200,
    success: true
}

/**
 * Generic Type Alias
 * - Parameterizes complex type shapes, supporting default type arguments.
 */
type Container<T = string> = {
    value: T
}
const stringContainer: Container = { value: 'Default String' }
const numberContainer: Container<number> = { value: 100 }

//==================================================================================================
// Generic Constraints
//==================================================================================================

/**
 * Generic Constraints (extends)
 * - Restricts allowed type arguments to shapes that satisfy a specific base contract.
 */
interface SupportsLength {
    length: number
}
function logLength<T extends SupportsLength>(arg: T): number {
    return arg.length
}
logLength('Hello World')
logLength([1, 2, 3])

export { }
