/**
 * Observers
 *
 * Provides high-performance, asynchronous monitoring APIs for observing changes to DOM elements,
 * element dimensions, and element visibility within the browser viewport.
 */

//==================================================================================================
// Intersection Observer
//==================================================================================================

/**
 * Viewport Intersection Monitoring
 * - Asynchronously detects when a target element enters or exits the browser viewport or container.
 * - Commonly used for lazy-loading images, infinite scrolling, or scroll animations.
 */
const intersectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            console.log('Element visible:', entry.target)
            // intersectionObserver.unobserve(entry.target)
        }
    })
}, {
    root: null,
    threshold: 0.5
})
const card = document.querySelector('.card')
if (card) {
    intersectionObserver.observe(card)
}

//==================================================================================================
// Resize Observer
//==================================================================================================

/**
 * Element Dimension Monitoring
 * - Tracks changes to an element's content box or border box size independently of window resize.
 * - Output: Element width: 320 Height: 180
 */
const resizeObserver = new ResizeObserver(entries => {
    for (const entry of entries) {
        const { width, height } = entry.contentRect
        console.log(`Element width: ${width} Height: ${height}`)
    }
})
const container = document.querySelector('.container')
if (container) {
    resizeObserver.observe(container)
}

//==================================================================================================
// Mutation Observer
//==================================================================================================

/**
 * DOM Tree Mutation Monitoring
 * - Watches for changes made to the DOM tree structure, child nodes, or element attributes.
 */
const mutationObserver = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
        if (mutation.type === 'childList') {
            console.log('Child nodes modified')
        }
        if (mutation.type === 'attributes') {
            console.log(`Attribute changed: ${mutation.attributeName}`)
        }
    })
})
const targetNode = document.querySelector('#app')
if (targetNode) {
    mutationObserver.observe(targetNode, {
        attributes: true,
        childList: true,
        subtree: true
    })
}

//==================================================================================================
// Cleanup
//==================================================================================================

/**
 * Disconnect Observers
 * - Stops watching all targets and clears pending notifications to prevent memory leaks.
 */
intersectionObserver.disconnect()
resizeObserver.disconnect()
mutationObserver.disconnect()
