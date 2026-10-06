/**
 * Adapter
 *
 * Converts the interface of an existing object into another interface expected by clients. In
 * JavaScript, we can implement this functionally by wrapping incompatible functions or services
 * inside a wrapper object that translates interface calls.
 */
const legacyLogger = {
    log: (message) => console.log(message)
}
const createLegacyLoggerAdapter = (legacyLogger) => ({
    log: (message) => legacyLogger.log(`log: ${message}`),
    warn: (message) => legacyLogger.log(`warn: ${message}`)
})
const createApplication = (logger) => ({
    log: (message) => logger.log(message),
    warn: (message) => logger.warn(message)
})
const app = createApplication(createLegacyLoggerAdapter(legacyLogger))
app.log('Hello World')  // Output: log: Hello World
app.warn('Hello World') // Output: warn: Hello World
