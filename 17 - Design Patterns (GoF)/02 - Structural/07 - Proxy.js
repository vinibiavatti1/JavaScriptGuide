/**
 * Proxy
 *
 * Provides a surrogate or placeholder for another object to control access to it. In JavaScript,
 * we can implement this functionally by wrapping a target function inside a higher-order function
 * that intercepts and validates calls before execution.
 */
const connectToDb = () => console.log('Connected to DB!')
const createAuthProxy = (targetFn) => (user) => {
    if (user !== 'admin') {
        console.log('Forbidden')
        return
    }
    targetFn()
}
const connectToDbProxy = createAuthProxy(connectToDb)
connectToDb()      // Output: Connected to DB!
connectToDbProxy() // Output: Forbidden
