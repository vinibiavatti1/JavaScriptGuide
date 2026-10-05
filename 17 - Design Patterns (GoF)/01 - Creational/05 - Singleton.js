/**
 * Singleton
 *
 * Ensures a class has only one instance and provides a global point of access to it. In JavaScript,
 * returning an existing instance from the class constructor alters the default 'new' operator
 * behavior to enforce a single shared instance reference across calls.
 */

/**
 * Singleton Class
 * - Checks for an existing static instance upon instantiation, returning it if present to avoid
 *   duplicate objects.
 */
class Database {
    static #instance

    constructor() {
        if (Database.#instance) {
            return Database.#instance
        }
        Database.#instance = this
    }
}

/**
 * Example
 * - Instantiates the Singleton class twice and verifies that both variables reference the identical
 *   instance.
 */
const db1 = new Database()
const db2 = new Database()
console.log(db1 === db2)
// Output: true
