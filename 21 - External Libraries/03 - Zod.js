/**
 * Zod
 *
 * Description
 *
 * Note: This document covers only the most common and widely-used features of the library. For
 * advanced configurations, additional methods, and complete API references, please consult the
 * official documentation.
 */
import * as z from "zod";

//==================================================================================================
// Schema
//==================================================================================================

/**
 * Create Schema
 * -
 */
const UserSchema = z.object({
    name: z.string(),
    age: z.int().positive()
})

/**
 * Parse
 * -
 * - Output: { name: 'John', age: 30 }
 */
try {
    const user = UserSchema.parse({ name: 'John', age: 30 })
    console.log(user)
} catch (err) {
    // ...
}

/**
 * Safe Parse
 * -
 * - Output: { name: 'John', age: 30 }
 */
let user = UserSchema.safeParse({ name: 'John', age: 30 })
if (user.success) {
    console.log(user.data)
}

/**
 * Validate
 * -
 * - Output: true
 */
const isValid = UserSchema.validate({ name: 'John', age: 30 })
console.log(isValid)

//==================================================================================================
// Error Handling
//==================================================================================================

/**
 * Parse Error
 * -
 * - Output:
 *   [
 *       {
 *           expected: 'string',
 *           code: 'invalid_type',
 *           path: [ 'name' ],
 *           message: 'Invalid input: expected string, received number'
 *       },
 *       {
 *           expected: 'number',
 *           code: 'invalid_type',
 *           path: [ 'age' ],
 *           message: 'Invalid input: expected number, received string'
 *       }
 *   ]
 */
try {
    const user = UserSchema.parse({ name: 30, age: 'John' })
} catch (err) {
    if (err instanceof z.ZodError) {
        console.log(err.issues)
    }
}

/**
 * Safe Parse Error
 * -
 * - Output:
 *   [
 *       {
 *           expected: 'string',
 *           code: 'invalid_type',
 *           path: [ 'name' ],
 *           message: 'Invalid input: expected string, received number'
 *       },
 *       {
 *           expected: 'number',
 *           code: 'invalid_type',
 *           path: [ 'age' ],
 *           message: 'Invalid input: expected number, received string'
 *       }
 *   ]
 */
user = UserSchema.safeParse({
    name: 30,
    age: 'John'
})
if (user.error) {
    console.log(user.error.issues)
}

//==================================================================================================
// Primitive Types
//==================================================================================================

/**
 * Number
 * -
 */

/**
 * Bigint
 * -
 */

/**
 * Boolean
 * -
 */

/**
 * String
 * -
 */

/**
 * Symbol
 * -
 */

/**
 * Undefined & Null
 * -
 */

//==================================================================================================
// Coercion
//==================================================================================================

/**
 * Data Coercion
 * -
 */

//==================================================================================================
// Literals
//==================================================================================================

/**
 * Literals
 * -
 */

/**
 * Multiple Literals
 * -
 */

//==================================================================================================
// Transformation
//==================================================================================================

/**
 * Transform Data
 * -
 */
