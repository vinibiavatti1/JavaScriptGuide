/**
 * Dependency Injection (DI)
 *
 *
 */

/**
 * Factory Without Dependencies
 * -
 * - Output: Found customer with id: 1
 */
const customerService = {
    findById: (id) => console.log('Found customer with id:', id)
}
customerService.findById(1)

/**
 * Factory With Dependencies
 * -
 * - Output: Connected to DB | Found customer with id: 1
 */
const createCustomerService = (db) => ({
    findById(id) {
        db.connect()
        console.log('Found customer with id:', id)
    }
})
const db = { connect() { console.log('Connected to DB') } }
const service = createCustomerService(db)
service.findById(1)
