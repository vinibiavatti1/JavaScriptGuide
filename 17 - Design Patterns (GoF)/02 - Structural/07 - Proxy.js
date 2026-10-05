/**
 * Proxy
 *
 * Provides a surrogate or placeholder for another object to control access to it. Intercepts
 * requests to the real subject, allowing operations such as access control, lazy initialization,
 * logging, caching, or remote connection management before passing the call forward.
 */

/**
 * Subject
 * - Defines the common interface for RealSubject and Proxy so that a Proxy can be used anywhere a
 *  RealSubject is expected.
 */
class AbstractConnector {
    connect(user, password) {
        throw new Error('not implemented')
    }
}

/**
 * Real Subject
 * - Defines the real object that the proxy represents and handles the core underlying logic.
 */
class Database extends AbstractConnector {
    connect(user, password) {
        console.log('Connected!')
    }
}

/**
 * Proxy
 * - Maintains a reference to the Real Subject and controls access to it.
 * - Implements the same interface as Subject to remain fully interchangeable for the client.
 */
class SecureDatabaseProxy extends AbstractConnector {
    #database

    constructor() {
        super()
        this.#database = new Database()
    }

    connect(user, password) {
        if (user === 'admin' && password === '123') {
            this.#database.connect()
            return;
        }
        console.log('Access Denied')
    }
}

/**
 * Client
 * - Interacts with objects implementing the Subject interface, oblivious to whether it works with a
 *   Real Subject or a Proxy.
 */
class DatabaseService {
    #connector

    constructor(connector, user, password) {
        this.#connector = connector
        this.#connector.connect(user, password)
    }
}

/**
 * Example
 * - Demonstrates direct access via Real Subject versus access control managed by the Proxy.
 */
const database = new Database()
const secureDatabase = new SecureDatabaseProxy()
new DatabaseService(database, 'john', '456')       // Output: Connected!
new DatabaseService(secureDatabase, 'john', '456') // Output: Access Denied
