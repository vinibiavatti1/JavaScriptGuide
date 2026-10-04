/**
 * HTTP Server
 *
 * Demonstrates building a low-level HTTP server using the native 'node:http' module. Serves as the
 * underlying foundation for frameworks like Express and Fastify.
 */
import http from 'node:http'

/**
 * Create Server
 * - Instantiates an HTTP server instance and schedules an automatic shutdown after 1 second.
 */
const server = http.createServer()
setTimeout(() => server.close(), 1000)

/**
 * Listen Requests
 * - Attaches a listener to the 'request' event to serve incoming HTTP requests.
 */
server.on('request', (req, res) => {
    res.end('Hello World')
})

/**
 * Start Server
 * - Binds the server to the specified port and begins accepting incoming connections.
 * - Output: Server listening on http://localhost:8000
 */
const PORT = 8000
server.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`)
})

/**
 * Send Request
 * - Performs an HTTP GET request to the running server using native fetch and logs the response
 *   text.
 * - Output: Hello World
 */
const response = await fetch('http://localhost:8000')
if (response.ok) {
    const data = await response.text()
    console.log(data)
}
