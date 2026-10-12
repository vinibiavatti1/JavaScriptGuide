/**
 * JSDoc
 *
 * A formal documentation syntax used within comments to describe functions, variables, and types,
 * enabling IDE type-checking and autocompletion.
 */

//==================================================================================================
// TypeScript Check
//==================================================================================================

/**
 * Enable TS Check
 * - The "// @ts-check" comment enables static type checking in a single JavaScript file.
 * - It uses VS Code's built-in TypeScript language engine, meaning no extra TypeScript installation
 *   or dependencies are required.
 */
// @ts-check

/**
 * Enable TS Check Globally
 * - To enable type checking globally across your entire project without adding the directive to
 *   every file, create a "jsconfig.json" file at the project root:
 */;
`
{
    "compilerOptions": {
        "checkJs": true,
        "strict": true
    }
}
`;

//==================================================================================================
// Variables & Constants
//==================================================================================================

/**
 * User name.
 * @type {string}
 */
let userName = 'John'

/**
 * User id.
 * @type {number | string}
 */
let userId = 1

/**
 * List of values.
 * @type {string[]}
 */
let values = ['A', 'B', 'C']

/**
 * Point 2D.
 * @type {[number, number]}
 */
let point = [1, 2]

/**
 * API base url.
 * @const {string}
 */
const BASE_URL = 'http://api.dev'

//==================================================================================================
// Objects & Enums
//==================================================================================================

/**
 * User data.
 * @type {Object}
 * @property {string} name The user name.
 * @property {number} age The user age.
 */
let userData = {
    name: 'John',
    age: 30
}

/**
 * Config object.
 * @type {Object}
 * @readonly
 */
const CONFIG = Object.freeze({
    timeout: 1200
})

/**
 * Colors enumeration.
 * @enum {string}
 * @readonly
 */
const Colors = Object.freeze({
    RED: '#ff0000',
    GREEN: '#00ff00',
    BLUE: '#0000ff',
})

//==================================================================================================
// Function & Methods
//==================================================================================================

/**
 * Calculates the sum of two numbers.
 * @param {number} x The first number to sum.
 * @param {number} y The second number to sum.
 * @returns {number} The sum result.
 */
function sum(x, y) {
    return x + y
}

/**
 * Calculates the division of two numbers.
 * @param {number} x The dividend.
 * @param {number} y The divisor.
 * @throws {RangeError} If the divisor is zero.
 * @returns {number} The division result.
 */
function div(x, y) {
    if (y === 0) {
        throw new RangeError('Cannot divide by zero')
    }
    return x / y
}

/**
 * Fetches the user data.
 * @param {number} userId The user id.
 * @returns {Promise<string>} The user name.
 */
async function fetchUserName(userId) {
    const response = await fetch('http://api.dev')
    return response.text()
}

/**
 * Open a file.
 * @param {string} name The file name.
 * @param {function(string): void} callback The function to process the content.
 */
function openFile(name, callback) {
    const content = 'Hello World'
    callback(content)
}

/**
 * Reads the file content.
 * @param {string} name The file name.
 * @param {(content: string) => void} callback The function to process the content.
 */
function readFile(name, callback) {
    const content = 'Hello World'
    callback(content)
}

//==================================================================================================
// Type Definition
//==================================================================================================

/**
 * Define the User type.
 * @typedef {Object} User
 * @property {string} name The user name.
 * @property {number} age The user age.
 * @property {function(): boolean} isOverage True if the age > 18.
 */

/**
 * Registers the user in the database.
 * @param {User} user The user to register.
 * @returns {boolean} Operation success.
 */
function registerUser(user) {
    console.log('User registered successfully')
    return true
}

//==================================================================================================
// Callbacks
//==================================================================================================

/**
 * Define the ProcessFileContent callback.
 * @callback ProcessFileContent
 * @param {string} content The file content.
 */

/**
 * Reads the document content.
 * @param {string} name The file name.
 * @param {ProcessFileContent} callback The function to process the content.
 */
function readDocument(name, callback) {
    const content = 'Hello World'
    callback(content)
}

//==================================================================================================
// Generics
//==================================================================================================

/**
 * Retrieves the first element from the array.
 * @template T The element type.
 * @param {T[]} array An array of the element type.
 * @returns {T} The first element of the array.
 */
function getFirstElement(array) {
    return array[0]
}

//==================================================================================================
// Importing Types
//==================================================================================================

/**
 * Check if the employee has the admin role.
 * @param {import('../.resources/module.js').Employee} employee The employee.
 * @returns {boolean} True if the employee has the admin role.
 */
function isAdmin(employee) {
    return employee.role === 'admin'
}

// Export to prevent name conflicts.
export { }
