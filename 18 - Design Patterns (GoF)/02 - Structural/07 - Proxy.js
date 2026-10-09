/**
 * Proxy
 *
 * Provides a surrogate or placeholder for another object to control access to it. In JavaScript,
 * we can implement this functionally by wrapping a target function inside a higher-order function
 * that intercepts and validates calls before execution.
 *
 * Output: Connected to DB! | Forbidden
 */
const connectToDb = () => console.log('Connected to DB!')
const createAuthProxy = (targetFn) => (role) => {
    if (role !== 'admin') {
        console.log('Forbidden')
        return
    }
    targetFn()
}
const connectToDbProxy = createAuthProxy(connectToDb)
connectToDb('guest')
connectToDbProxy('guest')
