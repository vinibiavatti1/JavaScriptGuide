/**
 * Console
 *
 * The Node.js 'console' module provides a simple debugging console that is similar to
 * the JavaScript console mechanism provided by web browsers. It outputs directly to
 * standard output (stdout) and standard error (stderr).
 *
 * Key Characteristics:
 * - Built-in & Global: Available globally without needing an explicit import (though
 *   it can also be explicitly imported via 'node:console').
 * - Streams Mapping: Methods like 'console.log()' write to process.stdout, while
 *   methods like 'console.error()' write to process.stderr.
 */

/**
 * Log
 * - Outputs informational messages directly to standard output (process.stdout).
 * - Accepts multiple arguments, formatting them with space separation.
 * - Output: Hello World
 */
console.log('Hello', 'World')

/**
 * Warn
 * - Outputs non-critical warning messages to standard error (process.stderr).
 * - Ideal for deprecation notices or potential configuration risks.
 * - Output: Hello World
 */
console.warn('Hello', 'World')

/**
 * Error
 * - Outputs error messages and exception stack traces to standard error (process.stderr).
 * - Essential for capturing unhandled flows or critical system failures.
 * - Output: Hello World
 */
console.error('Hello', 'World')

/**
 * Table
 * - Formats arrays or objects into a clean, readable tabular layout.
 * - Output:
 *  ┌─────────┬────┬──────────┐
 *  │ (index) │ id │ userName │
 *  ├─────────┼────┼──────────┤
 *  │    0    │ 1  │  'John'  │
 *  │    1    │ 2  │  'Jane'  │
 *  └─────────┴────┴──────────┘
 */
console.table([
    { id: 1, userName: 'John' },
    { id: 2, userName: 'Jane' },
])

/**
 * Time
 * - Starts a high-precision timer associated with a specific label.
 */
console.time('TimerLabel')

/**
 * Time End
 * - Stops the timer associated with the specified label and prints the elapsed time.
 * - Output: TimerLabel: 0.142ms
 */
console.timeEnd('TimerLabel')

/**
 * Trace
 * - Prints the string 'Trace:' followed by the current stack trace pointing to the execution path.
 * - Output:
 *   Trace: Trace execution point
 *     at traceExecutionPath (file.js:72:13)
 *     at file.js:75:1
 */
function traceExecutionPath() {
    console.trace('Trace execution point')
}
traceExecutionPath()
