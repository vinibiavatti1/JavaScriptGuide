/**
 * Fetch
 *
 * Provides a promise-based interface for making HTTP requests and handling responses in Node.js
 * (v18+) and modern web browsers without external dependencies.
 *
 * Note: Unlike libraries such as Axios, native fetch requires explicit JSON serialization via
 * 'JSON.stringify()' and the 'Content-Type: application/json' header. Passing a raw JS object
 * will implicitly convert it to '[object Object]', breaking the request payload.
 */
import fs from 'node:fs/promises'

//==================================================================================================
// HTTP Methods
//==================================================================================================

/**
 * GET
 * - Fetches resources from a server without modifying state.
 */
let response = await fetch('https://api.dev/employees/123')

/**
 * POST
 * - Sends a JSON payload to create a new server resource.
 */
response = await fetch('https://api.dev/employees', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name: 'John', age: 30 })
})

/**
 * PUT
 * - Replaces an entire target resource with the request payload.
 */
response = await fetch('https://api.dev/employees/123', {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name: 'John', age: 30 })
})

/**
 * PATCH
 * - Applies partial modifications to a resource.
 */
response = await fetch('https://api.dev/employees/123', {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name: 'John', age: 30 })
})

/**
 * DELETE
 * - Deletes the specified resource from the server.
 */
response = await fetch('https://api.dev/employees/123', {
    method: 'DELETE'
})

//==================================================================================================
// HTTP Headers
//==================================================================================================

/**
 * Request Headers
 * - Sets custom metadata and payload formats sent to the server.
 */
response = await fetch('https://api.dev/employees/123', {
    method: 'POST',
    headers: { 'Authorization': 'Bearer xxx' }
})

/**
 * Response Headers
 * - Reads metadata returned by the server headers object.
 * - Output: content-type application/json | cache-control no-cache
 */
response = await fetch('https://api.dev/employees/123')
response.headers.forEach((val, key) => console.log(key, val))

//==================================================================================================
// HTTP Response
//==================================================================================================

/**
 * Processing Response
 * - Checks status validity via 'response.ok' (HTTP 200-299) and parses JSON body.
 * - Output: { name: 'John', age: 30 }
 */
response = await fetch('https://api.dev/employees/123')
if (response.ok) {
    const data = await response.json()
    console.log(data)
}

//==================================================================================================
// Multipart & Binary Data
//==================================================================================================

/**
 * Upload File
 * - Constructs 'multipart/form-data' using FormData and Web File API.
 * - Note: Do not set 'Content-Type' manually when sending FormData; fetch auto-sets the boundary.
 */
const buf = await fs.readFile('.\\.resources\\file.txt')
const file = new File([buf], 'file.txt', { type: 'text/plain' })
const formData = new FormData()
formData.append('file', file)
response = await fetch('https://api.dev/upload', {
    method: 'POST',
    body: formData
})

/**
 * Download File
 * - Handles raw binary responses directly using ArrayBuffer converted to Node.js Buffer.
 * - Output: Hello World
 */
response = await fetch('https://api.dev/download')
if (response.ok) {
    const arrayBuf = await response.arrayBuffer()
    const buf = Buffer.from(arrayBuf)
    console.log(buf.toString())
}
