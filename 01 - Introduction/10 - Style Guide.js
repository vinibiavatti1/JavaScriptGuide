/**
 * Style Guide
 *
 * This file outlines the primary code style and naming conventions for JavaScript
 * and Node.js applications. Adhering to a consistent style guide ensures high code
 * legibility, easier maintenance, and seamless team collaboration.
 */

//=================================================================================================
// Naming Conventions
//=================================================================================================

/**
 * Project
 * - Use lowercase letters.
 * - Separate words with hyphens (e.g., my-project).
 * - Avoid underscores, spaces, or special symbols.
 */
'my-node-project'

/**
 * Directories
 * - Use lowercase letters.
 * - Separate words with hyphens.
 * - Avoid underscores, spaces, or special symbols.
 */
'user-auth/'

/**
 * Modules
 * - Use lowercase letters.
 * - Separate words with hyphens.
 * - Avoid underscores, spaces, or special symbols.
 * - Use the '.cjs' extension to explicitly mark the file as CommonJS.
 * - Use the '.mjs' extension to explicitly mark the file as Module.
 */
'login-controller.js'

/**
 * Main Module
 * - Use lowercase letters.
 * - Separate words with hyphens.
 * - Avoid underscores, spaces, or special symbols.
 * - Use 'index.js', 'main.js' or 'app.js'.
 */
'index.js'

/**
 * Variables
 * - Use camelCase (start with lowercase, capitalize subsequent words).
 * - Avoid underscores, special symbols, and leading/trailing spaces.
 * - Acronyms should follow camelCase rules (e.g., httpRequest).
 */
let clientName = 'John Doe'

/**
 * Local Constants
 * - Use camelCase (start with lowercase, capitalize subsequent words).
 * - Avoid underscores, special symbols, and leading/trailing spaces.
 * - Acronyms should follow camelCase rules (e.g., httpRequest).
 */
const minTimeout = 10

/**
 * Global Constants
 * - Use ALL_UPPERCASE letters.
 * - Separate words with underscores (_).
 * - Acronyms should follow uppercase (e.g., MAX_HTTP_REQUEST).
 * - Avoid special symbols and spaces.
 */
const MAX_TIMEOUT = 100

/**
 * Functions
 * - Use camelCase.
 * - Acronyms should follow CamelCase (e.g., parseHttpRequest).
 * - Avoid underscores, special symbols, and spaces.
 * - Prefer verbs for method names to indicate action (e.g., calculateTotal, sendRequest).
 */
function validateData() { }

/**
 * Constructor Functions
 * - Use CamelCase.
 * - Start with a capital letter.
 * - Avoid underscores, special symbols, and spaces.
 * - Acronyms should follow CamelCase (e.g., HttpRequest, XmlParser).
 */
function Person() { }

/**
 * Object Keys
 * - Use camelCase (start with lowercase, capitalize subsequent words).
 * - Avoid underscores, special symbols, and leading/trailing spaces (e.g., API payloads, database
 *   columns, or JSON schemas) that strictly require snake_case or kebab-case
 * - Acronyms should follow camelCase rules (e.g., httpRequest).
 * - Quote keys only when they contain reserved words, spaces, or special characters.
 */
const profile = {
    userId: 42,
    userName: 'John',
    isActive: true,
    roles: ['admin', 'developer']
}

    /**
     * JSON Keys
     * - Use camelCase (start with lowercase, capitalize subsequent words).
     * - Avoid underscores, special symbols, and leading/trailing spaces (e.g., API payloads, database
     *   columns, or JSON schemas) that strictly require snake_case or kebab-case
     * - Acronyms should follow camelCase rules (e.g., httpRequest).
     * - Always use double quotes ("").
     * - Do not use comments.
     */
    ```
{
    "userId": 42,
    "userName": 'John',
    "isActive": true,
    "roles": ['admin', 'developer']
}
```

/**
 * Classes
 * - Use CamelCase.
 * - Start with a capital letter.
 * - Avoid underscores, special symbols, and spaces.
 * - Acronyms should follow CamelCase (e.g., HttpRequest, XmlParser).
 */
class HttpClient { }

/**
 * Fields
 * - Use camelCase.
 * - Avoid underscores, special symbols, and leading/trailing spaces.
 * - Acronyms should follow camelCase rules (e.g., httpRequest).
 * - Use '#' as prefix to mark as private.
 */
class User {
    name = '...'
    #authToken = '...'
}

/**
 * Methods
 * - Use camelCase.
 * - Avoid underscores, special symbols, and leading/trailing spaces.
 * - Acronyms should follow camelCase rules (e.g., parseHttpRequest).
 * - Use '#' as prefix to mark as private.
 */
class Processor {
    process() { }
    #terminate() { }
}

/**
 * Properties
 * - Use camelCase.
 * - Use 'get' or 'set' to identify the method as a property.
 * - Avoid underscores, special symbols, and leading/trailing spaces.
 * - Acronyms should follow camelCase rules (e.g., parseHttpRequest).
 * - Use '#' as prefix to mark as private.
 */
class Subject {
    set name(newName) { }
    get name() { }
    set #age(newAge) { }
    get #age() { }
}

/**
 * Error Alias
 * - Use "err" as the standard alias.
 * - For subsequent aliases, use numbers to identify (i.e. "err", "err2", ...).
 */
try {
} catch (err) {
}

/**
 * Custom Errors
 * - Use CamelCase (start with a capital letter).
 * - Acronyms should follow CamelCase (e.g., HttpRequestException).
 * - End class names with "Error".
 * - Avoid underscores, special symbols, and spaces.
 * - Extend from Error class.
 */
class AppError extends Error { }

/**
 * Reserved Words
 * - Cannot use JavaScript reserved keywords as identifiers (e.g., class, int, for, if).
 * - Add a prefix or suffix for other identifiers (e.g., int -> intValue).
 */
const clazz = 'Person'

//=================================================================================================
// Code Conventions
//=================================================================================================

/**
 * Strings
 * - Always use single quotes (') for strings.
 */
const message = 'Hello'

/**
 * Semicolons
 * - Prefer omitting semicolons at the end of statements to maintain a clean, modern syntax.
 * - Rely on JavaScript's Automatic Semicolon Insertion (ASI) mechanism.
 * - Always prefix lines starting with an array ([]), template literal (`), or parentheses
 *   ((), or binary/logical operators with a leading semicolon to prevent ASI syntax bugs.
 */
const x = 1
    ; (function () { // <- Leading semicolon safeguard for IIFEs, arrays, or expressions.
        // ...
    })()
