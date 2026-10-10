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
 * Global Middlewares
 * - Middlewares are functions used to intercept incoming requests during the request-response
 *   cycle.
 * - The middleware below validates authorization headers, rejecting unauthorized traffic with a 401
 *   status.
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
 * - Express allows scoping middlewares to specific URL prefixes by passing a path string as an
 *   argument.
 * - The middleware below intercepts requests starting with '/search' and logs the original URL.
 */
app.use('/search', (req, res, next) => {
    console.log('log:', req.originalUrl)
    next()
})

//==================================================================================================
// Global Routes
//==================================================================================================

/**
 * Get
 * - Handles GET requests for a specific user ID parameter and returns user data.
 * - Route parameters are denoted by the ':' prefix and extracted via the 'req.params' object.
 */
app.get('/user/:id', (req, res) => {
    const id = req.params.id
    res.json({ id, name: 'John' })
})

/**
 * Post
 * - Handles POST requests containing JSON bodies to register a new user.
 * - Request payloads are parsed into JavaScript objects and accessed via the 'req.body' object.
 * - Note: Requires a body parsing middleware (such as 'bodyParser.json()' or 'express.json()')
 *   configured beforehand, otherwise 'req.body' will evaluate to undefined.
 */
app.post('/user', (req, res) => {
    const data = req.body
    res.json({ data, message: 'success' })
})

/**
 * Put
 * - Handles PUT requests to update existing user records via request body payload.
 */
app.put('/user/:id', (req, res) => {
    const data = req.body
    res.json({ id, data, message: 'success' })
})

/**
 * Delete
 * - Handles DELETE requests for removing user records by identifier parameter.
 */
app.delete('/user/:id', (req, res) => {
    const id = req.params.id
    res.json({ id, message: 'success' })
})

//==================================================================================================
// Modular Routes
//==================================================================================================

/**
 * Create Modular Router
 * - Express.Router is used to create modular, mountable route handlers that act as a
 *   mini-application.
 * - The router below instantiates a dedicated routing module for managing product-related
 *   endpoints.
 */
const productRouter = express.Router()

/**
 * Modular Router Route
 * - Sub-routes defined on a router instance inherit the prefix of where the router is eventually
 *   mounted.
 * - The route below handles GET requests for a product ID parameter (resolves to '/product/:id').
 */
productRouter.get('/:id', (req, res) => {
    const id = req.params.id
    res.json({ id, name: 'Computer' })
})

/**
 * Register Modular Router
 * - The 'app.use()' method can be used to register modular routers under a specific shared URL
 *   prefix.
 * - The code below attaches the product router to the '/product' base path.
 */
app.use('/product', productRouter)

//==================================================================================================
// Query Strings
//==================================================================================================

/**
 * Search Route
 * - Handles GET requests for the '/search' route accepting query parameters.
 * - Query string parameters are parsed from the URL search portion and accessed via the 'req.query'
 *   object.
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
 * - Binds the Express application to listen for incoming network connections.
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
 * - Tests route parameter matching and authentication middleware protection.
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
 * - Tests JSON body parsing and resource creation via POST method.
 * - Output:
 *   Validating authorization...
 *   Response data: { data: { id: 2, name: 'Jane' }, message: 'success' }
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
 * - Tests query string extraction and path-prefixed middleware logging.
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
 * - Gracefully terminates the test server process after execution completes.
 */
setTimeout(() => process.exit(0), 3000)
