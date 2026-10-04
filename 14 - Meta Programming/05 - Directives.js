/**
 * Directives
 *
 * Directive prologues are literal string expressions placed at the beginning of a script, module,
 * or function body. They alter engine-level compiler flags (such as V8 parsing mode) or framework
 * runtime execution boundaries. Directives cannot be inspected via Reflection at runtime.
 */

/**
 * Use Strict
 * - Enables Strict Mode in JavaScript, throwing errors for silent failures like undeclared
 *   variables.
 * - Note: ES Modules ('import'/'export') and class bodies run in strict mode by default.
 */
'use strict';

/**
 * Use Server
 * - Marks a file or function as a Server Action/boundary in modern Node.js full-stack frameworks.
 * - Ensures the underlying code executes exclusively on the server side.
 */
'use server';

/**
 * Use Client
 * - Defines a client-side execution boundary in modern Node.js full-stack frameworks.
 * - Signals that the module should be bundled and shipped for browser-side hydration.
 */
'use client';
