/**
 * Flyweight
 *
 * Minimizes memory usage by sharing common state among multiple similar objects. In JavaScript, we
 * can implement this functionally by maintaining a shared cache closure that lazily initializes and
 * returns shared references.
 *
 * Output: true | true
 */
const createTextureCache = () => {
    const cache = new Map()
    return {
        get: (key, resolver) => {
            if (cache.has(key)) {
                return cache.get(key)
            }
            cache.set(key, resolver())
            return cache.get(key)
        }
    }
}
const createSprite = (x, y, texture) => ({ x, y, texture })
const cache = createTextureCache()
const tree1 = createSprite(0, 0, cache.get('tree', () => [1, 2, 3]))
const tree2 = createSprite(0, 1, cache.get('tree', () => [1, 2, 3]))
const rock1 = createSprite(1, 0, cache.get('rock', () => [4, 5, 6]))
const rock2 = createSprite(1, 1, cache.get('rock', () => [4, 5, 6]))
console.log(tree1.texture == tree2.texture)
console.log(rock1.texture == rock2.texture)
