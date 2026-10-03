/**
 * Low-Level File System (fs)
 *
 * Demonstrates low-level FileHandle and directory stream management in Node.js.
 * Unlike high-level methods that read or write entire files in a single call, low-level APIs
 * provide granular control over file descriptors, POSIX flags, chunked IO, and stream iterators.
 */
import fs from 'node:fs/promises'

//==================================================================================================
// Low-Level IO File Operations (Using Open)
//==================================================================================================

/**
 * Flags
 * - Node.js flags mirror C POSIX file open modes for granular resource control.
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
 * Open File (Read)
 * - Opens a file returning a FileHandle instance for low-level or streaming operations.
 * - Note: Use fileHandle.read() for buffered chunk reading or fileHandle.readLines() for line
 *   streams.
 * - Output: Hello
 */
let file = await fs.open('.\\.resources\\file.txt')
let buf = await file.readFile()
console.log(buf.toString())
file.close()

/**
 * Open File (Append)
 * - Opens a file handle in append mode ('a') positioning the cursor at the end of the file.
 * - File Content: Hello World
 */
file = await fs.open('.\\.resources\\file.txt', 'a')
await file.appendFile('World')
file.close()

/**
 * Open File (Write)
 * - Opens a file handle in write mode ('w') truncating existing content to zero bytes.
 * - Note: Use fileHandle.write() for raw Buffer chunks or fileHandle.writeFile() for complete
 *   strings.
 * - File Content: Hello
 */
file = await fs.open('.\\.resources\\file.txt', 'w')
await file.writeFile('Hello\n')
file.close()

//==================================================================================================
// Low-Level Directory IO Operations (Using Open)
//==================================================================================================

/**
 * Open Directory
 * - Opens a directory stream returning an async iterable Dir handle for sequential scanning.
 * - Note: Iterates memory-efficiently over entries without loading all filenames at once.
 * - Output: data.json | file.txt
 */
const dir = await fs.opendir('.\\.resources')
for await (const entry of dir) {
    console.log(entry.name)
}
