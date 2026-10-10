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
// Object Schema
//==================================================================================================

/**
 * Creating Object Schema
 * - Defines structured object schemas with typed property shapes.
 */
const userSchema = z.object({
    name: z.string(),
    age: z.int().positive()
})

/**
 * Parse
 * - Validates input data and returns the parsed result, throwing an error on failure.
 * - Output: { name: 'John', age: 30 }
 */
try {
    const user = userSchema.parse({ name: 'John', age: 30 })
    console.log(user)
} catch (err) {
    // ...
}

/**
 * Parse Error
 * - Catches ZodError exceptions and inspects detailed issue structures.
 * - Output:
 *   string | invalid_type | [ 'name' ] | Invalid input: expected string, received number
 *   number | invalid_type | [ 'age' ] | Invalid input: expected number, received string
 */
try {
    const user = userSchema.parse({ name: 30, age: 'John' })
} catch (err) {
    if (err instanceof z.ZodError) {
        err.issues.forEach(issue => console.log(
            issue.expected, issue.code, issue.path, issue.message
        ))
    }
}

/**
 * Safe Parse
 * - Validates input data without throwing exceptions, returning a result object.
 * - Output: { name: 'John', age: 30 }
 */
let userResult = userSchema.safeParse({ name: 'John', age: 30 })
if (userResult.success) {
    console.log(userResult.data)
}

/**
 * Safe Parse Error
 * - Inspects errors returned directly from safeParse result objects.
 * - Output:
 *   string | invalid_type | [ 'name' ] | Invalid input: expected string, received number
 *   number | invalid_type | [ 'age' ] | Invalid input: expected number, received string
 */
userResult = userSchema.safeParse({
    name: 30,
    age: 'John'
})
if (userResult) {
    userResult.error.issues.forEach(issue => console.log(
        issue.expected, issue.code, issue.path, issue.message
    ))
}

//==================================================================================================
// Data Types & Features
//==================================================================================================

// Boolean
z.boolean()

// Numbers
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

// String
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

// Dates
z.iso.date();
z.iso.time();
z.iso.datetime();
z.iso.duration();

// Arrays & Tuples
z.array(z.string())
z.tuple([z.string(), z.number()])

// Union
z.union([z.string(), z.number()])

// Nullable
z.nullable(z.string());

// Coercion
z.coerce.string();  // String(input)
z.coerce.number();  // Number(input)
z.coerce.boolean(); // Boolean(input)
z.coerce.bigint();  // BigInt(input)

// Literals
z.literal('x')
z.literal(['x', 'y', 'z'])

// Enums
z.enum(['x', 'y', 'z'])

// Transformation
z.string().trim();
z.string().toLowerCase();
z.string().toUpperCase();
z.string().normalize();
z.string().transform(val => val.length);
