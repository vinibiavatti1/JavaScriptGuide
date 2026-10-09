/**
 * Iterator
 *
 * Provides a way to access the elements of an aggregate object sequentially without exposing its
 * underlying representation. Leverages ES6+ generator functions and the native 'Symbol.iterator'
 * protocol to make custom objects iterable.
 *
 * Output: A | B | C
 */
const createList = (...items) => ({
    items,
    *[Symbol.iterator]() {
        for (const item of items) {
            yield item
        }
    }
})
const list = createList('A', 'B', 'C')
for (const item of list) {
    console.log(item)
}
