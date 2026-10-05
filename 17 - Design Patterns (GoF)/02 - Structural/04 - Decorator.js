/**
 * Decorator
 *
 * Attaches additional responsibilities to an object dynamically. Decorators provide a flexible
 * alternative to subclassing for extending functionality. In JavaScript, this is achieved by
 * wrapping a component instance and delegating calls to it while adding pre- or post-processing
 * logic.
 */

/**
 * Abstract Component
 * - Defines the common interface for both concrete components and decorators.
 */
class AbstractLogger {
    log(message) {
        throw new Error('not implemented')
    }
}

/**
 * Concrete Component
 * - Defines the basic object to which additional responsibilities can be attached.
 */
class SimpleLogger extends AbstractLogger {
    log(message) {
        console.log(message)
    }
}

/**
 * Abstract Decorator
 * - Maintains a reference to a component object and defines an interface that conforms to the
 *   component interface.
 */
class AbstractLoggerDecorator extends AbstractLogger {
    #logger

    constructor(logger) {
        super()
        this.#logger = logger
    }
}

/**
 * Concrete Decorator
 * - Adds dynamic behavior before or after delegating execution to the wrapped component.
 */
class DateTimeLoggerDecorator extends AbstractLoggerDecorator {
    #logger

    constructor(logger) {
        super()
        this.#logger = logger
    }

    log(message) {
        const date = Temporal.Now.plainDateTimeISO().toString()
        this.#logger.log(`[${date}] ${message}`)
    }
}

/**
 * Example
 * - Wraps a simple logger component with a concrete date-time decorator to dynamically enhance
 *   output.
 */
const simpleLogger = new SimpleLogger()
const dateTimeLogger = new DateTimeLoggerDecorator(simpleLogger)
simpleLogger.log('Hello World')   // Output: Hello World
dateTimeLogger.log('Hello World') // Output: [2026-10-05T16:57:45.656698975] Hello World
