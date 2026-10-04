/**
 * Serialization
 *
 * Serialization is the process of converting data structures or object states into a format that
 * can be stored or transmitted across network interfaces and reconstructed later. In JavaScript,
 * JSON (JavaScript Object Notation) is the standard text-based format for serialization.
 */
import fs from 'node:fs/promises'

//==================================================================================================
// JSON Stringify & Parse
//==================================================================================================

/**
 * Stringify
 * - Converts a JavaScript value or object into a JSON-formatted string.
 * - Note: The optional 'replacer' parameter filters or transforms properties, while the 'space'
 *   parameter controls indentation whitespace for readability.
 * - Output: '{"name":"John","age":30}'
 */
let obj = { name: 'John', age: 30 }
let json = JSON.stringify(obj)
console.log(json)

/**
 * Parse
 * - Parses a JSON string, constructing the JavaScript value or object described by the string.
 * - Note: An optional 'reviver' function parameter can be provided to transform the parsed values
 *   before returning.
 * - Output: { name: 'John', age: 30 }
 */
json = '{"name":"John","age":30}'
obj = JSON.parse(json)
console.log(obj)

//==================================================================================================
// JSON IO
//==================================================================================================

/**
 * Import JSON File (ESM)
 * - Directly imports a JSON file as an object using the ES Modules 'with { type: "json" }' syntax.
 * - Note: 'json' is currently the only natively supported import attribute type in stable Node.js.
 * - Output: { name: 'John', age: 30 }
 */
import data from '../.resources/data.json' with { type: 'json' }
console.log(data)

/**
 * Read JSON File
 * - Reads file contents asynchronously and parses the raw string buffer into a JavaScript object.
 * - Note: Passing 'utf-8' encoding returns a string directly, making it immediately readable for
 *   'JSON.parse()'.
 * - Output: { name: 'John', age: 30 }
 */
let buf = await fs.readFile('./.resources/data.json', 'utf-8')
obj = JSON.parse(buf)
console.log(obj)

/**
 * Write JSON File
 * - Serializes an object to a formatted JSON string and writes it asynchronously to disk.
 * - Note: The 'space' parameter applies 4-space indentation to format the output for human
 *   readability.
 * File Content: '{"name":"John","age":30}'
 */
obj = { name: 'John', age: 30 }
json = JSON.stringify(obj, null, 4)
await fs.writeFile('./.resources/data.json', json)
