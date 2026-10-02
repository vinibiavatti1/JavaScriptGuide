/**
 * For
 *
 * Loop statements are used to repeat a block of code a specific number of times or iterate over
 * collections like arrays, strings, and object properties.
 */

/**
 * For
 * - The classic loop structure consisting of an initializer, condition, and increment expression.
 * - Output: 0 | 1 | 2
 */
for (let i = 0; i < 3; i++) {
    console.log(i)
}

/**
 * For Without Block
 * - Executes a single statement repeatedly without curly braces based on the loop conditions.
 * - Output: 0 | 1 | 2
 */
for (let i = 0; i < 3; i++) console.log(i)

/**
 * Infinite Loop
 * - Omits all three clauses (initialization, condition, and increment), running indefinitely until
 *   a control statement like 'break' is encountered.
 */
for (; ;) {
    break
}

/**
 * Multiple Statements
 * - Allows initializing and updating multiple variables simultaneously within the loop header.
 * - Output: 0 6 | 1 5 | 2 4
 */
for (let i = 0, j = 6; i < 3 && j > 3; i++, j--) {
    console.log(i, j)
}

/**
 * For Of (Collections)
 * - Iterates over iterable objects (such as Arrays, Strings, Maps, Sets) yielding the values.
 * - Output: A | B | C
 */
const list = ['A', 'B', 'C']
for (const item of list) {
    console.log(item)
}

/**
 * For In (Objects)
 * - Iterates over all enumerable string properties (keys) of an object.
 * - Output: name John | age 30
 */
const obj = { name: 'John', age: 30 }
for (const key in obj) {
    console.log(key, obj[key])
}

/**
 * For Await
 * - Iterates over async iterable objects (like streams or async generators), awaiting each Promise.
 * - Output: A | B
 */
const promises = [Promise.resolve('A'), Promise.resolve('B')]
for await (const val of promises) {
    console.log(val)
}
