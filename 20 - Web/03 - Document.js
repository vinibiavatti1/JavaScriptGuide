/**
 * Document
 *
 * The 'document' object represents any web page loaded in the browser and serves as an entry point
 * into the page's content, which is the DOM (Document Object Model) tree.
 */

//==================================================================================================
// Element Selection
//==================================================================================================

/**
 * Get Element By Id
 * - Returns a reference to the element whose 'id' property matches the specified string.
 * - Output: <div id="app">
 */
const app = document.getElementById('app')
console.log(app)

/**
 * Query Selector
 * - Returns the first element within the document that matches the specified CSS selector.
 * - Output: <button class="btn">
 */
const button = document.querySelector('.btn')
console.log(button)

/**
 * Query Selector All
 * - Returns a static NodeList representing a list of the document's elements matching selectors.
 * - Output: 2
 */
const items = document.querySelectorAll('.item')
console.log(items.length)

//==================================================================================================
// Element Creation & Mutation
//==================================================================================================

/**
 * Create Element
 * - Creates the HTML element specified by tagName inside the document memory.
 */
const div = document.createElement('div')
div.textContent = 'Hello World'

/**
 * Create Text Node
 * - Creates a new inline Text node with the given string content.
 */
const text = document.createTextNode('Sample Text')

/**
 * Append Child
 * - Adds a node to the end of the list of children of a specified parent node.
 */
document.body.appendChild(div)

/**
 * Append & Prepend
 * - Inserts a set of Node objects or string objects after the last child or before the first child.
 */
div.append('End')
div.prepend('Start')

/**
 * Remove Child
 * - Removes a child node from the DOM tree and returns the removed node.
 */
document.body.removeChild(div)

/**
 * Create Document Fragment
 * - Creates an off-screen container to build nodes in memory before appending to the main DOM.
 */
const fragment = document.createDocumentFragment()
const li = document.createElement('li')
fragment.appendChild(li)
document.body.appendChild(fragment)

//==================================================================================================
// Document Properties & Metadata
//==================================================================================================

/**
 * Title & Head & Body
 * - Direct accessors for core structural document elements and metadata properties.
 * - Output: My Webpage | <head>...</head> | <body>...</body>
 */
document.title = 'My Webpage'
console.log(document.title)
console.log(document.head)
console.log(document.body)

/**
 * Cookie
 * - Gets or sets the key-value pairs of cookies associated with the current document.
 * - Output: user=Vini
 */
document.cookie = 'user=Vini; path=/'
console.log(document.cookie)

/**
 * Active Element
 * - Returns the DOM element within the document that currently has focus.
 * - Output: <input type="text">
 */
console.log(document.activeElement)

//==================================================================================================
// Event Dispatching
//==================================================================================================

/**
 * Create Event
 * - Creates and dispatches custom synthetic events programmatically throughout the document.
 * - Output: Custom event triggered
 */
document.addEventListener('customEvent', () => console.log('Custom event triggered'))
const customEvent = new Event('customEvent')
document.dispatchEvent(customEvent)
