/**
 * Random Implementations
 *
 * JavaScript does not provide built-in convenience methods for ranges, random array choices,
 * or shuffling within the global 'Math' object. This module demonstrates the standard community
 * utility patterns using 'Math.random()' alongside the native Web Crypto API for secure UUIDs.
 */
import crypto from 'node:crypto'

//==================================================================================================
// Core & Native Generators
//==================================================================================================

/**
 * Random Primitive
 * - Generates a pseudo-random floating-point number in the range [0, 1) (0 inclusive, 1 exclusive).
 * - Output: 0.41868133186369494
 */
console.log(Math.random())

/**
 * Random UUID
 * - Generates a cryptographically secure Version 4 UUID using the native Node.js Crypto module.
 * - Output: 40382ebd-b950-4255-b3b1-c06bc26f314a
 */
console.log(crypto.randomUUID())

//==================================================================================================
// Range & Primitive Generators
//==================================================================================================

/**
 * Random Float In Range
 * - Generates a pseudo-random floating-point number within a specified range [min, max).
 * - Output: 2.7126717729515777
 */
function randomFloat(min, max) {
    return Math.random() * (max - min) + min
}
console.log(randomFloat(1.5, 5.5))

/**
 * Random Integer In Range
 * - Generates a pseudo-random integer within a specified inclusive range [min, max].
 * - Output: 3
 */
function randomInt(min, max) {
    const minCeil = Math.ceil(min)
    const maxFloor = Math.floor(max)
    return Math.floor(Math.random() * (maxFloor - minCeil + 1)) + minCeil
}
console.log(randomInt(1, 6))

/**
 * Random Boolean
 * - Returns a boolean value based on a specified probability threshold (default 50%).
 * - Output: true
 */
function randomBoolean(chance = 0.5) {
    return Math.random() < chance
}
console.log(randomBoolean())

/**
 * Random Alphanumeric String
 * - Generates a random alphanumeric string of a specified length.
 * - Output: 2hs0bm9N
 */
function randomString(length = 8) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz01232456789'
    return Array.from({ length }, () => chars[Math.floor(Math.random() * chars.length)]).join('')
}
console.log(randomString())

//==================================================================================================
// Array & Collection Utilities
//==================================================================================================

/**
 * Random Array Item
 * - Selects and returns a single random element from an array.
 * - Output: C
 */
function getRandomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)]
}
console.log(getRandomItem(['A', 'B', 'C', 'D', 'E']))

/**
 * Array Shuffle
 * - Performs an unbiased in-place shuffle of array elements, returning a new shuffled array.
 * - Output: [ 'B', 'D', 'A', 'C', 'E' ]
 */
function shuffle(arr) {
    const result = [...arr]
    for (let i = result.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [result[i], result[j]] = [result[j], result[i]]
    }
    return result
}
console.log(shuffle(['A', 'B', 'C', 'D', 'E']))
