/**
 * Events
 *
 * Demonstrates the DOM Event system, including event listener management, propagation control
 * (bubbling and capturing), event delegation patterns, and dispatching custom events.
 */

//==================================================================================================
// Listener Management
//==================================================================================================

/**
 * Add & Remove Event Listener
 * - Attaches and removes an event handler callback from a target element.
 */
const button = document.getElementById('button')
const handleClick = event => console.log('Clicked:', event.type)
button.addEventListener('click', handleClick)
button.removeEventListener('click', handleClick)

/**
 * Once Option
 * - Configures the listener to automatically remove itself after firing a single time.
 */
button.addEventListener('click', () => console.log('Fired once'), { once: true })

/**
 * Abort Signal Cleanup
 * - Uses an AbortController signal to remove multiple event listeners simultaneously.
 */
const controller = new AbortController()
button.addEventListener('click', () => console.log('Active'), { signal: controller.signal })
controller.abort()

//==================================================================================================
// Propagation & Actions
//==================================================================================================

/**
 * Prevent Default & Stop Propagation
 * - Prevents default browser actions and halts event bubbling up the DOM tree.
 * - Commonly used to prevent form submission page reloads or stop link navigation.
 */
button.addEventListener('click', event => {
    event.preventDefault()
    event.stopPropagation()
})

/**
 * Target vs Current Target
 * - 'target' is the element that triggered the event, while 'currentTarget' is the element
 *   attaching the event listener.
 * - Output: BUTTON DIV
 */
container.addEventListener('click', event =>
    console.log(event.target.tagName, event.currentTarget.tagName)
)

//==================================================================================================
// Event Delegation
//==================================================================================================

/**
 * Event Delegation
 * - Attaches a single event listener to a parent container to handle events from present or future
 *   child elements.
 * - Output: Item clicked: 123
 */
list.addEventListener('click', event => {
    const item = event.target.closest('.list-item')
    if (item) {
        console.log('Item clicked:', item.dataset.id)
    }
})

//==================================================================================================
// Custom Events
//==================================================================================================

/**
 * Custom Event
 * - Creates and dispatches application-defined custom events carrying additional data in 'detail'.
 * - Output: Order submitted: 42
 */
document.addEventListener('orderSubmit', event =>
    console.log('Order submitted:', event.detail.orderId)
)
const customEvent = new CustomEvent('orderSubmit', { detail: { orderId: 42 } })
document.dispatchEvent(customEvent)
