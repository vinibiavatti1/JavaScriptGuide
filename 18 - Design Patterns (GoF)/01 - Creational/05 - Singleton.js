/**
 * Singleton
 *
 * Ensures a class or resource has only one instance while providing a global point of access to it.
 * In JavaScript, ES modules naturally implement this pattern by caching imported module instances
 * upon their first load.
 *
 * Output: true
 */
import db1 from '../.resources/db.js'
import db2 from '../.resources/db.js'
console.log(db1 === db2)
