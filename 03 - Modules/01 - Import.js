/**
 * Import
 *
 * Imports are used in ECMAScript Modules (ESM) to bring in functions, objects, or primitives that
 * have been exported from another module, file, or package. All static imports are hoisted to the
 * top of the file and evaluated first.
 *
 * Note: Relative and absolute local imports in native ESM mandate explicit file extensions (such
 * as .js, .mjs, or .json) and standard forward slashes (/), aligning with web browser resolution
 * rules.
 */

/**
 * Default Import
 * - Imports the default export from a module.
 * - The name can be anything you choose.
 */
import defaultExport from '../.resources/module.js'

/**
 * Named Imports
 * - Imports specific named exports by their exact exported names.
 */
import { export1, export2 } from '../.resources/module.js'

/**
 * Named Import with Alias
 * - Imports a named export and renames it locally to avoid naming conflicts.
 */
import { originalName as aliasName } from '../.resources/module.js'

/**
 * Default Import Combined With Named Import
 * - Imports both the default export and specific named exports simultaneously.
 */
import defaultExp, { exportName } from '../.resources/module.js';

/**
 * Namespace Import
 * - Imports all exports from a module as properties of a single object.
 */
import * as nameSpaceName from '../.resources/module.js';

/**
 * Namespace Import
 * - Executes the module's top-level code without importing or binding any exports.
 * - Commonly used for polyfills, global CSS/styles, or plugin initialization.
 */
import '../.resources/style.css';

/**
 * Node.js Built-in Module Import
 * - Imports native built-in Node.js modules using the explicit 'node:' protocol prefix.
 * - Ensures absolute clarity that the module is a core Node.js API rather than an npm package.
 */
import path from 'node:path'

/**
 * Import Attributes (Resource Types)
 * - Uses the 'with { type: "..." }' syntax to securely load external module resources.
 * - Supported types: 'json' is currently the only natively supported type in stable Node.js. Other
 *   types like 'css' or 'webassembly' target web browser specifications or require experimental
 *   flags and build tools.
 * - Output: { name: 'John', age: 30 }
 */
import data from '../.resources/data.json' with { type: 'json' }

/**
 * Dynamic Import
 * - Loads a module asynchronously at runtime, returning a Promise that resolves to the module
 *   object.
 * - Can be used anywhere (including inside standard functions and conditional blocks).
 */
const moduleName = '../.resources/module.js'
const moduleNamespace = await import(moduleName);
