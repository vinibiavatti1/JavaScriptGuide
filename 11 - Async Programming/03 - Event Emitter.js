/**
 * Event Emitter
 *
 * The 'node:events' module provides the EventEmitter class, a cornerstone for building event-driven
 * architectures in Node.js. It allows objects to emit named events that trigger registered listener
 * functions synchronously in the order they were attached.
 */
import { EventEmitter } from "node:events";

//==================================================================================================
// Event Emitter
//==================================================================================================

/**
 * Event Emitter
 * - Creates a standard EventEmitter instance to manage listeners and emit events.
 */
const emitter = new EventEmitter()

/**
 * Event Handler
 * - Defines a callback function to handle incoming event payloads.
 */
const handleMessage = (message) => console.log(`Received message: ${message}`)

/**
 * Register Listener ('on')
 * - Registers a listener function for a specific event name using the 'on()' method.
 */
emitter.on('message', handleMessage)

/**
 * Emit
 * - Synchronously calls each listener registered for the specified event name in order.
 * - Output: Received message: Hello World
 */
emitter.emit('message', 'Hello World')

/**
 * Remove Listener ('off')
 * - Deregisters a specific listener function using 'off()' by passing the original function
 *   reference.
 */
emitter.off('message', handleMessage)

//==================================================================================================
// Class Implementation
//==================================================================================================

/**
 * Event-Driven Class
 * - Implements an event protocol within a class by exposing wrapper methods ('on', 'off') that
 *   delegate subscription handling to an internal EventEmitter, while triggering events using
 *   'emit()'.
 */
class PaymentService {
    #emitter = new EventEmitter()

    processPayment(paymentId) {
        // Process...
        this.#emitter.emit('processed', { paymentId, status: 'success' })
    }

    on(event, handler) {
        this.#emitter.on(event, handler)
        return this
    }

    off(event, handler) {
        this.#emitter.off(event, handler)
        return this
    }
}

/**
 * Class Event Listener
 * - Subscribes to custom class events via wrapper methods and receives notifications when actions
 *   occur.
 * - Output: Notification received: { paymentId: 123, status: 'success' }
 */
const paymentService = new PaymentService()
paymentService.on('processed', (data) => {
    console.log('Notification received:', data)
})
paymentService.processPayment(123)

//==================================================================================================
// Event Emitter Operations
//==================================================================================================

/**
 * Add Listener
 * - Adds a listener function to the end of the listeners array (alias to 'on()').
 */
emitter.addListener('message', handleMessage)

/**
 * Remove Listener
 * - Removes a specific listener function from the listeners array (alias to 'off()').
 */
emitter.removeListener('message', handleMessage)

/**
 * Once
 * - Registers a one-time listener that is automatically removed after its first invocation.
 */
emitter.once('message', handleMessage)

/**
 * Prepend Listener
 * - Adds a listener function to the beginning of the listeners array for the specified event.
 */
emitter.prependListener('message', handleMessage)

/**
 * Prepend Once Listener
 * - Adds a one-time listener function to the beginning of the listeners array for the specified
 *   event.
 */
emitter.prependOnceListener('process', handleMessage)

/**
 * Event Names
 * - Returns an array listing the events for which the emitter has registered listeners.
 * - Output: message | process
 */
const events = emitter.eventNames()
events.forEach(event => console.log(event))

/**
 * Listener Count
 * - Returns the number of listeners listening to a specified event name.
 * - Output: 2
 */
const count = emitter.listenerCount('message')
console.log(count)

/**
 * Listeners
 * - Returns a copy of the array of listeners for the specified event name.
 * - Output: handleMessage | handleMessage
 */
const listeners = emitter.listeners('message')
listeners.forEach(listener => console.log(listener.name))

/**
 * Raw Listeners
 * - Returns a copy of the array of listeners, including wrappers such as those created by 'once()'.
 * - Note: Unlike 'listeners()', this method exposes wrapper functions for one-time events.
 * - Output: handleMessage | wrapper
 */
const rawListeners = emitter.rawListeners('message')
rawListeners.forEach(listener => console.log(listener.name))

/**
 * Set Max Listeners
 * - Modifies the limit of listeners for a single event before a memory leak warning is printed.
 */
emitter.setMaxListeners(10)

/**
 * Get Max Listeners
 * - Returns the current maximum listener value for the EventEmitter instance.
 * - Output: 10
 */
const max = emitter.getMaxListeners()
console.log(max)

/**
 * Remove All Listeners
 * - Removes all listeners, or those of the specified event name if an event argument is provided.
 * - Note: Omitting the event argument removes all registered listeners across all events.
 */
emitter.removeAllListeners('message')
emitter.removeAllListeners()
