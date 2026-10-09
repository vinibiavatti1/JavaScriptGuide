/**
 * Observer
 *
 * Defines a one-to-many dependency between objects so that when one object changes state, all its
 * dependents are notified automatically. In JavaScript, we can implement this functionally by
 * maintaining a set of subscriber callbacks inside a closure.
 *
 * Output: Order processed: { id: 1, status: 'success' }
 */
const createOrderService = () => {
    const listeners = new Set()
    return {
        subscribe: handler => {
            listeners.add(handler)
            return () => listeners.delete(handler)
        },
        processOrder: id => {
            // Process...
            const event = { id, status: 'success' }
            for (const handler of listeners) handler(event)
        }
    }
}
const orderService = createOrderService()
const unsubscribe = orderService.subscribe(data => console.log('Order processed:', data))
orderService.processOrder(1)
unsubscribe()
