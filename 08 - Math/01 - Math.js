/**
 * Math
 *
 * The global Math object provides properties and methods for mathematical constants and functions.
 * It is a static built-in object, not a module, and does not require imports.
 */

// Constants
console.log(Math.E)                // 2.718281828459045
console.log(Math.PI)               // 3.141592653589793
console.log(Math.LOG10E)           // 0.4342944819032518
console.log(Math.LOG2E)            // 1.4426950408889634
console.log(Math.SQRT1_2)          // 0.7071067811865476
console.log(Math.SQRT2)            // 1.4142135623730951
console.log(Math.LN10)             // 2.302585092994046
console.log(Math.LN2)              // 0.6931471805599453

// Rounding & Truncation
console.log(Math.ceil(4.1))        // 5
console.log(Math.floor(4.9))       // 4
console.log(Math.round(4.5))       // 5
console.log(Math.trunc(4.9))       // 4
console.log(Math.fround(1.337))    // 1.3370000123977661 (32-bit float approximation)
console.log(Math.f16round(1.337))  // 1.3369140625 (16-bit float approximation)

// Basic Arithmetic & Utilities
console.log(Math.abs(-10))         // 10
console.log(Math.sign(-5))         // -1
console.log(Math.min(5, 1, 10))    // 1
console.log(Math.max(5, 1, 10))    // 10
console.log(Math.random())         // 0.7492... (random value between 0 inclusive and 1 exclusive)

// Exponentials, Powers & Roots
console.log(Math.pow(2, 3))        // 8
console.log(Math.sqrt(16))         // 4
console.log(Math.cbrt(27))         // 3
console.log(Math.exp(1))           // 2.718281828459045 (e^1)
console.log(Math.expm1(1))         // 1.718281828459045 (e^1 - 1)
console.log(Math.hypot(3, 4))      // 5 (sqrt(3^2 + 4^2))

// Logarithms
console.log(Math.log(Math.E))      // 1 (natural log)
console.log(Math.log10(100))       // 2 (base 10)
console.log(Math.log2(8))          // 3 (base 2)
console.log(Math.log1p(0))         // 0 (ln(1 + 0))

// Trigonometry
console.log(Math.sin(Math.PI / 2)) // 1 (90 deg)
console.log(Math.cos(Math.PI))     // -1 (180 deg)
console.log(Math.tan(Math.PI / 4)) // 1 (45 deg)
console.log(Math.asin(1))          // 1.5707963267948966 (Math.PI / 2 radians)
console.log(Math.acos(-1))         // 3.141592653589793 (Math.PI radians)
console.log(Math.atan(1))          // 0.7853981633974483 (Math.PI / 4 radians)
console.log(Math.atan2(5, 5))      // 0.7853981633974483 (angle for point y=5, x=5)

// Hyperbolic Trigonometry
console.log(Math.sinh(0))          // 0
console.log(Math.cosh(0))          // 1
console.log(Math.tanh(0))          // 0
console.log(Math.asinh(0))         // 0
console.log(Math.acosh(1))         // 0
console.log(Math.atanh(0))         // 0

// Bitwise & Low-Level Math
console.log(Math.clz32(1))         // 31 (number of leading zero bits in 32-bit binary)
console.log(Math.imul(2, 4))       // 8 (32-bit C-style integer multiplication)
