/**
 * TCP Sockets
 *
 * Demonstrates low-level network communication over TCP/IP using the native 'node:net' module.
 * Provides a reliable, bi-directional byte stream connection between a server and a client.
 */
import net from 'node:net'

/**
 * Server
 * - Creates a TCP server, listens on port 8089, and responds to incoming client messages.
 * - Output: Server listening on port 8089 | From Client: Hello
 */
const server = net.createServer((socket) => {
    socket.on('data', (data) => {
        console.log(`From Client: ${data.toString()}`)
        socket.write('World')
    })
})
server.listen(8089, () => {
    console.log('Server listening on port 8089')
})
setTimeout(() => server.close(), 1000)

/**
 * Client
 * - Establishes a TCP connection to the server, sends 'Hello', and logs the response.
 * - Output: From Server: World
 */
const client = net.createConnection({ port: 8089 }, () => {
    client.write('Hello')
})
client.on('data', (data) => {
    console.log(`From Server: ${data.toString()}`)
    client.end()
})
