/**
 * Map
 *
 * Maps are collections of key-value pairs where any value (both objects and primitive values) may
 * be used as either a key or a value.
 *
 * Note: Unlike plain Objects, Maps maintain insertion order, support any data type as keys
 * (including objects and functions), have a built-in 'size' property, and do not contain default
 * prototype keys that could cause collision issues.
 */

//==================================================================================================
// Map
//==================================================================================================

/**
 * Declaration
 * - Initializes a new Map instance with an iterable of key-value pairs.
 * - Output: Map(2) { 'name' => 'John', 'age' => 30 }
 */
let mp = new Map([['name', 'John'], ['age', 30]])
console.log(mp)

/**
 * Length (Size)
 * - Returns the total number of key-value entries present in the Map.
 * - Output: 1
 */
mp = new Map([['name', 'John']])
console.log(mp.size)

/**
 * Type Of
 * - Checking if a value is strictly an instance of Map using the 'instanceof' operator.
 * - Note: The 'typeof' operator returns 'object' for Map because Map is derived from Object.
 * - Output: true
 */
mp = new Map([['name', 'John']])
console.log(mp instanceof Map)

//==================================================================================================
// Key-Value Operations
//==================================================================================================

/**
 * Has
 * - Returns a boolean indicating whether an entry with the specified key exists.
 * - Output: true
 */
mp = new Map([['name', 'John']])
console.log(mp.has('name'))

/**
 * Set
 * - Adds or updates an entry in the Map with a specified key and value.
 * - Output: Map(2) { 'name' => 'John', 'age' => 30 }
 */
mp = new Map([['name', 'John']])
mp.set('age', 30)
console.log(mp)

/**
 * Get
 * - Returns the value associated with the specified key, or undefined if the key does not exist.
 * - Output: John
 */
mp = new Map([['name', 'John']])
console.log(mp.get('name'))

/**
 * Get or Insert
 * - Returns the value associated with the key if it exists; otherwise inserts and returns value.
 * - Output: 30 Map(2) { 'name' => 'John', 'age' => 30 }
 */
mp = new Map([['name', 'John']])
let result = mp.getOrInsert('age', 30)
console.log(result, mp)

/**
 * Get or Insert (Computed)
 * - Returns value if key exists; otherwise computes value via callback, inserts, and returns it.
 * - Output: 30 Map(2) { 'name' => 'John', 'age' => 30 }
 */
mp = new Map([['name', 'John']])
result = mp.getOrInsertComputed('age', () => 20 + 10)
console.log(result, mp)

/**
 * Delete
 * - Removes the entry for the specified key from the Map.
 * - Output: Map(1) { 'name' => 'John' }
 */
mp = new Map([['name', 'John'], ['age', 30]])
mp.delete('age')
console.log(mp)

/**
 * Clear
 * - Removes all key-value entries from the Map.
 * - Output: Map(0) {}
 */
mp = new Map([['name', 'John'], ['age', 30]])
mp.clear()
console.log(mp)

//==================================================================================================
// Iteration
//==================================================================================================

/**
 * For Of
 * - Iterates over key-value pairs as [key, value] tuples.
 * - Note: Iterating directly over the Map is equivalent to 'mp.entries()'.
 * - Output: name John | age 30
 */
mp = new Map([['name', 'John'], ['age', 30]])
for (const [key, val] of mp) {
    console.log(key, val)
}

/**
 * For Of (Keys)
 * - Iterates directly over the keys contained in the Map.
 * - Output: name | age
 */
mp = new Map([['name', 'John'], ['age', 30]])
for (const key of mp.keys()) {
    console.log(key)
}

/**
 * For Of (Values)
 * - Iterates directly over the values contained in the Map.
 * - Output: John | 30
 */
mp = new Map([['name', 'John'], ['age', 30]])
for (const val of mp.values()) {
    console.log(val)
}

/**
 * For Each (Functional)
 * - Executes a provided callback function once for each key-value pair in the Map.
 * - Note: The callback parameter order is (value, key).
 * - Output: name John | age 30
 */
mp = new Map([['name', 'John'], ['age', 30]])
mp.forEach((val, key) => console.log(key, val))

//==================================================================================================
// Destructure & Spread
//==================================================================================================

/**
 * Destructuring
 * - Unpacks key-value entries from a Map into distinct variables.
 * - Output: [ 'name', 'John' ] [ 'age', 30 ] [ [ 'role', 'admin' ] ]
 */
mp = new Map([['name', 'John'], ['age', 30], ['role', 'admin']])
let [a, b, ...rest] = mp
console.log(a, b, rest)

/**
 * Spread Operator (...)
 * - Expands a Map into an array of entries to clone or combine entries into a new Map.
 * - Output: Map(3) { 'name' => 'John', 'age' => 30, 'role' => 'admin' }
 */
mp = new Map([['name', 'John'], ['age', 30]])
let clone = new Map([...mp, ['role', 'admin']])
console.log(clone)
