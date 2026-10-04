/**
 * Temp Directories
 *
 * Demonstrates manual and automated temporary directory creation using OS-specific temporary
 * locations. Covers manual cleanup procedures alongside modern automatic disposal via Explicit
 * Resource Management.
 */
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import fs from 'node:fs/promises'

/**
 * Create Temp Directory
 * - Creates a temporary directory with a unique six-character suffix appended to the prefix.
 * - Note: Manual cleanup requires 'rmdir' or 'rm' with '{ recursive: true }' if files exist inside.
 * - Output: C:\AppData\Local\Temp\tmp-ubROvE
 */
let tmp = await fs.mkdtemp(join(tmpdir(), 'tmp-'))
console.log(tmp)
await fs.rmdir(tmp)

/**
 * Create Temp Directory (Auto Disposable)
 * - Uses 'await using' to create a temp directory that automatically cleans up upon leaving scope.
 * - Note: Requires Node.js v20.4.0+ and ES2024 Explicit Resource Management support.
 * - Output: C:\AppData\Local\Temp\tmp-ubROvE
 */
{
    await using tmp = await fs.mkdtempDisposable(join(tmpdir(), 'tmp-'))
    console.log(tmp.path)
} // <- Automatically deletes the directory and its contents upon scope exit
