/**
 * Facade
 *
 * Provides a simplified interface to a complex subsystem of interfaces or objects. In JavaScript,
 * we can implement this functionally by wrapping calls to multiple subsystem functions or services
 * inside a single unified orchestrator function.
 *
 * Output:
 * Checking stock for item: Computer
 * Processing 4000 from John
 * Shipping Computer to Main Street 123
 */
const inventoryService = {
    checkStock: item => console.log('Checking stock for item:', item)
}
const paymentService = {
    processPayment: (amount, customer) => console.log('Processing', amount, 'from', customer)
}
const shippingService = {
    shipItem: (item, address) => console.log('Shipping', item, 'to', address)
}
const createOrderService = ({ inventoryService, paymentService, shippingService }) => ({
    processOrder: (item, amount, customer, address) => {
        inventoryService.checkStock(item)
        paymentService.processPayment(amount, customer)
        shippingService.shipItem(item, address)
    }
})
const orderService = createOrderService({ inventoryService, paymentService, shippingService })
orderService.processOrder('Computer', 4000, 'John', 'Main Street 123')
