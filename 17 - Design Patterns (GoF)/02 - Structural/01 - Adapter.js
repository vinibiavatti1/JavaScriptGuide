/**
 * Adapter
 *
 * Converts the interface of a class into another interface clients expect. Adapter lets classes
 * work together that couldn't otherwise because of incompatible interfaces. In JavaScript, this
 * is typically achieved via composition by wrapping an incompatible adaptee instance.
 */

/**
 * Abstract Target
 * - Defines the domain-specific interface that client code expects to interact with.
 */
class AbstractLogger {
    log(message) {
        throw new Error('not implemented')
    }
}

/**
 * Adaptee
 * - Defines an existing class or legacy service whose interface lacks modern required features or
 *   signatures.
 */
class LegacyLogger extends AbstractLogger {
    log(message) {
        console.log(message)
    }
}

/**
 * Adapter
 * - Wraps the adaptee instance and maps/translates client interface methods into adaptee calls.
 */
class LegacyLoggerAdapter extends AbstractLogger {
    #legacyLogger

    constructor(legacyLogger) {
        super()
        this.#legacyLogger = legacyLogger
    }

    log(message) {
        this.#legacyLogger.log(`log: ${message}`)
    }

    warn(message) {
        this.#legacyLogger.log(`warn: ${message}`)
    }
}

/**
 * Client
 * - Encapsulates application logic relying exclusively on the abstract target interface.
 */
class Application {
    #logger

    constructor(logger) {
        this.#logger = logger
    }

    log(message) {
        this.#logger.log(message)
    }

    warn(message) {
        this.#logger.warn(message)
    }
}

/**
 * Example
 * - Wraps a legacy logger with an adapter to fulfill the full modern target logger interface.
 */
const legacyLogger = new LegacyLogger()
const legacyLoggerAdapter = new LegacyLoggerAdapter(legacyLogger)
const app = new Application(legacyLoggerAdapter)
app.log('Hello World')  // Output: log: Hello World
app.warn('Hello World') // Output: warn: Hello World
