/**
 * Path
 *
 * Provides utilities for working with file and directory paths in Node.js. Behavior varies based on
 * the operating system (Windows vs. POSIX).
 */
import path from 'node:path'

//==================================================================================================
// Path Operations
//==================================================================================================

/**
 * Separator & Delimiter
 * - Provides the platform-specific path segment separator ('\' or '/') and path delimiter (';' or
 *   ':').
 * - Output: \ ;
 */
console.log(path.sep, path.delimiter)

/**
 * Join
 * - Joins all given path segments together using the platform-specific separator and normalizes it.
 * - Output: C:\directory\src\index.js
 */
let result = path.join('C:', 'directory', 'src', 'index.js')
console.log(result)

/**
 * Resolve
 * - Resolves a sequence of paths or path segments into an absolute path relative to process.cwd().
 * - Output: C:\directory\src\index.js | C:\directory
 */
result = path.resolve('src', 'index.js')
console.log(result, process.cwd())

/**
 * Relative
 * - Returns the relative path from one directory path to another based on current working
 *   directory.
 * - Output: ..
 */
result = path.relative('C:\\directory\\src', 'C:\\directory')
console.log(result)

/**
 * Normalize
 * - Normalizes a given path, resolving '..' and '.' segments and cleaning duplicate separators.
 * - Output: C:\directory\src
 */
result = path.normalize('C:\\directory\\bin\\..\\src')
console.log(result)

/**
 * Base Name
 * - Returns the last portion of a path, optionally stripping a trailing extension suffix.
 * - Output: index.js
 */
result = path.basename('C:\\directory\\src\\index.js')
console.log(result)

/**
 * Directory Name
 * - Returns the directory name of a path, ignoring the last segment.
 * - Output: C:\directory\src
 */
result = path.dirname('C:\\directory\\src\\index.js')
console.log(result)

/**
 * Extension Name
 * - Returns the extension of the path, from the last '.' to end of string in the last portion.
 * - Output: .js
 */
result = path.extname('C:\\directory\\src\\index.js')
console.log(result)

/**
 * Is Absolute
 * - Determines if the given path string is an absolute path.
 * - Output: false
 */
result = path.isAbsolute('.\\src\\index.js')
console.log(result)

/**
 * Matches Glob
 * - Determines if a path matches a given glob pattern (Node.js v22+ native utility).
 * - Output: true
 */
result = path.matchesGlob('C:\\directory\\src\\index.js', '**\\*.js')
console.log(result)

/**
 * To Namespaced Path
 * - Converts a path into an equivalent Win32 namespace-prefixed path to bypass path length limits.
 * - Note: Windows exclusive.
 * - Output: \\?\C:\directory\src\index.js
 */
result = path.toNamespacedPath('C:\\directory\\src\\index.js')
console.log(result)

//==================================================================================================
// Parse & Format
//==================================================================================================

/**
 * Parse
 * - Returns an object whose properties represent significant elements of the path.
 * - Output:
 *   {
 *       root: 'C:\\',
 *       dir: 'C:\\directory\\src',
 *       base: 'index.js',
 *       ext: '.js',
 *       name: 'index'
 *   }
 */
let info = path.parse('C:\\directory\\src\\index.js')
console.log(info)

/**
 * Format
 * - Returns a path string from an object (inverse of path.parse).
 * - Output: C:\directory\src\index.js
 */
result = path.format(info)
console.log(result)

//==================================================================================================
// Specific Implementations
//==================================================================================================

/**
 * Win32
 * - Provides access to Windows-specific path operations regardless of the current operating system.
 * - Output: \
 */
console.log(path.win32.sep)

/**
 * Posix
 * - Provides access to POSIX-specific path operations regardless of the current operating system.
 * - Output: /
 */
console.log(path.posix.sep)
