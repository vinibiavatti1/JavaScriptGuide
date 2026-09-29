/**
 * Import
 *
 * Imports are used in ECMAScript Modules (ESM) to bring in functions, objects, or primitives that
 * have been exported from another module, file, or package. All static imports are hoisted to the
 * top of the file and evaluated first.
 */

/**
 * Default Import
 * - Imports the default export from a module.
 * - The name can be anything you choose.
 */
import defaultExport from 'module-name'

/**
 * Named Imports
 * - Imports specific named exports by their exact exported names.
 */
import { export1, export2 } from 'module-name'

/**
 * Named Import with Alias
 * - Imports a named export and renames it locally to avoid naming conflicts.
 */
import { originalName as aliasName } from 'module-name'

/**
 * Default Import Combined With Named Import
 * - Imports both the default export and specific named exports simultaneously.
 */
import defaultExport, { exportName } from 'module-name';

/**
 * Namespace Import
 * - Imports all exports from a module as properties of a single object.
 */
import * as nameSpaceName from 'module-name';

/**
 * Namespace Import
 * - Executes the module's top-level code without importing or binding any exports.
 * - Commonly used for polyfills, global CSS/styles, or plugin initialization.
 */
import 'module-name';

/**
 * Dynamic Import
 * - Loads a module asynchronously at runtime, returning a Promise that resolves to the module
 *   object.
 * - Can be used anywhere (including inside standard functions and conditional blocks).
 */
const moduleName = 'module-name'
const moduleNamespace = await import(moduleName);

/**
 * Node.js Built-in Module Import
 * - Imports native built-in Node.js modules using the explicit 'node:' protocol prefix.
 * - Ensures absolute clarity that the module is a core Node.js API rather than an npm package.
 */
import path from 'node:path'
