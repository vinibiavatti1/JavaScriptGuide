/**
 * Operational System (OS)
 *
 * The 'node:os' module provides operating system-related utility methods and properties. It allows
 * inspecting hardware, memory, CPU specs, network interfaces, and system environment details.
 */
import os from 'node:os'

//==================================================================================================
// OS & Architecture
//==================================================================================================

/**
 * Architecture
 * - Returns the operating system CPU architecture for which the Node.js binary was compiled.
 * - Output: x64
 */
console.log(os.arch())

/**
 * Platform
 * - Returns a string identifying the operating system platform.
 * - Output: win32
 */
console.log(os.platform())

/**
 * Type
 * - Returns the operating system name.
 * - Output: Windows_NT
 */
console.log(os.type())

/**
 * Version
 * - Returns a string identifying the operating system version.
 * - Output: Windows 11 Home
 */
console.log(os.version())

/**
 * Machine
 * - Returns the machine architecture as a string.
 * - Output: x86_64
 */
console.log(os.machine())

/**
 * Endianess
 * - Returns the endianness of the CPU ('BE' for Big-Endian, 'LE' for Little-Endian).
 * - Output: LE
 */
console.log(os.endianness())

/**
 * Release
 * - Returns the operating system release as a string.
 * - Output: 10.0.26200
 */
console.log(os.release())

//==================================================================================================
// CPU & Performance
//==================================================================================================

/**
 * CPUs
 * - Returns an array of objects containing information about each logical CPU core.
 * - Output: [{ model: 'AMD Ryzen 7', speed: 3793, ... }]
 */
console.log(os.cpus())

/**
 * Available Parallelism
 * - Returns an estimate of the default amount of parallelism a program should use.
 * - Output: 16
 */
console.log(os.availableParallelism())

/**
 * Load Averages
 * - Returns an array containing the 1, 5, and 15 minute load averages.
 * - Note: Always [0, 0, 0] on Windows.
 * - Output: [ 0, 0, 0 ]
 */
console.log(os.loadavg())

/**
 * Up Time
 * - Returns the system uptime in seconds.
 * - Output: 935445.656
 */
console.log(os.uptime())

//==================================================================================================
// Memory
//==================================================================================================

/**
 * Total Memory
 * - Returns the total amount of system memory in bytes as an integer.
 * - Output: 16415322112
 */
console.log(os.totalmem())

/**
 * Free Memory
 * - Returns the amount of free system memory in bytes as an integer.
 * - Output: 4037013504
 */
console.log(os.freemem())

//==================================================================================================
// System & Environment
//==================================================================================================

/**
 * Host Name
 * - Returns the host name of the operating system as a string.
 * - Output: my-computer
 */
console.log(os.hostname())

/**
 * Home Directory
 * - Returns the string path of the current user's home directory.
 * - Output: C:\Users\User
 */
console.log(os.homedir())

/**
 * Temp Directory
 * - Returns the operating system's default directory for temporary files.
 * - Output: C:\Users\User\AppData\Local\Temp
 */
console.log(os.tmpdir())

/**
 * User Info
 * - Returns information about the currently effective user.
 * - Output: { username: 'user', homedir: 'C:\\Users\\User', ... }
 */
console.log(os.userInfo())

/**
 * EOL
 * - Operating system-specific end-of-line marker (\r\n on Windows, \n on POSIX).
 * - Output: \r\n
 */
console.log(os.EOL)

//==================================================================================================
// Networking
//==================================================================================================

/**
 * Network Interfaces
 * - Returns an object containing network interfaces that have been assigned a network address.
 * - Output: { Ethernet: [{ address: '192.168.0.1', netmask: '255.255.255.0', ... }]}
 */
console.log(os.networkInterfaces())

//==================================================================================================
// Process Management
//==================================================================================================

/**
 * Set Priority
 * - Sets the scheduling priority for the process specified by pid (or current process if omitted).
 * - Values range from -20 (highest priority) to 19 (lowest priority).
 * - Note: Setting higher priority requires elevated privileges.
 */
os.setPriority(0)

/**
 * Get Priority
 * - Returns the scheduling priority for the process specified by pid (or current process if
 *   omitted).
 * - Output: 0
 */
console.log(os.getPriority())
