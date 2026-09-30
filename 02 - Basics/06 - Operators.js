/**
 * Operators
 *
 * Operators are used to perform operations on variables and values, ranging from basic arithmetic
 * to modern logical evaluations and bitwise manipulation.
 */

/**
 * Arithmetic Operators
 * - Performs mathematical calculations on numeric values.
 * - Operators:
 *   - "+": addition
 *   - "-": subtraction
 *   - "*": multiplication
 *   - "/": division
 *   - "%": remainder/modulus
 *   - "**": exponentiation
 */
let x = 6, y = 2
console.log(x + y) // 8
console.log(x - y) // 4
console.log(x * y) // 12
console.log(x / y) // 3
console.log(x % y) // 0
console.log(2 ** 3) // 8

/**
 * Unary Operators
 * - Operates on a single operand to convert or modify its sign.
 * - Operators:
 *   - "+": attempts to convert the operand into a number
 *   - "-": negates the operand (changes its sign)
 */
x = 1
console.log(+x) // 1
console.log(-x) // -1

/**
 * Increment/Decrement Operators
 * - Increases or decreases an operand by 1, returning either the value before or after the
 *   operation.
 * - Prefix  (++x / --x): increments/decrements the value first, then returns it.
 * - Postfix (x++ / x--): returns the current value first, then increments/decrements it.
 */
x = 1
console.log(x++) // 1 - Postfix: prints 1, then x becomes 2
console.log(++x) // 3 - Prefix:  x becomes 3, then prints 3
console.log(x--) // 3 - Postfix: prints 3, then x becomes 2
console.log(--x) // 1 - Prefix:  x becomes 1, then prints 1

/**
 * Comparison Operators
 * - Compares two values and returns a boolean result (true or false).
 * - Operators:
 *   - "==" : equal to (with type coercion)
 *   - "===": strictly equal to (same value and type)
 *   - "!=" : not equal to
 *   - "!==": strictly not equal to
 *   - "<"  : less than
 *   - ">"  : greater than
 *   - "<=" : less than or equal to
 *   - ">=" : greater than or equal to
 * - Note: Always use '===' to avoid unexpected type coercion bugs and performance overhead.
 */
x = 6; y = 2
console.log(x == y)  // false
console.log(x === y) // false
console.log(x != y)  // true
console.log(x !== y) // true
console.log(x < y)   // false
console.log(x > y)   // true
console.log(x <= y)  // false
console.log(x >= y)  // true

/**
 * Logical Operators
 * - Combines or inverts boolean expressions.
 * - Operators:
 *   - "&&": logical AND
 *   - "||": logical OR
 *   - "!":  logical NOT
 */
x = 6; y = 2;
console.log(x > 0 && y > 0) // true
console.log(x > 0 || y < 0) // true
console.log(!(x > 0))       // false

/**
 * Logical Assignment Operators
 * - Assigns a value conditionally based on the truthiness or nullishness of the left-hand side.
 * - Operators:
 *   - "&&=": logical AND assignment
 *   - "||=": logical OR assignment
 *   - "??=": nullish coalescing assignment
 * - Output: 1
 */
x = null
x ??= 1
console.log(x)

/**
 * Nullish Operators
 * - Safely evaluates expressions.
 * - Operators:
 *   - "??": nullish coalescing (returns right side only if left is null or undefined)
 *   - "?.": optional chaining (prevents errors when accessing nested properties of null/undefined)
 */
let obj = {}
console.log(obj.user ?? 'default') // default
console.log(obj.user?.name)        // undefined (no error thrown)

/**
 * Bitwise Operators
 * - Performs low-level bit operations on 32-bit integers.
 * - Operators:
 *   - "&": bitwise AND
 *   - "|": bitwise OR
 *   - "^": bitwise XOR
 *   - "~": bitwise NOT
 */
x = 0b010101       // 21 in decimal
y = 0b001111       // 15 in decimal
console.log(x & y) // 0b000101 = 5
console.log(x | y) // 0b011111 = 31
console.log(x ^ y) // 0b011010 = 26
console.log(~x)    // 0b101010 = -22

/**
 * Shift Operators
 * - Moves the bits of the operand left or right by a specified number of positions.
 * - Operators:
 *   - "<<" : left shift
 *   - ">>" : signed right shift (preserves sign)
 *   - ">>>": zero-fill right shift (does not preserve sign)
 */
x = 0b001100         // 12 in decimal
y = -0b001100        // -12 in decimal
console.log(x << 2)  //  0b110000 = 48
console.log(y >> 2)  //  0b000011 = -3 (sign preserved)
console.log(y >>> 2) // 1073741821 (sign not preserved)

/**
 * Assignment Operators
 * - Assigns a value to a variable, optionally performing an operation during the assignment.
 * - Operators:
 *   - "="   : assigns value
 *   - "+="  : addition assignment
 *   - "-="  : subtraction assignment
 *   - "*="  : multiplication assignment
 *   - "/="  : division assignment
 *   - "%="  : remainder assignment
 *   - "&="  : bitwise AND assignment
 *   - "|="  : bitwise OR assignment
 *   - "^="  : bitwise XOR assignment
 *   - "<<=" : left shift assignment
 *   - ">>=" : signed right shift assignment
 *   - ">>>=": zero-fill right shift assignment
 * - Output: 6
 */
x = 3
x += 3 // equivalent to x = x + 3, now x = 6
console.log(x)
