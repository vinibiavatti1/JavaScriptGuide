/**
 * Element
 *
 * The 'Element' interface represents an object in a Document tree. It encapsulates all properties
 * and methods common to elements, including attribute manipulation, class toggling, DOM traversal,
 * positioning, and event handling.
 */

//==================================================================================================
// DOM Traversal & Relationships
//==================================================================================================

/**
 * Parent & Children
 * - Navigates up to the immediate parent element and accesses child element collections.
 * - Output: <main> 2
 */
const el = document.querySelector('.card')
console.log(el.parentElement, el.children.length)

/**
 * Siblings
 * - Navigates to the adjacent element nodes in the DOM tree.
 * - Output: <header> <footer>
 */
console.log(el.previousElementSibling, el.nextElementSibling)

/**
 * Closest
 * - Traverses the element and its ancestors up the DOM tree until it finds a matching selector.
 * - Output: <div class="container">
 */
const container = el.closest('.container')
console.log(container)

/**
 * Matches
 * - Checks if the element would be selected by the specified CSS selector string.
 * - Output: true
 */
console.log(el.matches('.card'))

//==================================================================================================
// Attributes & Datasets
//==================================================================================================

/**
 * Get, Set & Remove Attributes
 * - Reads, writes, or removes custom and standard HTML attributes on the element.
 * - Output: button submit
 */
el.setAttribute('type', 'submit')
console.log(el.getAttribute('role'), el.getAttribute('type'))
el.removeAttribute('disabled')

/**
 * Has Attribute
 * - Verifies whether the element possesses a specific attribute.
 * - Output: true
 */
console.log(el.hasAttribute('type'))

/**
 * Dataset (data-* Attributes)
 * - Provides read/write access to all custom data attributes ('data-*') defined on the element.
 * - Output: 123
 */
el.dataset.id = '123'
console.log(el.dataset.id)

//==================================================================================================
// Classes & Styling
//==================================================================================================

/**
 * Class List
 * - Adds, removes, toggles, or checks CSS class names on the element using 'classList'.
 * - Output: true
 */
el.classList.add('active', 'highlight')
el.classList.remove('highlight')
el.classList.toggle('visible')
console.log(el.classList.contains('active'))

/**
 * Style Property
 * - Directly modifies inline CSS styles on the element using JavaScript properties.
 */
el.style.backgroundColor = 'black'
el.style.display = 'none'

//==================================================================================================
// Content & HTML Manipulation
//==================================================================================================

/**
 * Text Content
 * - Gets or sets the text content of the node and its descendants ('textContent' ignores layout).
 * - Output: Hello World
 */
el.textContent = 'Hello World'
console.log(el.textContent)

/**
 * Inner HTML & Outer HTML
 * - Gets or replaces the HTML markup contained within the element or including the element itself.
 * - Output: <span>Content</span> | <div class="card"><span>Content</span></div>
 */
el.innerHTML = '<span>Content</span>'
console.log(el.innerHTML, el.outerHTML)

/**
 * Insert Adjacent HTML
 * - Parses specified text as HTML and inserts the resulting nodes at a specified position.
 * - Positions: beforebegin, afterbegin, beforeend, afterend
 */
el.insertAdjacentHTML('beforeend', '<p>Appended</p>')

//==================================================================================================
// Dimensions & Position
//==================================================================================================

/**
 * Get Bounding Client Rect
 * - Returns the size of an element and its position relative to the viewport.
 * - Output: 100 200
 */
const rect = el.getBoundingClientRect()
console.log(rect.width, rect.top)

/**
 * Client & Offset Dimensions
 * - Accesses inner dimensions (excluding border/margin) and total layout dimensions (with border).
 * - Output: 300 320
 */
console.log(el.clientWidth, el.offsetWidth)

/**
 * Scroll Dimensions & Scroll Position
 * - Reads total scrollable area dimensions and current scroll offsets of the element.
 * - Output: 1000 0
 */
console.log(el.scrollHeight, el.scrollTop)

//==================================================================================================
// Focus & Scrolling
//==================================================================================================

/**
 * Scroll Into View
 * - Scrolls the element's parent container until the element is visible in the viewport.
 */
el.scrollIntoView({ behavior: 'smooth', block: 'center' })

/**
 * Focus & Blur
 * - Programmatically sets or removes keyboard focus from the element.
 */
el.focus()
el.blur()
