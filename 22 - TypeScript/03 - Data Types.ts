/**
 * Data Types
 *
 * An overview of the built-in data types and reference structures available in TypeScript,
 * distinguishing between immutable primitive values and mutable reference types with static type
 * safety.
 */

/**
 * Primitive Types
 * - Immutable values stored directly on the stack that represent a single atomic value.
 */
const a1: number = 1
const a2: number = 3.14
const a3: bigint = 123n
const a4: boolean = true
const a5: string = 'John Doe'
const a6: symbol = Symbol('id')
const a7: null = null
const a8: undefined = undefined

/**
 * Collections
 * - Data structures designed for storing collections of items or unique keyed values.
 */
const b1: string[] = ['A', 'B', 'C']
const b2: Set<string> = new Set()
const b3: Map<string, number> = new Map()

/**
 * Tuples
 * - Fixed-length arrays where each element has a statically defined type per index position.
 * - Note: Tuples are a TypeScript-exclusive compile-time construct and do not exist natively in
 *   JavaScript at runtime (they compile down to standard JS arrays).
 */
const c1: [number, string] = [200, 'OK']

/**
 * Objects
 * - Mutable reference structures stored on the heap representing key-value collections or entities.
 */
const d1: { name: string } = { name: 'John' }

/**
 * Specialized Types
 * - Advanced or domain-specific native objects providing rich functionality.
 */
const e1: RegExp = /[a-z]*/g
const e2: () => void = () => { }
const e3: Date = new Date()
const e4: void = undefined
const e5: never = (() => { throw new Error() })()

/**
 * Top & Dynamic Types
 * - TypeScript-specific types for handling dynamic values, opting out of checking, or ensuring safe
 *   unknown handling.
 */
const f1: any = 'Dynamic value'
const f2: unknown = 'Safe unknown'

/**
 * Literal & Union Types
 * - Literal types restrict values to exact primitive values (string, number, boolean literals).
 * - Union types combine multiple types using the pipe operator (|) to allow a value to match one of
 *   several types.
 */
const g1: 'north' | 'south' | 'east' | 'west' = 'north'
const g2: 200 | 400 | 500 = 200
const g3: string | number = 'ABC-123'
