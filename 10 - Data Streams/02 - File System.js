/**
 * File System (fs)
 *
 *
 */
import fs from 'node:fs/promises'

//==================================================================================================
// IO
//==================================================================================================

/**
 * Read File
 * -
 * - Output: Hello
 */
let content = await fs.readFile('.\\.resources\\file.txt')
console.log(content.toString())

/**
 * Append File
 * -
 * - File Content: Hello World
 */
await fs.appendFile('.\\.resources\\file.txt', 'World')

/**
 * Write File
 * -
 * - File Content: Hello
 */
await fs.writeFile('.\\.resources\\file.txt', 'Hello')

//==================================================================================================
// IO (With Open)
//==================================================================================================

/**
 * Flags
 * -
 */;
`
r   - Read (Default)
r+  - Read and Write
w   - Write (Truncate)
w+  - Write and Read (Truncate)
a   - Append
a+  - Append and Read
x   - Create Only
`;

/**
 * Read File
 * -
 * - (add notes about read and readLines)
 * - Output: Hello
 */
let file = await fs.open('.\\.resources\\file.txt')
content = await file.readFile()
console.log(content.toString())
file.close()

/**
 * Append File
 * -
 * - File Content: Hello World
 */
file = await fs.open('.\\.resources\\file.txt', 'a')
await file.appendFile('World')
file.close()

/**
 * Write File
 * -
 * - (add notes about write)
 * - File Content: Hello
 */
file = await fs.open('.\\.resources\\file.txt', 'w')
await file.writeFile('Hello\n')
file.close()

//==================================================================================================
// File Operations
//==================================================================================================

/**
 * Create File
 * -
 */
await fs.writeFile('.\\.resources\\custom.txt', 'Hello World')

/**
 * Copy File
 * -
 */
await fs.copyFile('.\\.resources\\custom.txt', '.\\.resources\\custom-copy.txt')

/**
 * Delete File
 * -
 */
await fs.rm('.\\.resources\\custom-copy.txt')

//==================================================================================================
// Directory Operations
//==================================================================================================

/**
 * Create Directory
 * -
 */
await fs.mkdir('.\\.resources\\custom')

/**
 * Copy Directory
 * -
 */
await fs.mkdir('.\\.resources\\custom', '.\\.resources\\custom-copy')

/**
 * Delete Directory
 * -
 */
await fs.rm('.\\.resources\\custom-copy')

fs.copyFile
fs.rm
fs.mkdir
fs.rmdir
fs.cp
fs.rename
fs.readdir


fs.mkdtemp
fs.mkdtempDisposable


fs.access
fs.realpath
fs.chmod
fs.chown
fs.constants
fs.glob
fs.lchown
fs.link
fs.lstat
fs.lutimes




fs.readlink
fs.stat
fs.statfs
fs.symlink
fs.truncate
fs.unlink
fs.utimes




fs.opendir
fs.watch
