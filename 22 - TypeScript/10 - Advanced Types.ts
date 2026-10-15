/**
 * Advanced Types
 *
 * Advanced types and utility types are used to transform, extract, and manipulate existing type
 * shapes dynamically without duplicating code.
 */

//==================================================================================================
// Type Operators
//==================================================================================================

/**
 * Keyof Operator
 * - Produces a union type of all property keys (strings or numbers) from a given object type.
 * - Type: UserKeys = 'id' | 'name' | 'isAdmin'
 */
interface User {
    id: number
    name: string
    isAdmin: boolean
}
type UserKeys = keyof User
const key: UserKeys = 'name'

/**
 * Typeof Operator
 * - Captures the exact type shape of an existing runtime value or constant.
 * - Type: Inferred: { endpoint: string; timeout: number; }
 */
const defaultConfig = {
    endpoint: '/api/v1',
    timeout: 3000
}
type Config = typeof defaultConfig

//==================================================================================================
// Utility Types
//==================================================================================================

/**
 * Partial<T>
 * - Constructs a type with all properties of T set to optional, ideal for update/patch payloads.
 */
type PartialUser = Partial<User>
const updatedData: PartialUser = { name: 'John' } // Valid without id and isAdmin

/**
 * Required<T>
 * - Constructs a type with all properties of T set to required, reversing the effect of Partial.
 */
type FullyRequiredUser = Required<PartialUser>

/**
 * Pick<T, K>
 * - Constructs a type by picking a specific subset of properties (K) from an object type (T).
 */
type UserCredentials = Pick<User, 'id' | 'name'>
const credentials: UserCredentials = { id: 1, name: 'John' }

/**
 * Omit<T, K>
 * - Constructs a type by omitting specific properties (K) from an object type (T).
 */
type PublicUser = Omit<User, 'isAdmin'>
const publicProfile: PublicUser = { id: 1, name: 'John' }

/**
 * Record<K, T>
 * - Constructs an object type whose property keys are K and whose property values are T.
 */
type RolePermissions = Record<'admin' | 'editor' | 'viewer', string[]>
const permissions: RolePermissions = {
    admin: ['read', 'write', 'delete'],
    editor: ['read', 'write'],
    viewer: ['read']
}

export { }
