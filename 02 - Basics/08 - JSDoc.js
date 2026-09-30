/**
 * JSDoc
 *
 * A formal documentation syntax used within comments to describe functions, variables, and types,
 * enabling IDE type-checking and autocompletion.
 *
 * Below there are examples of standard JSDoc tags for parameters, return types, and custom definitions.
 */

/**
 * Adds two numbers together.
 * @param {number} x The first number.
 * @param {number} y The second number.
 * @returns {number} The sum of x and y.
 */
function add(x, y) {
    return x + y
}

/**
 * Establishes a network connection using a configuration object.
 * @param {Object} config Configuration object.
 * @param {string} config.host The server host address.
 * @param {number} [config.port=8080] The server port.
 * @returns {void}
 */
function connect({ host, port = 8080 }) { }

/**
 * Represents a system user.
 * @typedef {Object} User
 * @property {number} id Unique identifier.
 * @property {string} username User handle.
 * @property {boolean} [isActive=true] Account status.
 */

/**
 * Processes a user object using custom defined types.
 * @param {User} user The user object to process.
 * @returns {string} Status message.
 */
function processUser(user) { }
