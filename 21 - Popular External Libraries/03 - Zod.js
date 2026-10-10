/**
 * Zod
 *
 * A TypeScript-first schema declaration and validation library with static type inference, designed
 * to validate unknown data inputs safely at runtime.
 *
 * Note: This document covers only the most common and widely-used features of the library. For
 * advanced configurations, additional methods, and complete API references, please consult the
 * official documentation.
 */
import * as z from 'zod';

//==================================================================================================
// Schema Types
//==================================================================================================

/**
 * Boolean
 * - Validates boolean values.
 */
z.boolean()

/**
 * Number & Bigint
 * - Validates numeric constraints, ranges, and bigints.
 */
z.int()
z.bigint()
z.number().gt(5)
z.number().min(5)
z.number().lt(5)
z.number().max(5)
z.number().positive()
z.number().nonnegative()
z.number().negative()
z.number().nonpositive()

/**
 * String
 * - Validates string lengths, formats, and patterns.
 */
z.string().max(5);
z.string().min(5);
z.string().length(5);
z.string().nonempty();
z.string().regex(/^[a-z]+$/);
z.string().startsWith('aaa');
z.string().endsWith('zzz');
z.string().includes('---');
z.string().uppercase();
z.string().lowercase();
z.string().trim();
z.string().toLowerCase();
z.string().toUpperCase();
z.string().normalize();

/**
 * Dates
 * - Validates ISO date and time formats.
 */
z.iso.date();
z.iso.time();
z.iso.datetime();
z.iso.duration();

/**
 * Arrays & Tuples
 * - Validates homogeneous arrays and fixed-length typed tuples.
 */
z.array(z.string())
z.tuple([z.string(), z.number(), z.boolean()])

/**
 * Union
 * - Validates values that can match any of the given schemas.
 */
z.union([z.string(), z.number()])

/**
 * Nullable
 * - Allows a schema to also accept null values.
 */
z.nullable(z.string());

/**
 * Data Coercion
 * - Automatically coerces incoming primitive values into target types.
 */
z.coerce.string();  // String(input)
z.coerce.number();  // Number(input)
z.coerce.boolean(); // Boolean(input)
z.coerce.bigint();  // BigInt(input)

/**
 * Literals
 * - Validates exact primitive values or an array of allowed literal options.
 */
z.literal('x')
z.literal(['x', 'y', 'z'])

/**
 * Enums
 * - Validates strings against a fixed set of options.
 * - Use '.exclude([...])' or '.extract([...])' to derive subsets from existing enums.
 */
z.enum(['x', 'y', 'z'])

//==================================================================================================
// Transformation
//==================================================================================================

/**
 * Transformation
 * - Modifies or transforms parsed data values during validation.
 */
z.string().trim();
z.string().toLowerCase();
z.string().toUpperCase();
z.string().normalize();
z.string().transform(val => val.length);

//==================================================================================================
// Object Schema
//==================================================================================================

/**
 * Creating Object Schema
 * - Defines structured object schemas with typed property shapes.
 */
const UserSchema = z.object({
    name: z.string(),
    age: z.int().positive()
})

/**
 * Parse
 * - Validates input data and returns the parsed result, throwing an error on failure.
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
 * - Validates input data without throwing exceptions, returning a result object.
 * - Output: { name: 'John', age: 30 }
 */
let user = UserSchema.safeParse({ name: 'John', age: 30 })
if (user.success) {
    console.log(user.data)
}

//==================================================================================================
// Error Handling
//==================================================================================================

/**
 * Parse Error
 * - Catches ZodError exceptions and inspects detailed issue structures.
 * - Output:
 *   string | invalid_type | [ 'name' ] | Invalid input: expected string, received number
 *   number | invalid_type | [ 'age' ] | Invalid input: expected number, received string
 */
try {
    const user = UserSchema.parse({ name: 30, age: 'John' })
} catch (err) {
    if (err instanceof z.ZodError) {
        err.issues.forEach(issue => console.log(
            issue.expected, issue.code, issue.path, issue.message
        ))
    }
}

/**
 * Safe Parse Error
 * - Inspects errors returned directly from safeParse result objects.
 * - Output:
 *   string | invalid_type | [ 'name' ] | Invalid input: expected string, received number
 *   number | invalid_type | [ 'age' ] | Invalid input: expected number, received string
 */
user = UserSchema.safeParse({
    name: 30,
    age: 'John'
})
if (user.error) {
    user.error.issues.forEach(issue => console.log(
        issue.expected, issue.code, issue.path, issue.message
    ))
}
