/**
 * Const Assertions
 *
 * Const assertions are used to instruct the TypeScript compiler to infer the most narrow, immutable
 * literal types possible for expressions, arrays, and objects.
 */

//==================================================================================================
// Primitives & Arrays
//==================================================================================================

/**
 * Primitive Literal Widening Prevention
 * - Prevents TypeScript from widening a specific primitive value to its general type (e.g.,
 *   'active' instead of string).
 * - Type: 'active'
 */
const mode = 'active' as const

/**
 * Array Const Assertions
 * - Converts mutable arrays into read-only tuples with exact literal element types.
 * - Type: readonly ['red', 'green', 'blue']
 */
const supportedColors = ['red', 'green', 'blue'] as const

//==================================================================================================
// Object Shapes
//==================================================================================================

/**
 * Object Const Assertions
 * - Recursively freezes object properties, marking every field as 'readonly' and inferring
 *   nested values as exact literals rather than broad primitive types.
 * - Type: { readonly name: 'John', readonly age: 30 }
 */
const user = {
    name: 'localhost',
    age: 30
} as const

export { }
