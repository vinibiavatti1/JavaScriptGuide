/**
 * Flyweight
 *
 * Uses sharing to support large numbers of fine-grained objects efficiently. Splits object state
 * into intrinsic (shared, invariant) and extrinsic (contextual, unique per instance) to minimize
 * RAM usage when rendering massive quantities of similar elements.
 */

/**
 * Abstract Flyweight
 * - Declares an interface through which flyweights can receive and act on extrinsic state.
 */
class AbstractTexture {
    constructor(data) {
        this.data = data
    }
}

/**
 * Concrete Flyweight
 * - Implements the Flyweight interface and stores intrinsic state that is sharable across multiple
 *   objects.
 */
class TreeTexture extends AbstractTexture {
    constructor() {
        super([1, 2, 3])
    }
}
class RockTexture extends AbstractTexture {
    constructor() {
        super([4, 5, 6])
    }
}

/**
 * Unshared Concrete Flyweight
 * - Represents contextual elements holding extrinsic state (such as coordinates) while referencing
 *  a shared Flyweight.
 */
class Sprite {
    constructor(x, y, texture) {
        this.x = x
        this.y = y
        this.texture = texture
    }
}

/**
 * Flyweight Factory
 * - Creates and manages flyweight objects, ensuring that flyweights are shared properly.
 */
class TextureFactory {
    #cache = new Map()

    constructor() {
        this.#cache.set('tree', new TreeTexture())
        this.#cache.set('rock', new RockTexture())
    }

    get(key) {
        return this.#cache.get(key)
    }
}


/**
 * Client
 * - Maintains references to flyweights and computes or stores extrinsic state.
 */
class Game {
    #textureFactory = new TextureFactory()

    renderLevel() {
        const tree1 = new Sprite(0, 0, this.#textureFactory.get('tree'))
        const tree2 = new Sprite(0, 1, this.#textureFactory.get('tree'))
        const rock1 = new Sprite(1, 0, this.#textureFactory.get('rock'))
        const rock2 = new Sprite(1, 1, this.#textureFactory.get('rock'))

        console.log(
            tree1.texture === tree2.texture,
            rock1.texture === rock2.texture
        )
    }
}

/**
 * Example
 * - Demonstrates rendering game sprites sharing underlying intrinsic textures.
 */
const game = new Game()
game.renderLevel()
// Output:
// tree1.texture === tree2.texture: true
// rock1.texture === rock2.texture: true
