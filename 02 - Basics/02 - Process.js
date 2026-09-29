/**
 * Process
 *
 * The Node.js 'process' object provides information about, and control over, the current Node.js
 * process. As a global, it is always available to Node.js applications without requiring an
 * explicit import.
 *
 * Key Characteristics:
 * - Built-in & Global: Available globally, though explicit import via 'node:process' is supported.
 * - Event Emitter: The process object is an instance of EventEmitter, handling lifecycle events
 *   like 'exit'.
 */

/**
 * Command Line Arguments
 * - Captures the arguments passed via the script's execution line.
 * - 'process.argv' contains an array where the first element is the path to the Node.js executable,
 *   and the second element is the path to the currently executing JavaScript file.
 * - Example: "node ./Process.js -a -b -c" will result in the output below.
 * - Output: ['.../node.exe', '.../Process.js', '-a', '-b', '-c']
 */
console.log(process.argv)

/**
 * Environment Variables
 * - Accesses environment variables configured in the operating system.
 * - 'process.env' is an object containing the user environment variables.
 * - Output: development
 */
console.log(process.env.NODE_ENV)

/**
 * Environment Info
 * - Displays crucial information about the environment.
 * - Output: v24.20.0 win32 x64 27868
 */
console.log(process.version, process.platform, process.arch, process.pid)

/**
 * Current Working Directory (CWD)
 * - Returns the current working directory of the Node.js process.
 * - Output: C:\...
 */
console.log(process.cwd())

/**
 * Events
 * - Subscribes to lifecycle and error events emitted by the process.
 * - Some of the events are: 'exit', 'uncaughtException', 'warning'.
 */
process.on('exit', (code) => { })

/**
 * Exit
 * - Explicitly terminates the Node.js process execution.
 * - Accepts an optional integer exit code (default is 0 for success, non-zero values like 1
 *   typically indicate failure or an error).
 */
process.exit(0)
