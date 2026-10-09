/**
 * IndexedDB
 *
 * IndexedDB is a low-level asynchronous transactional NoSQL database API built into the browser.
 * It enables client-side storage of large amounts of structured data, including files and blobs,
 * using indexes to enable high-performance searches.
 */

//==================================================================================================
// Database Connection & Schema Setup
//==================================================================================================

/**
 * Open Database & Store Creation
 * - Opens or creates a database with a specified version.
 */
const request = indexedDB.open('AppDatabase', 1)

/**
 * Store Creation
 * - The 'onupgradeneeded' event executes only when creating a database or incrementing its version,
 *   serving as the schema migration hook where object stores (tables) and indexes are created.
 */
request.onupgradeneeded = event => {
    const db = event.target.result
    if (!db.objectStoreNames.contains('users')) {
        const userStore = db.createObjectStore('users', { keyPath: 'id' })
        userStore.createIndex('emailIndex', 'email', { unique: true })
    }
}

//==================================================================================================
// CRUD Operations
//==================================================================================================

/**
 * On Success
 * - Fires when the database connection opens successfully, providing access to the IDBDatabase
 *   instance to perform transactions and CRUD operations.
 */
request.onsuccess = event => {
    const db = event.target.result

    /**
     * Add
     * - Opens a 'readwrite' transaction to add a new record to the object store.
     * - Output: Record created successfully
     */
    const addTx = db.transaction('users', 'readwrite')
    const addStore = addTx.objectStore('users')
    const addReq = addStore.add({ id: 1, name: 'Vini', email: 'vini@example.com' })
    addReq.onsuccess = () => console.log('Record created successfully')

    /**
     * Get
     * - Retrieves a record by its primary key ('keyPath').
     * - Output: Vini
     */
    const getTx = db.transaction('users', 'readonly')
    const getStore = getTx.objectStore('users')
    const getReq = getStore.get(1)
    getReq.onsuccess = () => console.log(getReq.result ? getReq.result.name : 'Not found')

    /**
     * Put
     * - Updates an existing record or creates it if the primary key does not exist.
     * - Output: Record updated
     */
    const updateTx = db.transaction('users', 'readwrite')
    const updateStore = updateTx.objectStore('users')
    const updateReq = updateStore.put({ id: 1, name: 'Vinícius', email: 'vini@example.com' })
    updateReq.onsuccess = () => console.log('Record updated')

    /**
     * Delete
     * - Removes a record from the store by its primary key.
     * - Output: Record deleted
     */
    const deleteTx = db.transaction('users', 'readwrite')
    const deleteStore = deleteTx.objectStore('users')
    const deleteReq = deleteStore.delete(1)
    deleteReq.onsuccess = () => console.log('Record deleted')
}

/**
 * On Error
 * - Triggers if database opening fails due to user permission denial or storage quota issues.
 */
request.onerror = event => console.error('Database error:', event.target.error)
