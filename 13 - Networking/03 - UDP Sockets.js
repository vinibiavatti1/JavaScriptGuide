/**
 * UDP Sockets
 *
 * Demonstrates connectionless network communication over UDP/IP using the native 'node:dgram'
 * module. Ideal for high-throughput, low-latency messaging where guaranteed delivery is not
 * required.
 */
import dgram from 'node:dgram'

/**
 * Server
 * - Creates a UDP socket, binds to port 41234, and listens for incoming datagram packets.
 * - Output: Server listening on 127.0.0.1:41234 | From Client: Hello
 */
const server = dgram.createSocket('udp4')
server.on('message', (msg, rinfo) => {
    console.log(`From Client: ${msg.toString()}`)
    server.send('World', rinfo.port, rinfo.address)
})
server.bind(41234, '127.0.0.1', () => {
    console.log('Server listening on 127.0.0.1:41234')
})
setTimeout(() => server.close(), 1000)

/**
 * Client
 * - Creates a UDP socket, sends a datagram packet to the server, and logs the response.
 * - Output: From Server: World
 */
const client = dgram.createSocket('udp4')
client.on('message', (msg) => {
    console.log(`From Server: ${msg.toString()}`)
    client.close()
})
client.send('Hello', 41234, '127.0.0.1')
