/**
 * Types (Type Aliases)
 *
 * Type aliases are used to create custom names for primitive values, unions, intersections, tuples,
 * and function signatures.
 */

//==================================================================================================
// Basic Type Aliases
//==================================================================================================

/**
 * Primitive & Union Types
 * - Aliases primitive types or creates union types allowing a value to match one of several types.
 */
type Words = string
type Id = string | number
type Status = 'pending' | 'approved' | 'rejected'
const x: Words = 'Hello World'
const y: Id = 123
const z: Status = 'approved'

/**
 * Tuple Type Aliases
 * - Aliases fixed-length array structures with specific positional types.
 */
type KeyValuePair = [string, unknown]
const entry: KeyValuePair = ['age', 30]

/**
 * Function Signatures
 * - Defines reusable callable signatures for functions or callbacks.
 */
type Comparator = (a: number, b: number) => number
const fn: Comparator = (a, b) => a - b

//==================================================================================================
// Objects
//==================================================================================================

/**
 * Objects
 * - Defines object type contracts using type alias syntax.
 * - Note on Types vs Interfaces: While both can define object shapes, interfaces are designed to be
 *   extensible (supporting inheritance and declaration merging), whereas type aliases cannot be
 *   re-opened or merged once created.
 */
type User = {
    name: string,
    age: number
}
const user: User = {
    name: 'John',
    age: 30
}

//==================================================================================================
// Intersections
//==================================================================================================

/**
 * Intersection Types
 * - Combines multiple types into a single type using '&', requiring values to satisfy all combined
 *   shapes.
 */
type Identifiable = {
    id: number
}
type Timestamps = {
    createdAt: Date
    updatedAt: Date
}
const entity: Identifiable & Timestamps = {
    id: 1,
    createdAt: new Date(),
    updatedAt: new Date()
}
