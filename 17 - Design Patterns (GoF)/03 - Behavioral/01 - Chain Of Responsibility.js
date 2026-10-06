/**
 * Chain Of Responsibility
 *
 * Avoids coupling the sender of a request to its receiver by giving more than one object a chance
 * to handle the request. In JavaScript, we can implement this functionally by executing an array of
 * handler functions in sequence until a handler halts the pipeline.
 */
const createPipeline = (...handlers) => (request) => {
    for (const handler of handlers) {
        const result = handler(request)
        if (result === null) {
            break
        }
    }
}
const authHandler = (request) => {
    if (!request.token) {
        console.log('Forbidden')
        return null
    }
}
const parseHandler = (request) => {
    if (!request.body) {
        console.log('Bad Request')
        return null
    }
}
const logHandler = (request) => {
    console.log('OK')
}
const pipeline = createPipeline(authHandler, parseHandler, logHandler)
pipeline({})                              // Forbidden
pipeline({ token: 'xxx' })                // Bad Request
pipeline({ token: 'xxx', body: 'hello' }) // OK
