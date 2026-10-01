/**
 * Null and Undefined
 *
 * The 'null' keyword represents an intentional, explicit assignment of no value by the programmer,
 * while the 'undefined' represents an unintentional absence of value (automatically assigned by
 * JavaScript)
 *
 * Note: Programmers should only use 'null' for intentional empty values; 'undefined' should be left
 * exclusively for JavaScript to indicate uninitialized states.
 */

/**
 * Undefined Assignment
 * - Variables that are declared without an initial value are automatically assigned 'undefined'.
 * - Output: undefined
 */
let x
console.log(x)

/**
 * Null Assignment
 * - The 'null' value is assigned explicitly by the programmer to indicate an intentional absence of
 *   value.
 * - Output: null
 */
let y = null
console.log(y)

/**
 * Equality (Loose vs Strict)
 * - Using loose equality ('==') treats 'null' and 'undefined' as equivalent, whereas strict
 *   equality ('===') does not.
 * - Output: true false
 */
console.log(null == undefined, null === undefined)

/**
 * Type Of
 * - Checking the types using 'typeof'.
*  - Note: There is a historical known bug where 'typeof null' returns 'object'. It was never fixed
 *   to keep compatibility.
 * - Output: undefined object
 */
console.log(typeof undefined, typeof null)
