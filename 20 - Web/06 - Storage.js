/**
 * Storage
 *
 * Provides persistent and session-based client-side data storage solutions in the browser, covering
 * key-value web storage, document cookies, and asynchronous transactional databases.
 */

//==================================================================================================
// Local Storage
//==================================================================================================

/**
 * Local Storage Operations
 * - Stores data persistently across browser sessions with no expiration date (~5MB limit).
 * - Accepts and returns string key-value pairs only.
 * - Output: John
 */
localStorage.setItem('user', 'John')
console.log(localStorage.getItem('user'))
localStorage.removeItem('user')
localStorage.clear()

/**
 * Storing Objects
 * - Serializes complex JavaScript objects or arrays into JSON strings for storage.
 * - Output: 42
 */
localStorage.setItem('config', JSON.stringify({ theme: 'dark', id: 42 }))
const config = JSON.parse(localStorage.getItem('config'))
console.log(config.id)

//==================================================================================================
// Session Storage
//==================================================================================================

/**
 * Session Storage Operations
 * - Stores data isolated to the current tab/window session; cleared when the tab is closed.
 * - Output: active
 */
sessionStorage.setItem('tabStatus', 'active')
console.log(sessionStorage.getItem('tabStatus'))
sessionStorage.clear()

//==================================================================================================
// Storage Event
//==================================================================================================

/**
 * Storage Event Listener
 * - Listens for changes made to 'localStorage' or 'sessionStorage' in other tabs/windows.
 * - Output: user updated
 */
window.addEventListener('storage', event =>
    console.log(`${event.key} changed from ${event.oldValue} to ${event.newValue}`)
)

//==================================================================================================
// IndexedDB
//==================================================================================================

/**
 * IndexedDB Connection
 * - Opens a low-level asynchronous transactional database for storing large structured data.
 */
const request = indexedDB.open('AppDatabase', 1)

request.onupgradeneeded = event => {
    const db = event.target.result
    if (!db.objectStoreNames.contains('users')) {
        db.createObjectStore('users', { keyPath: 'id' })
    }
}

request.onsuccess = event => {
    const db = event.target.result
    const tx = db.transaction('users', 'readwrite')
    const store = tx.objectStore('users')

    store.put({ id: 1, name: 'Vini' })

    const query = store.get(1)
    query.onsuccess = () => console.log(query.result.name)
}
