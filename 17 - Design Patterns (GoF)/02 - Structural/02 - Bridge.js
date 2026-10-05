/**
 * Bridge
 *
 * Decouples an abstraction from its implementation so that the two can vary independently. In
 * JavaScript, this is achieved by maintaining a reference to an implementor interface inside the
 * abstraction base class, allowing logger features and output mechanisms to evolve independently.
 */

/**
 * Abstraction
 * - Defines the high-level control interface and maintains a reference to the implementor.
 */
class SimpleLogger {
    writer

    constructor(writer) {
        this.writer = writer
    }

    log(message) {
        this.writer.write(message)
    }
}

/**
 * Refined Abstraction
 * - Extends the interface defined by Abstraction to provide variant or enhanced features.
 */
class Logger extends SimpleLogger {
    constructor(writer) {
        super(writer)
    }

    warn(message) {
        this.writer.write(`warn: ${message}`)
    }
}

//==================================================================================================
// Conceptually, the Bridge would be present here!
//==================================================================================================

/**
 * Abstract Implementor
 * - Defines the lower-level interface for all concrete implementation classes.
 */
class Writer {
    write(message) {
        throw new Error('not implemented')
    }
}

/**
 * Concrete Implementor
 * - Implements the lower-level Implementor interface for a specific platform or mechanism.
 */
class ConsoleWriter extends Writer {
    write(message) {
        console.log(message)
    }
}

/**
 * Example
 * - Connects a refined logger abstraction with a concrete console writer implementor.
 */
const consoleWriter = new ConsoleWriter()
const logger = new Logger(consoleWriter)
logger.log('Hello World')  // Output: Hello World
logger.warn('Hello World') // Output: warn: Hello World
