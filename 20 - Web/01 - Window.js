/**
 * Window
 *
 * The 'window' object represents the browser window or tab containing a DOM document. It serves as
 * the global object in browser environments, exposing core browser APIs, timers, storage
 * mechanisms, navigation controls, and window lifecycle events.
 */

//==================================================================================================
// Lifecycle Events
//==================================================================================================

/**
 * DOM Content Loaded
 * - Listens for the event fired when the initial HTML document has been completely parsed.
 * - Note: Does not wait for stylesheets, images, or subframes to finish loading.
 * - Output: DOM parsed
 */
window.addEventListener('DOMContentLoaded', () => console.log('DOM parsed'))

/**
 * Load
 * - Listens for the event fired when the entire page has loaded, including dependent resources like
 *   stylesheets, scripts, and images.
 * - Output: Page fully loaded
 */
window.addEventListener('load', () => console.log('Page fully loaded'))

/**
 * Unload
 * - Fires when the document or a child resource is being unloaded from memory.
 */
window.addEventListener('unload', () => console.log('Page fully unloaded'))

//==================================================================================================
// Window Dimensions & Viewport
//==================================================================================================

/**
 * Inner Dimensions
 * - Retrieves the width and height of the window viewport in pixels (including scrollbars).
 * - Output: 1024 768
 */
console.log(window.innerWidth, window.innerHeight)

/**
 * Outer Dimensions
 * - Retrieves the width and height of the entire browser window in pixels (including toolbars).
 * - Output: 1280 800
 */
console.log(window.outerWidth, window.outerHeight)

/**
 * Resize Event
 * - Executes a callback whenever the document viewport is resized.
 */
window.addEventListener('resize', () => console.log(window.innerWidth, window.innerHeight))

//==================================================================================================
// Scrolling Operations
//==================================================================================================

/**
 * Scroll Positions
 * - Retrieves the number of pixels that the document is currently scrolled horizontally and
 *   vertically.
 * - Output: 0 150
 */
console.log(window.scrollX, window.scrollY)

/**
 * Scroll To
 * - Scrolls the window to a particular set of coordinates inside the document.
 */
window.scrollTo({ top: 500, behavior: 'smooth' })

/**
 * Scroll By
 * - Scrolls the document in the window by a given specific offset amount relative to current
 *   position.
 */
window.scrollBy({ top: 100, behavior: 'smooth' })

/**
 * Scroll Event
 * - Listens for scrolling events triggered on the current window instance.
 */
window.addEventListener('scroll', () => console.log(window.scrollY))

//==================================================================================================
// Location & History
//==================================================================================================

/**
 * Location Info
 * - Accesses properties of the current URL location object.
 * - Output: https://example.com /search
 */
console.log(window.location.origin, window.location.pathname)

/**
 * Location Redirect
 * - Navigates the browser to a new URL address.
 */
window.location.href = 'https://example.com'

/**
 * History Push State
 * - Adds an entry to the browser session history stack without triggering a full page reload.
 */
window.history.pushState({ page: 1 }, 'Title', '/page1')

/**
 * History Replace State
 * - Modifies the current entry of the browser history stack without creating a new entry.
 */
window.history.replaceState({ page: 2 }, 'Title', '/page2')

/**
 * History Navigation
 * - Navigates back or forward through the user session history stack.
 */
window.history.back()

/**
 * Popstate Event
 * - Fires when the active history entry changes while navigating the session history.
 */
window.addEventListener('popstate', event => console.log(event.state))

//==================================================================================================
// Dialogs & Windows
//==================================================================================================

/**
 * Alert Dialog
 * - Displays a modal alert dialog with an optional message and an OK button (blocks UI execution).
 */
window.alert('Hello World')

/**
 * Confirm Dialog
 * - Displays a modal dialog with a message and OK/Cancel buttons, returning a boolean result.
 * - Output: true
 */
const confirmed = window.confirm('Are you sure?')
console.log(confirmed)

/**
 * Prompt Dialog
 * - Displays a dialog with a text input prompt for the user, returning the typed string or null.
 * - Output: John
 */
const name = window.prompt('Enter your name:', 'John')
console.log(name)

/**
 * Open Window
 * - Loads a specified resource into a new browsing context (tab or window).
 * - The '.close()' method closes the current window or a window instance created by
 *   'window.open()'.
 */
const popup = window.open('https://example.com', '_blank', 'width=400,height=400')
if (popup) {
    popup.close()
}
