/**
 * Lodash
 *
 * A modern JavaScript utility library delivering modularity, performance, and extra goodies for
 * safe data manipulation, collection processing, and function handling.
 *
 * The name 'Lodash' is a clever wordplay on "low-dash", which is a phonetic pronunciation of an
 * underscore ("_"). It originated in 2012 as a high-performance fork and drop-in replacement for
 * Underscore.js, keeping the iconic underscore symbol as its primary namespace.
 *
 * Note: This document covers only the most common and widely-used features of the library. For
 * advanced configurations, additional methods, and complete API references, please consult the
 * official documentation.
 */
import _ from 'lodash'

//==================================================================================================
// Object Operations
//==================================================================================================

/**
 * Deep Clone
 * - Deep cloning creates a complete copy of nested objects and arrays, preventing reference
 *   mutations.
 * - The utility below deeply clones a nested user configuration object.
 * - Output: dark
 */
const original = { user: { name: 'John', settings: { theme: 'dark' } } }
const cloned = _.cloneDeep(original)
cloned.user.settings.theme = 'light'
console.log(original.user.settings.theme)

/**
 * Get Nested Property
 * - Nested properties can be safely accessed using dot-notation paths without throwing type errors.
 * - The utility below safely retrieves a deeply nested value, returning undefined if paths are
 *   missing.
 * - Output: john@example.com N/A
 */
const nestedData = { account: { profile: { email: 'john@example.com' } } }
const email = _.get(nestedData, 'account.profile.email')
const phone = _.get(nestedData, 'account.profile.phone', 'N/A')
console.log(email, phone)

/**
 * Omit Properties
 * - Objects can be filtered to exclude specific keys when transferring or returning payload data.
 * - The utility below creates a new object excluding sensitive properties like passwords.
 * - Output: { id: 1, name: 'John' }
 */
const userRecord = { id: 1, name: 'John', password: 'secretpassword' }
const publicUser = _.omit(userRecord, ['password'])
console.log(publicUser)

//==================================================================================================
// Validation & Comparison Utilities
//==================================================================================================

/**
 * Is Empty Check
 * - Safely checks if values, collections, maps, sets, or plain objects are empty.
 * - Unlike native JavaScript where empty arrays or objects evaluate to truthy, isEmpty returns true
 *   for empty structures, null, undefined, and blank strings.
 */
console.log(_.isEmpty(null))      // Output: true
console.log(_.isEmpty([]))        // Output: true
console.log(_.isEmpty({}))        // Output: true
console.log(_.isEmpty([1, 2, 3])) // Output: false
console.log(_.isEmpty({ a: 1 }))  // Output: false

/**
 * Deep Equal Comparison
 * - Performs a deep comparison between two values to determine if they are equivalent.
 * - Unlike native operators ('===' or 'Object.is') which compare object references, isEqual
 *   recursively compares the values of all properties and nested structures.
 */
const objA = { user: { id: 1, permissions: ['read', 'write'] } }
const objB = { user: { id: 1, permissions: ['read', 'write'] } }
console.log(objA === objB)         // Output: false (different memory references)
console.log(_.isEqual(objA, objB)) // Output: true (deeply identical values)

//==================================================================================================
// Array Utilities
//==================================================================================================

/**
 * Chunk Array
 * - Arrays can be split into smaller groups of a specified size for batch processing or pagination.
 * - The utility below splits an array of items into chunks of 2 elements each.
 * - Output: [ [1, 2], [3, 4], [5] ]
 */
const items = [1, 2, 3, 4, 5]
const chunked = _.chunk(items, 2)
console.log(chunked)

/**
 * Unique Array Values
 * - Duplicate elements can be removed from arrays to produce a set of unique values.
 * - The utility below filters out duplicate numbers from an array.
 * - Output: [1, 2, 3, 4, 5]
 */
const numbers = [1, 2, 2, 3, 4, 4, 5]
const uniqueNumbers = _.uniq(numbers)
console.log(uniqueNumbers)

/**
 * Group By Property
 * - Collections can be grouped into categorized dictionaries based on an iteratee property or
 *   function.
 * - The utility below groups user objects by their role property.
 * - Output:
 *   {
 *      admin: [ { name: 'John', role: 'admin' }, { name: 'Bob', role: 'admin' } ],
 *      user: [ { name: 'Jane', role: 'user' } ]
 *   }
 */
const users = [
    { name: 'John', role: 'admin' },
    { name: 'Jane', role: 'user' },
    { name: 'Bob', role: 'admin' }
]
const groupedByRole = _.groupBy(users, 'role')
console.log(groupedByRole)

//==================================================================================================
// Random Utilities
//==================================================================================================

/**
 * Random Numbers
 * - Random numbers within a specified minimum and maximum range can be easily generated.
 * - The utility below generates a random integer between 1 and 10 (inclusive).
 * - Output: A random integer from 1 to 10
 */
const randomNumber = _.random(1, 10)
console.log(randomNumber)

/**
 * Random Sample
 * - A random element can be picked from an array without manual index calculations.
 * - The utility below selects a random item from a list of colors.
 * - Output: A random color from the array
 */
const colors = ['red', 'green', 'blue', 'yellow']
const randomColor = _.sample(colors)
console.log(randomColor)

//==================================================================================================
// Function Utilities
//==================================================================================================

/**
 * Debounce Function
 * - Function execution can be delayed until a specified time has elapsed since the last time it was
 *   invoked.
 * - Useful for handling high-frequency events like window resizing or search inputs.
 * - Output: Only this final invocation will execute after the 300ms threshold
 */
const saveInput = _.debounce((text) => {
    console.log('Saving input:', text)
}, 300)
saveInput('Typing...')
saveInput('Typing fast...')
