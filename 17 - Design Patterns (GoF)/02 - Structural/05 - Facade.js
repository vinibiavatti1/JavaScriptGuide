/**
 * Facade
 *
 * Provides a unified interface to a set of interfaces in a subsystem. Facade defines a higher-level
 * interface that makes the subsystem easier to use by hiding complex interactions and dependencies
 * from the client.
 */

/**
 * Facade
 * - Coordinates subsystem objects to execute complex workflows through a simple interface.
 */
class OrderFacade {
    #inventory = new Inventory()
    #payment = new Payment()
    #shipping = new Shipping()

    processOrder(customer, address, item, amount) {
        this.#inventory.checkStock(item)
        this.#payment.processPayment(customer, amount)
        this.#shipping.shipItem(item, address)
    }
}

/**
 * Subsystem Classes
 * - Implements subsystem functionality and handles work assigned by the Facade object.
 * - Have no knowledge of the Facade and keep no references to it.
 */
class Inventory {
    checkStock(item) {
        console.log('Checking stock for item:', item)
    }
}
class Payment {
    processPayment(customer, amount) {
        console.log('Processing payment for customer', customer, 'with amount', amount)
    }
}
class Shipping {
    shipItem(item, address) {
        console.log('Shipping', item, 'to', address)
    }
}

/**
 * Client
 * - Interacts with the subsystem exclusively through the Facade instead of calling subsystem
 *   objects directly.
 */
class Shop {
    #orderFacade = new OrderFacade()

    checkout(customer, address, item, amount) {
        this.#orderFacade.processOrder(customer, address, item, amount)
    }
}

/**
 * Example
 * - Demonstrates ordering an item using the client interface backed by the facade subsystem.
 */
const shop = new Shop()
shop.checkout('John', 'Main Street 123', 'Computer', 4000)
// Output:
// Checking stock for item: Computer
// Processing payment for customer John with amount 4000
// Shipping Computer to Main Street 123
