/**
 * Arrays
 *
 * Arrays in JavaScript are ordered list-like objects used to store multiple values in a single
 * variable. Modern ECMAScript introduces immutable alternatives (like 'toSorted', 'toSpliced',
 * 'toReversed', and 'with') to avoid side-effects caused by mutating original arrays.
 */

//==================================================================================================
// Arrays
//==================================================================================================

/**
 * Declaration
 * - Initializes a new array literal containing initial items.
 * - Output: [ 'A', 'B', 'C' ]
 */
let arr = ['A', 'B', 'C']
console.log(arr)

/**
 * Destructuring
 * - Unpacks values from arrays into distinct variables.
 * - Supports default values when elements are undefined and the rest syntax (...) to gather
 *   remaining elements.
 * - Output: A B [ 'C', 'D' ]
 */
arr = ['A', 'B', 'C', 'D']
let [a, b, ...rest] = arr
console.log(a, b, rest)

/**
 * Spread Operator (...)
 * - Expands an array into its individual elements.
 * - Commonly used for shallow copying arrays, merging multiple arrays, or passing array elements as
 *   function arguments.
 * - Output: ['A', 'B', 'C']
 */
arr = ['A', 'B']
let result = [...arr, 'C']
console.log(result)

/**
 * Length
 * - Returns the total number of elements present in the array.
 * - Output:
 */
arr = ['A', 'B', 'C']
console.log(arr.length)

/**
 * Index Access
 * - Retrieves an element at a specific zero-based index position.
 * - Output: A
 */
arr = ['A', 'B', 'C']
console.log(arr[0])

/**
 * Index Assignment
 * - Replaces an existing element at a specific zero-based index position.
 * - Output: [ 'A', 'X', 'C' ]
 */
arr = ['A', 'B', 'C']
arr[1] = 'X'
console.log(arr)

/**
 * To String
 * - Converts the value into its string representation using the 'toString()' method.
 * - Note: Use 'toLocaleString()' when formatting elements based on locale conventions (e.g.,
 *   dates/currencies).
 * - Output: A,B,C
 */
arr = ['A', 'B', 'C']
console.log(arr.toString())

//==================================================================================================
// Static Utility Methods
//==================================================================================================

/**
 * Array Of
 * - Creates a new Array instance from a variable number of arguments, regardless of quantity or
 *   type.
 * - Output: ['A', 'B', 'C']
 */
arr = Array.of('A', 'B', 'C')
console.log(arr)

/**
 * Array From
 * - Creates a new shallow-copied Array instance from an array-like or iterable object.
 * - Output: ['A', 'B', 'C']
 */
arr = Array.from('ABC')
console.log(arr)

/**
 * Type Of
 * - Checking if a value is strictly of type array using the 'Array.isArray' function.
 * - Note: The 'typeof' operator returns 'object' for arrays because arrays are derived from Object.
 * - Output: true
 */
arr = ['A', 'B', 'C']
console.log(Array.isArray(arr))

//==================================================================================================
// Iteration
//==================================================================================================

/**
 * For
 * - Standard imperative loop over array elements using an index counter.
 * - Output: 0 A | 1 B | 2 C
 */
arr = ['A', 'B', 'C']
for (let i = 0; i < arr.length; i++) {
    console.log(i, arr[i])
}

/**
 * For Of (Keys)
 * - Iterates over the index keys of the array.
 * - Output: 0 | 1 | 2
 */
arr = ['A', 'B', 'C']
for (let i of arr.keys()) {
    console.log(i)
}

/**
 * For Of (Values)
 * - Iterates directly over the values of each element in the array.
 * - Output: A | B | C
 */
arr = ['A', 'B', 'C']
for (let item of arr) {
    console.log(item)
}

/**
 * For Of (Entries)
 * - Iterates over key-value pairs as [index, value] tuples.
 * - Output: 0 A | 1 B | 2 C
 */
arr = ['A', 'B', 'C']
for (let [i, item] of arr.entries()) {
    console.log(i, item)
}

/**
 * For Each (Functional)
 * - Executes a provided callback function once for each array element.
 * - Output: 0 A | 1 B | 2 C
 */
arr = ['A', 'B', 'C']
arr.forEach((item, i) => console.log(i, item))

//==================================================================================================
// Index Operations
//==================================================================================================

/**
 * At
 * - Retrieves an element at a given index, supporting negative integers to count back from the end.
 * - Output: B
 */
arr = ['A', 'B', 'C']
console.log(arr.at(1))

/**
 * Index Of
 * - Returns the first index at which a given element is found, or -1 if not present.
 * - Output: 1
 */
arr = ['A', 'B', 'C']
console.log(arr.indexOf('B'))

/**
 * Last Index Of
 * - Returns the last index at which a given element is found, searching backwards from the end.
 * - Output: 2
 */
arr = ['A', 'B', 'A']
console.log(arr.lastIndexOf('A'))

//==================================================================================================
// Transformation
//==================================================================================================

/**
 * Push
 * - Appends one or more elements to the end of the array (mutates original array).
 * - Output: [ 'A', 'B', 'C' ]
 */
arr = ['A', 'B']
arr.push('C')
console.log(arr)

/**
 * Unshift
 * - Adds one or more elements to the beginning of the array (mutates original array).
 * - Output: [ 'A', 'B', 'C' ]
 */
arr = ['B', 'C']
arr.unshift('A')
console.log(arr)

/**
 * Pop
 * - Removes and returns the last element from the array (mutates original array).
 * - Output: C [ 'A', 'B' ]
 */
arr = ['A', 'B', 'C']
let item = arr.pop()
console.log(item, arr)

/**
 * Shift
 * - Removes and returns the first element from the array (mutates original array).
 * - Output: A [ 'B', 'C' ]
 */
arr = ['A', 'B', 'C']
item = arr.shift()
console.log(item, arr)

/**
 * Splice
 * - Removes or replaces existing elements in-place (mutates original array).
 * - Note: Use 'toSpliced()' for an immutable copy version that leaves the original array untouched.
 * - Output: [ 'A', 'B' ]
 */
arr = ['A', 'x', 'x', 'B']
arr.splice(1, 2)
console.log(arr)

/**
 * Slice
 * - Extracts a shallow copy of a portion of an array into a new array (end index non-inclusive).
 * - Output: [ 'A', 'B' ]
 */
arr = ['A', 'B', 'C']
result = arr.slice(0, 2)
console.log(result)

/**
 * Sort
 * - Sorts elements in-place using a comparator function (mutates original array).
 * - Note: Use 'toSorted()' for an immutable copy version that leaves the original array untouched.
 * - Output: [ 1, 2, 3 ]
 */
arr = [3, 2, 1]
arr.sort((a, b) => a - b)
console.log(arr)

/**
 * Concat
 * - Merges two or more arrays together into a new array without modifying the originals.
 * - Output: [ 'A', 'B', 'C', 'D' ]
 */
arr = ['A', 'B']
result = arr.concat(['C', 'D'])
console.log(result)

/**
 * Fill
 * - Fills specified array elements with a static value from start to end index (mutates original
 *   array).
 * - Output: [ 'X', 'X', 'C' ]
 */
arr = ['A', 'B', 'C']
arr.fill('X', 0, 2)
console.log(arr)

/**
 * Copy Within
 * - Copies array elements within the array to and from specified positions (mutates original
 *   array).
 * - Output: [ 'A', 'A', 'B' ]
 */
arr = ['A', 'B', 'C']
arr.copyWithin(1, 0, 2)
console.log(arr)

/**
 * Join
 * - Joins all elements of an array into a single string separated by a specified separator string.
 * - Output: A,B,C
 */
arr = ['A', 'B', 'C']
result = arr.join(',')
console.log(result)

/**
 * Reverse
 * - Reverses the order of elements in an array in-place (mutates original array).
 * - Note: Use 'toReversed()' for an immutable copy version that leaves the original array
 *   untouched.
 * - Output: [ 'C', 'B', 'A' ]
 */
arr = ['A', 'B', 'C']
arr.reverse()
console.log(arr)

/**
 * With
 * - Returns a new array with the element at the specified index replaced (immutable alternative to
 *   bracket assignment).
 * - Output: [ 'X', 'B', 'C' ]
 */
arr = ['A', 'B', 'C']
result = arr.with(0, 'X')
console.log(result)

//==================================================================================================
// Equality and Matching
//==================================================================================================

/**
 * Includes
 * - Determines whether an array includes a certain value among its entries, returning true or
 *   false.
 * - Output: true
 */
arr = ['A', 'B', 'C']
console.log(arr.includes('B'))

//==================================================================================================
// Functional Operations
//==================================================================================================

/**
 * Filter
 * - Creates a new array with all elements that pass the test implemented by the provided function.
 * - Output: [ 'A', 'C' ]
 */
arr = ['A', 'B', 'C']
result = arr.filter(item => item !== 'B')
console.log(result)

/**
 * Find
 * - Returns the value of the first element in the array that satisfies the provided testing
 *   function.
 * - Output: AA
 */
arr = ['A', 'AA', 'AAA']
result = arr.find(item => item.length === 2)
console.log(result)

/**
 * Find Last
 * - Iterates the array in reverse and returns the value of the first element that satisfies the
 *   testing function.
 * - Output: CC
 */
arr = ['AA', 'BB', 'CC']
result = arr.findLast(item => item.length === 2)
console.log(result)

/**
 * Find Index
 * - Returns the index of the first element in an array that satisfies the testing function (-1 if
 *   none found).
 * - Output: 1
 */
arr = ['A', 'AA', 'AAA']
result = arr.findIndex(item => item === 'AA')
console.log(result)

/**
 * Find Last Index
 * - Iterates the array in reverse and returns the index of the first element that satisfies the
 *   testing function.
 * - Output: 2
 */
arr = ['AA', 'BB', 'CC']
result = arr.findLastIndex(item => item.length === 2)
console.log(result)

/**
 * Map
 * - Creates a new array populated with the results of calling a provided projection function on
 *   every element.
 * - Output: [ 'a', 'b', 'c' ]
 */
arr = ['A', 'B', 'C']
result = arr.map(item => item.toLowerCase())
console.log(result)

/**
 * Flat
 * - Creates a new array with all sub-array elements concatenated into it recursively up to the
 *   specified depth.
 * - Output: [ 'A', 'B', 'C', 'D' ]
 */
arr = [['A', 'B'], ['C', 'D']]
result = arr.flat()
console.log(result)

/**
 * Flat Map
 * - Combines map and flat of depth 1 into a single pass.
 * - The term 'Map' refers to applying a transformation function to project each element before
 *   flattening.
 * - Output: [ 'John', 'Jane' ]
 */
arr = [{ name: 'John', age: 30 }, { name: 'Jane', age: 28 }]
result = arr.flatMap(item => item.name)
console.log(result)

/**
 * Reduce
 * - Executes a user-supplied "reducer" callback on each element to accumulate values into a single
 *   output.
 * - Output: 6
 */
arr = [1, 2, 3]
result = arr.reduce((acc, item) => acc + item, 0)
console.log(result)

/**
 * Reduce Right
 * - Applies a reducer function against an accumulator and each element from right-to-left.
 * - Output: CBA
 */
arr = ['A', 'B', 'C']
result = arr.reduceRight((acc, item) => acc + item, '')
console.log(result)

/**
 * Some
 * - Tests whether at least one element in the array passes the provided condition function.
 * - Output: true
 */
arr = ['A', 'B', 'C']
result = arr.some(item => item === 'B')
console.log(result)

/**
 * Every
 * - Tests whether all elements in the array pass the provided condition function.
 * - Output: true
 */
arr = ['B', 'B', 'B']
result = arr.every(item => item === 'B')
console.log(result)
