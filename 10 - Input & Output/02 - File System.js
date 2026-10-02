/**
 * File System (fs)
 *
 * Provides utilities for interacting with the file System using asynchronous Promise-based APIs.
 * Input/Output (IO) refers to the communication between the program and external storage devices,
 * where Input reads data from disk into memory and Output writes data from memory to disk.
 */
import fs from 'node:fs/promises'

//==================================================================================================
// File Operations
//==================================================================================================

/**
 * Create File
 * - Creates a new file or overwrites an existing file with specified contents.
 * - Note: Defaults to UTF-8 encoding when passing a string value.
 */
await fs.writeFile('.\\.resources\\custom.txt', 'Hello World')

/**
 * Copy File
 * - Copies an individual file from a source path to a destination path.
 * - Note: Works exclusively on single files and throws EPERM when passed a directory path.
 */
await fs.copyFile('.\\.resources\\custom.txt', '.\\.resources\\custom-copy.txt')

/**
 * Rename File
 * - Renames or moves a file from the source path to the destination path.
 * - Note: Overwrites the target file destination if it already exists.
 */
await fs.rename('.\\.resources\\custom-copy.txt', '.\\.resources\\custom-renamed.txt')

/**
 * Delete File
 * - Removes a specified file path from the file system using the rm utility.
 * - Note: Preferred over unlink in modern Node.js for general removal operations.
 */
await fs.rm('.\\.resources\\custom.txt')
await fs.rm('.\\.resources\\custom-renamed.txt')

//==================================================================================================
// Directory Operations
//==================================================================================================

/**
 * Create Directory
 * - Creates a new directory at the specified target path.
 * - Note: Pass option { recursive: true } to create parent directories without throwing errors.
 */
await fs.mkdir('.\\.resources\\custom')

/**
 * Copy Directory
 * - Copies entire directory structures including subfolders and contents recursively.
 * - Note: Requires mandatory { recursive: true } option; omitting it throws an ERR_FS_EISDIR error.
 */
await fs.cp('.\\.resources\\custom', '.\\.resources\\custom-copy', { recursive: true })

/**
 * Rename Directory
 * - Renames or relocates an entire directory tree to a new target path.
 * - Note: Operates atomically across paths located on the same logical drive.
 */
await fs.rename('.\\.resources\\custom-copy', '.\\.resources\\custom-renamed')

/**
 * Delete Directory
 * - Removes an empty directory from the file system using rmdir.
 * - Note: Use fs.rm with { recursive: true } to remove directories containing files or subfolders.
 */
await fs.rmdir('.\\.resources\\custom')
await fs.rmdir('.\\.resources\\custom-renamed')

//==================================================================================================
// IO File Operations
//==================================================================================================

/**
 * Read File
 * - Reads the entire contents of a file directly into memory as a raw Buffer.
 * - Note: Call toString() or specify an encoding parameter like utf-8 to obtain a string.
 * - Output: Hello
 */
let content = await fs.readFile('.\\.resources\\file.txt')
console.log(content.toString())

/**
 * Append File
 * - Appends data to an existing file, creating the file first if it does not exist.
 * - File Content: Hello World
 */
await fs.appendFile('.\\.resources\\file.txt', 'World')

/**
 * Write File
 * - Writes data to a file, replacing the target file entirely if it already exists.
 * - File Content: Hello
 */
await fs.writeFile('.\\.resources\\file.txt', 'Hello')


//==================================================================================================
// Directory IO Operations
//==================================================================================================

/**
 * Read Directory
 * - Reads directory contents and returns an array of string filenames.
 * - Note: Pass option { withFileTypes: true } to receive Dirent objects with type checks.
 * - Output: data.json | file.txt
 */
content = await fs.readdir('.\\.resources')
content.forEach(entry => console.log(entry))
