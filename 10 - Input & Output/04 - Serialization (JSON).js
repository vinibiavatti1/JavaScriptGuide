/**
 * Serialization
 *
 *
 */
import fs from 'node:fs/promises'

//==================================================================================================
// JSON Stringify & Parse
//==================================================================================================

/**
 * Stringify
 * -
 * - (add note about replacer and space)
 * - Output: '{"name":"John","age":30}'
 */
let obj = { name: 'John', age: 30 }
let json = JSON.stringify(obj)
console.log(json)

/**
 * Parse
 * -
 * - (add note about resolver)
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
 * -
 * - Output: { name: 'John', age: 30 }
 */
import data from '../.resources/data.json' with { type: 'json' }
console.log(data)

/**
 * Read JSON File
 * -
 * - Output: { name: 'John', age: 30 }
 */
let buf = await fs.readFile('.\\.resources\\data.json')
obj = JSON.parse(buf)
console.log(obj)

/**
 * Write JSON File
 * -
 * - Output:
 */
obj = { name: 'John', age: 30 }
json = JSON.stringify(obj, null, 4)
await fs.writeFile('.\\.resources\\data.json', json)
