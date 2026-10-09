/**
 * Factory Functions
 *
 * Functions that construct and return new object instances without requiring the 'new' keyword or
 * 'class' declarations. They leverage lexical scoping and closures to encapsulate state and
 * private members, providing clean interface contracts.
 */

//==================================================================================================
// Class vs Factory Function
//==================================================================================================

/**
 * User Entity (As Class Declaration)
 * - Encapsulates state using private class fields (#) and getter/setter syntax.
 * - Requires instantiation using the 'new' keyword and relies on internal 'this' bindings.
 * - Output: true
 */
class User {
    #username
    #password

    constructor(username) {
        this.#username = username
        this.#password = '123'
    }

    get username() {
        return this.#username
    }
    set username(username) {
        this.#username = username
    }

    login(password) {
        return password === this.#password
    }
}
const user1 = new User('john')
console.log(user1.login('123'))

/**
 * User Entity (As Factory Function)
 * - Encapsulates private state naturally through lexical closures without 'this' or '#'.
 * - Directly mutates the outer function parameter and exposes explicit getter/setter closures.
 * - Output: true
 */
const createUser = (username) => {
    const _password = '123'
    return {
        getName: () => username,
        setUsername: (newUsername) => username = newUsername,
        login: (password) => _password === password
    }
}
const user2 = createUser('john')
console.log(user2.login('123'))

//==================================================================================================
// Factory Function
//==================================================================================================

/**
 * Definition
 * - Standard architectural template for factory functions accepting constructor arguments,
 *   declaring private closure state, and returning an object with public members.
 */
const createObject = (...ctorArgs) => { // <- Constructor Arguments...
    // <- Private Properties Declaration...
    // <- Constructor Logic...
    return {
        // <- Public Properties & Methods...
    }
}

/**
 * Object Factory
 * - Enforces business rules and input validation prior to instantiating and returning a data
 *   object.
 * - Output: { name: 'John', email: 'john@email.com' }
 */
const createProfile = (name, email) => {
    if (!email.includes('@')) {
        throw new Error('Invalid email')
    }
    return {
        name,
        email: email.toLowerCase()
    }
}
console.log(createProfile('John', 'John@Email.com'))

/**
 * Module Factory
 * - Injects external dependencies into a factory function to construct decoupled module instances.
 * - Output: Fetching user... | John
 */
const createUserService = ({ db, logger }) => ({
    findById: (id) => {
        logger.log('Fetching user...')
        return db.getUser(id)
    }
})
const db = { getUser: (id) => 'John' }
const logger = { log: (message) => console.log(message) }
const userService = createUserService({ db, logger })
console.log(userService.findById(1))
