/**
 * Chain Of Responsibility
 *
 *
 */

/**
 * Handler
 * -
 */
class AbstractTextHandler {
    #next

    handle(text) {
        throw new Error('not implemented')
    }

    set next(next) {
        this.#next = next
    }
}

/**
 * Concrete Handler
 * -
 */

/**
 *
 */
