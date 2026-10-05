/**
 * Design Patterns
 *
 *
 */

//==================================================================================================
// Creational
//==================================================================================================

/**
 * Abstract Factory
 * -
 * - Output: Enter your name: [______] [Submit] | Enter your name: (______) (Submit)
 */
const createFlatComponentFactory = () => ({
    createInput: (label) => `${label}: [______]`,
    createButton: (label) => `[${label}]`
})
const createRoundComponentFactory = () => ({
    createInput: (label) => `${label}: (______)`,
    createButton: (label) => `(${label})`
})
const renderForm = (componentFactory) => {
    console.log(
        componentFactory.createInput('Enter your name'),
        componentFactory.createButton('Submit')
    )
}
renderForm(createFlatComponentFactory())
renderForm(createRoundComponentFactory())

/**
 * Builder
 * -
 * - Output: users [ 'name', 'age' ] [ 'name', '=', 'John' ]
 */
const createQueryBuilder = (table) => {
    const state = {
        table,
        fields: ['*'],
        where: []
    }
    return {
        select(...fields) {
            state.fields = fields
            return this
        },
        where(column, operator, value) {
            state.where = [column, operator, value]
            return this
        },
        build() {
            return state
        }
    }
}
const query = createQueryBuilder('users')
    .select('name', 'age')
    .where('name', '=', 'John')
    .build()
console.log(query.table, query.fields, query.where)

/**
 * Factory Method
 * -
 * - Output: Are you sure? (Yes) (No)
 */
const createButton = (label, type) => {
    const types = {
        flat: (x) => `[${x}]`,
        round: (x) => `(${x})`,
    }
    return types[type](label)
}
const renderDialog = (message, type) => {
    console.log(message, createButton('Yes', type), createButton('No', type))
}
renderDialog('Are you sure?', 'round')

/**
 * Prototype
 * -
 * - Output: Proceed? (Yes) (No)
 */
const createButtonPrototype = () => ({
    label: 'Click',
    render() {
        return `(${this.label})`
    }
})
const createButtonFromPrototype = (proto, overrides = {}) => {
    return Object.assign(Object.create(proto), overrides)
}
const yesButton = createButtonFromPrototype(createButtonPrototype(), { label: 'Yes' })
const noButton = createButtonFromPrototype(createButtonPrototype(), { label: 'No' })
console.log('Proceed?', yesButton.render(), noButton.render())

/**
 * Singleton
 * -
 * - Output: true
 */
import db1 from '../.resources/db.js'
import db2 from '../.resources/db.js'
console.log(db1 === db2)

//==================================================================================================
// Structural
//==================================================================================================

/**
 * Adapter
 * -
 * - Output: log: Hello World | warn: Hello World
 */
const createLegacyLogger = () => ({
    log: (message) => console.log(message)
})
const createLegacyLoggerAdapter = (legacyLogger) => ({
    log: (message) => legacyLogger.log(`log: ${message}`),
    warn: (message) => legacyLogger.log(`warn: ${message}`)
})
const createApplication = (logger) => ({
    log: (message) => logger.log(message),
    warn: (message) => logger.warn(message)
})
const app = createApplication(createLegacyLoggerAdapter(createLegacyLogger()))
app.log('Hello World')
app.warn('Hello World')

/**
 * Bridge
 * -
 * - Output: [SMS to john] Alert: Server is down | [EMAIL to john] Alert: Server is down
 */
const sendSms = (to, message) => console.log(`[SMS to ${to}] ${message}`)
const sendEmail = (to, message) => console.log(`[EMAIL to ${to}] ${message}`)
// --- Bridge ---
const createNotificationService = (sendFn) => ({
    sendAlert: (to, message) => sendFn(to, `Alert: ${message}`),
})
const smsNotificationService = createNotificationService(sendSms)
const emailNotificationService = createNotificationService(sendEmail)
smsNotificationService.sendAlert('john', 'Server is down')
emailNotificationService.sendAlert('john', 'Server is down')

/**
 * Composite
 * -
 * - Output:
 *   root/
 *     src/
 *       main.js
 *       test.js
 *     res/
 *       img.png
 *       ico.png
 */
const createFile = (name) => ({
    name,
    render(indent = '') {
        console.log(indent + this.name)
    }
})
const createFolder = (name, ...files) => ({
    name,
    files,
    render(indent = '') {
        console.log(indent + this.name)
        this.files.forEach(file => file.render(indent + '  '))
    }
})
const root =
    createFolder('root/',
        createFolder('src/',
            createFile('main.js'),
            createFile('test.js')
        ), createFolder('res/',
            createFile('img.png'),
            createFile('ico.png')
        )
    )
root.render()

/**
 * Decorator
 * -
 * - Output: log: calc [ 3, 5 ]
 */
const calc = (x, y) => x + y
const withLog = (fn) => (...args) => {
    console.log('log:', fn.name, args)
    return fn(...args)
}
const calcWithLog = withLog(calc);
calcWithLog(3, 5)

/**
 * Facade
 * -
 * - Output:
 */

/**
 * Flyweight
 * -
 * - Output:
 */

/**
 * Proxy
 * -
 * - Output:
 */

//==================================================================================================
// Behavioral
//==================================================================================================

/**
 * Chain Of Responsibility
 * -
 * - Output:
 */

/**
 * Command
 * -
 * - Output:
 */

/**
 * Interpreter
 * -
 * - Output:
 */

/**
 * Iterator
 * -
 * - Output:
 */

/**
 * Mediator
 * -
 * - Output:
 */

/**
 * Memento
 * -
 * - Output:
 */

/**
 * Observer
 * -
 * - Output:
 */

/**
 * State
 * -
 * - Output:
 */

/**
 * Strategy
 * -
 * - Output:
 */

/**
 * Template Method
 * -
 * - Output:
 */

/**
 * Visitor
 * -
 * - Output:
 */
