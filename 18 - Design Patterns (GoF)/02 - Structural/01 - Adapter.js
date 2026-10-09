/**
 * Adapter
 *
 * Converts the interface of an existing object into another interface expected by clients. In
 * JavaScript, we can implement this functionally by wrapping incompatible functions or services
 * inside a wrapper object that translates interface calls.
 *
 * Output: log: Hello World | warn: Hello World
 */
const legacyLogger = {
    log: message => console.log(message)
}
const createLegacyLoggerAdapter = legacyLogger => ({
    log: message => legacyLogger.log(`log: ${message}`),
    warn: message => legacyLogger.log(`warn: ${message}`)
})
const legacyLoggerAdapter = createLegacyLoggerAdapter(legacyLogger)
legacyLoggerAdapter.log('Hello World')
legacyLoggerAdapter.warn('Hello World')
