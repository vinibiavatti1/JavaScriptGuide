//==================================================================================================
// Merging & Proto Creation
//==================================================================================================



/**
 * Create
 * - Creates a new object linked to a prototype without copying properties in memory.
 * - Output: Jane
 */
obj = { name: 'John', getName() { return this.name } }
let child = Object.create(obj)
obj.name = 'Jane'
console.log(child.getName())

/**
 * Pure Dictionary Object.create(null)
 * - Creates a dictionary object with no prototype chain or inherited Object methods.
 * - Note that the object has no prototype and doesn't inherit any methods (e.g., toString), making
 *   it a pure dictionary.
 * - Output: undefined
 */
const pureDict = Object.create(null)
console.log(pureDict.toString)
