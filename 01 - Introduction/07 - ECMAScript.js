/**
 * ECMAScript
 *
 * ECMAScript (often abbreviated as ES) is the official scripting language specification
 * that JavaScript is built upon. While JavaScript is the programming language you actually
 * write and run, ECMAScript is the official rulebook or standard that defines how
 * JavaScript should work, what features it has, and how they behave.
 *
 * Relationship with Node.js:
 * - Node.js relies on the V8 JavaScript engine (developed by Google) to execute code.
 * - As the V8 engine updates to support newer ECMAScript standards (like ES6 / ES2015
 *   and beyond), Node.js gains support for modern features (such as arrow functions,
 *   promises, async/await, and modules).
 *
 * The Evolution of Modules in Node.js (require vs. import):
 * - In the early days, JavaScript lacked an official module standard. Node.js created its
 *   own system called CommonJS, using 'require()' to load files and 'module.exports' to share them.
 * - Browsers later adopted a different standard created by the official ECMAScript committee:
 *   ES Modules, using 'import' and 'export'.
 * - For a long time, Node.js only supported CommonJS. However, modern Node.js now fully
 *   supports native ECMAScript Modules (ESM) by setting `"type": "module"` in your package.json
 *   or by using the `.mjs` file extension.
 */

/**
 * Older Syntax Style (ES5)
 */
function sayHello(name) {
    return 'Hello' + name;
}

/**
 * Modern ECMAScript Style (ES6+)
 */
const sayHello = (name) => `Hello ${name}`;
