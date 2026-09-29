/**
 * Export
 *
 * Exports are used in ECMAScript Modules (ESM) to make functions, objects, or primitives available
 * to other files or modules via import statements.
 */

/**
 * Named Exports
 * - Allows multiple exports per module.
 * - Each exported item must be imported using its exact name (or aliased using 'as').
 */
export let name = 'John'

/**
 * Default Export
 * - Defines a primary export for the module. A module can have ONLY ONE default export.
 * - When imported, the receiving file can assign any name to it without curly braces.
 */
let surname = 'Doe'
export default surname

/**
 * Export List
 * - Exports a list of pre-defined variables, functions, or objects from the module scope.
 */
export {
    name,
    surname
}

/**
 * Examples
 * - Below is a list of the various kinds of resources that can be exported directly.
 */
export const x = 1
export let y = 2
export var z = 3
export function func() { }
export class Clazz { }
