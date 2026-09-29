/**
 * Node.js
 *
 * Node.js is an open-source, cross-platform JavaScript runtime environment. It executes JavaScript
 * code outside a web browser, allowing developers to build scalable backend services, command-line
 * tools, and network applications.
 *
 * Created by Ryan Dahl and initially released in 2009. Dahl was frustrated with the limited
 * blocking input/output operations of existing web servers (like Apache) when handling concurrent
 * connections. He built Node.js using Google's V8 JavaScript engine and an event-driven,
 * non-blocking I/O model to achieve high performance and concurrency.
 *
 * While browser JS is sandboxed for security and deals with the DOM, Node.js provides powerful
 * built-in core modules and APIs to interact with the system:
 * - fs: For interacting with the file system (reading/writing files).
 * - http / https: For creating web servers and making network requests.
 * - path: For handling and transforming file paths.
 * - crypto: For cryptographic functionality and security hashes.
 * - os: For retrieving operating system-related utility information.
 * - events: For implementing an event-emitter architecture.
 *
 * Key Characteristics:
 * - Asynchronous and Event-Driven: Operations do not block execution thread.
 * - Single-Threaded with Event Loop: Handles concurrent requests efficiently using non-blocking
 *   system calls underneath.
 *
 * Website: https://nodejs.org/
 */

/**
 * Execute a JavaScript file.
 */
'node <path>'

/**
 * Open the interactive REPL (Read-Eval-Print Loop) shell.
 */
'node'

/**
 * Evaluate a string of JavaScript code directly from the command line.
 */
'node -e "<code-string>"'

/**
 * Print the installed Node.js version.
 */
'node -v'
'node --version'

/**
 * Execute a file with watch mode enabled (restarts on file changes).
 */
'node --watch <path>'
