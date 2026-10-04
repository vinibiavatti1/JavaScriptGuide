/**
 * Well-Known Symbols
 *
 * Demonstrates built-in JavaScript Symbols used to hook into low-level engine protocols and
 * customize fundamental language behaviors (iteration, resource cleanup, coercion, pattern
 * matching, and runtime inspection).
 *
 * While 'Symbol.iterator', 'Symbol.dispose', and 'Symbol.toPrimitive' are the most common in
 * application code, JavaScript provides other symbols for advanced runtime behavior (e.g.,
 * Symbol.asyncIterator, Symbol.asyncDispose, Symbol.toStringTag, Symbol.hasInstance, and
 * Symbol.isConcatSpreadable).
 */

//==================================================================================================
// Iterator Support
//==================================================================================================

/**
 * Custom Iterable Class
 * - Implements Symbol.iterator using a generator function to enable standard iteration protocols.
 * - Note: For asynchronous iteration (e.g., streaming or async data sources consumed via
 *   'for await...of'), implement 'async *[Symbol.asyncIterator]()' instead.
 */
class List {
    constructor(items) {
        this.items = items
    }

    *[Symbol.iterator]() {
        for (const item of this.items) {
            yield item
        }
    }
}

/**
 * Consuming Custom Iterable
 * - Iterates over the custom List instance using the native 'for...of' loop.
 * - Output: A | B | C
 */
const list = new List(['A', 'B', 'C'])
for (const item of list) {
    console.log(item)
}

//==================================================================================================
// Auto Disposable Support
//==================================================================================================

/**
 * Disposable Resource Class
 * - Implements Symbol.dispose for synchronous automatic cleanup using the 'using' scope keyword.
 * - Note: For asynchronous cleanup (e.g., closing database connections or sockets), implement
 *   'async [Symbol.asyncDispose]()' and consume the resource using 'await using res = ...'.
 */
class Resource {
    constructor() {
        console.log('created')
    }

    run() {
        console.log('running')
    }

    [Symbol.dispose]() {
        console.log('disposed')
    }
}

/**
 * Consuming Disposable Resource
 * - Automatically executes Symbol.dispose when the 'using' declaration leaves the block scope.
 * - Output: created | running | disposed
 */
{
    using res = new Resource()
    res.run()
} // <- Automatically runs the dispose method

//==================================================================================================
// Primitive Conversion Support
//==================================================================================================

/**
 * Custom Primitive Conversion Class
 * - Implements Symbol.toPrimitive to customize object coercion for 'number', 'string', and
 *   'default' hints.
 */
class Money {
    constructor(amount) {
        this.amount = amount
    }

    [Symbol.toPrimitive](hint) {
        if (hint === 'number') {
            return this.amount
        }
        if (hint === 'string') {
            return `$${this.amount}`
        }
        return this.amount
    }
}

/**
 * Coercing Custom Object
 * - Triggers Symbol.toPrimitive with 'default' (binary + operator) and 'string' (template literal)
 *   hints.
 * - Output: Money { amount: 100 } | 101 | $100
 */
const money = new Money(100)
console.log(money, money + 1, `${money}`)
