/**
 * Express
 *
 * A minimal and flexible Node.js web application framework providing a robust set of features
 * for building web and mobile applications and RESTful APIs.
 */
import express from 'express'
import bodyParser from 'body-parser'

//==================================================================================================
// Create Application
//==================================================================================================

/**
 * Create Application
 * - Initializes an Express application instance to handle routing and middleware configuration.
 */
const app = express()

/**
 * Body Parser
 * - Parses incoming request payloads into JSON format, making them accessible via 'req.body'.
 */
app.use(bodyParser.json())

//==================================================================================================
// Middlewares
//==================================================================================================

/**
 * Global Middleware
 * - Intercepts all incoming requests., rejecting unauthorized traffic with 401.
 */
app.use((req, res, next) => {
    console.log('Validating authorization...')
    if (!req.headers.authorization) {
        return res.sendStatus(401)
    }
    next()
})

/**
 * Route-Specific Middleware
 * - Scopes middleware execution to a specific URL prefix (e.g., '/search').
 */
app.use('/search', (req, res, next) => {
    console.log('log:', req.originalUrl)
    next()
})

//==================================================================================================
// Routes
//==================================================================================================

/**
 * Get User Route
 * - Handles GET requests for a specific user ID parameter and returns user data.
 */
app.get('/user/:id', (req, res) => {
    const id = req.params.id
    res.json({ id, name: 'John' })
})

/**
 * Create User Route
 * - Handles POST requests containing JSON bodies to register a new user.
 */
app.post('/user', (req, res) => {
    const data = req.body
    res.json({ message: 'success', data })
})

/**
 * Update User Route
 * - Handles PUT requests to update existing user records via request body payload.
 */
app.put('/user', (req, res) => {
    const data = req.body
    res.json({ message: 'success', data })
})

/**
 * Delete User Route
 * - Handles DELETE requests for removing user records by identifier parameter.
 */
app.delete('/user/:id', (req, res) => {
    res.json({ message: 'success' })
})

//==================================================================================================
// Query Strings
//==================================================================================================

/**
 * Query String Route
 * - Extracts query parameters from the request URL to filter and return results.
 */
app.get('/search', (req, res) => {
    const id = req.query.id
    res.send([{ id, name: 'John' }])
})

//==================================================================================================
// Serving Static Files
//==================================================================================================

/**
 * Static Directory
 * - Serves static assets directly from the root of the specified folder.
 */
app.use(express.static('./.resources'))

/**
 * Virtual Static Directory
 * - Serves static assets mapped under a virtual path prefix ('/static').
 */
app.use('/static', express.static('./.resources'))

//==================================================================================================
// Start Application
//==================================================================================================

/**
 * Start Application
 * - Binds the application to listen for incoming network connections on port 3000.
 * - Output: Application listening on port 3000
 */
app.listen(3000, () => {
    console.log('Application listening on port 3000')
})

//==================================================================================================
// Test Application
//==================================================================================================

/**
 * Send GET Request With Parameter
 * - Performs a GET request testing route parameters and middleware authorization.
 * - Output:
 *   Validating authorization...
 *   Response data: { id: '1', name: 'John' }
 */
let response = await fetch('http://localhost:3000/user/1', {
    headers: {
        'Authorization': 'token'
    }
})
if (response.ok) {
    const data = await response.json()
    console.log('Response data:', data)
}

/**
 * Send POST Request with Body
 * - Performs a POST request sending a JSON body payload to the server.
 * - Output:
 *   Validating authorization...
 *   Response data: { message: 'success', data: { id: 2, name: 'Jane' } }
 */
response = await fetch('http://localhost:3000/user', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'token'
    },
    body: JSON.stringify({
        id: 2,
        name: 'Jane'
    })
})
if (response.ok) {
    const data = await response.json()
    console.log('Response data:', data)
}

/**
 * Send Request With Query String
 * - Performs a GET request testing query string parameters and path-prefixed logging middleware.
 * - Output:
 *   Validating authorization...
 *   log: /search?id=1
 *   Response data: [ { id: '1', name: 'John' } ]
 */
response = await fetch('http://localhost:3000/search?id=1', {
    headers: {
        'Authorization': 'token'
    }
})
if (response.ok) {
    const data = await response.json()
    console.log('Response data:', data)
}

/**
 * Stop Application
 * - Gracefully terminates the test process after execution completes.
 */
setTimeout(() => process.exit(0), 3000)
