/**
 * Metadata
 *
 * The 'import.meta' object exposes context-specific metadata to a JavaScript module, providing
 * information about the current module such as its file path, directory, and URL.
 */

/**
 * File Name
 * - Returns the absolute file path of the current module.
 * - Output: /path/to/current/file.js
 */
console.log(import.meta.filename)

/**
 * Dir Name
 * - Returns the absolute directory path of the current module.
 * - Output: /path/to/current
 */
console.log(import.meta.dirname)

/**
 * URL
 * - Returns the absolute URL string of the current module using the 'file:' protocol.
 * - Output: file:///path/to/current/file.js
 */
console.log(import.meta.url)

/**
 * Main
 * - Checks whether the current module is the entry point of the application.
 * - Output: true
 */
console.log(import.meta.main)

/**
 * Resolve
 * - Resolves a relative module specifier to an absolute URL string based on the current module.
 * - Output: file:///path/to/current/file.js
 */
console.log(import.meta.resolve('./file.js'))
