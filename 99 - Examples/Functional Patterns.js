/**
 * Functional Design Patterns
 *
 * A single-file reference collection of functional programming patterns in modern JavaScript (ES6+)
 * Focuses on high modularity, pure functions, higher-order compositions, and clear semantic
 * distinctions using minimalist syntax without external dependencies.
 */
import { EventEmitter } from "node:events"

//==================================================================================================
// Creational
//==================================================================================================

/**
 * Factory
 * - Creates and returns a new object instance with default or custom state, hiding initialization
 *   logic.
 * - Output: { items: [], total: 0 }
 */
const createInitialCart = () => ({
    items: [],
    total: 0
})
console.log(createInitialCart())

/**
 * Factory (With Parameters)
 * - Encapsulates object creation logic by accepting input arguments to construct custom instances.
 * - Output: { name: 'John', email: 'john@email.com' }
 */
const createUser = (name, email) => ({
    name,
    email: email.toLowerCase(),
})
console.log(createUser('John', 'John@Email.com'))

/**
 * Factory (With Validations)
 * - Enforces business rules and validation logic prior to instantiating and returning an object.
 * - Output: { name: 'John', email: 'john@email.com' }
 */
const createProfile = (name, email) => {
    if (!email.includes('@')) {
        throw new Error('Invalid email')
    }
    return {
        name,
        email: email.toLowerCase(),
    }
}
console.log(createProfile('John', 'John@Email.com'))

/**
 * Factory (With Dependencies)
 * - Injects external services or configurations into a factory function to create decoupled
 *   modules.
 * - Output: Fetching user... | John
 */
const createUserService = ({ db, logger }) => ({
    findById: (id) => {
        logger.log('Fetching user...')
        return db.getUser(id)
    }
})
const db = { getUser: (id) => 'John' }
const logger = { log: (message) => console.log(message) }
const userService = createUserService({ db, logger })
console.log(userService.findById(1))

/**
 * Factory Registry
 * - Maps specific dynamic keys or roles to factory functions, allowing central execution of
 *   instances.
 * - Output: Form | Enter your name: [_____] | [Submit]
 */
const componentFactory = {
    createInput: (label) => console.log(label, '[_____]'),
    createButton: (label) => console.log(`[${label}]`)
}
const buildForm = (componentFactory) => {
    console.log('Form')
    componentFactory.createInput('Enter your name:')
    componentFactory.createButton('Submit')
}
buildForm(componentFactory)

/**
 * Builder
 * - Constructs complex objects step-by-step through a fluent, chainable interface.
 * - Output: users | [ 'name', 'age' ] | [ 'name', '=', 'John' ]
 */
const createQueryBuilder = (table) => {
    const state = { table, fields: ['*'], where: [] }
    const builder = {
        select: (...fields) => {
            state.fields = fields
            return builder
        },
        where: (column, operator, value) => {
            state.where = [column, operator, value]
            return builder
        },
        build: () => state
    }
    return builder
}
const query = createQueryBuilder('users').select('name', 'age').where('name', '=', 'John').build()
console.log(query.table, query.fields, query.where)

//==================================================================================================
// Transformation
//==================================================================================================

/**
 * Normalizer
 * - Transforms and standardizes object data properties into a predictable and consistent format.
 * - Output: { name: 'John', email: 'john@email.com' }
 */
const normalizeUser = user => ({
    ...user,
    email: user.email.toLowerCase()
})
console.log(normalizeUser({ name: 'John', email: 'JOHN@EMAIL.COM' }))

/**
 * Mapper
 * - Converts and reshapes data structures from one schema or format into another.
 * - Output: { id: 1, name: 'John Doe' }
 */
const toUser = data => ({
    id: data.id,
    name: data.name + ' ' + data.surname
})
console.log(toUser({ id: 1, name: 'John', surname: 'Doe' }))

/**
 * Selector
 * - Extracts a specific nested property or calculated slice of data from a complex object.
 * - Output: John
 */
const selectUserName = data => data?.user?.name
console.log(selectUserName({ user: { name: 'John' } }))

/**
 * Reducer
 * - Calculates and returns a new state object based on the current state and an incoming action
 *   type.
 * - Output: { count: 2 }
 */
const counterReducer = (state, action) => {
    switch (action.type) {
        case 'increment': return { ...state, count: state.count + 1 }
        case 'decrement': return { ...state, count: state.count - 1 }
        default: return state
    }
}
console.log(counterReducer({ count: 1 }, { type: 'increment' }))

/**
 * Resolver
 * - Computes or fetches data dynamically for a requested key or field context, shielding callers
 *   from data retrieval logic.
 * - Note: Commonly used in dependency injection to resolve nested relationships on demand.
 * - Output: { id: 1, name: 'John', posts: [ 'Post 1', 'Post 2' ] }
 */
const resolvers = {
    posts: userId => ['Post 1', 'Post 2']
}
const resolveUserWithPosts = user => ({
    ...user,
    posts: resolvers.posts(user.id)
})
const user = { id: 1, name: 'John' }
console.log(resolveUserWithPosts(user))

//==================================================================================================
// Verification
//==================================================================================================

/**
 * Predicate
 * - Evaluates an input condition and returns a boolean value (true or false).
 * - Output: true
 */
const isValidEmail = email => email.includes('@')
console.log(isValidEmail('john@email.com'))

/**
 * Validator
 * - Asserts that an object satisfies specific domain constraints, throwing an error if invalid.
 * - Output: { email: 'john@email.com' }
 */
const validateUser = user => {
    if (!user.email?.includes('@')) {
        throw new Error('Invalid email')
    }
    return user
}
console.log(validateUser({ email: 'john@email.com' }))

/**
 * Result
 * - Encapsulates successful or failed execution outcomes into an object without throwing errors.
 * - Output: { ok: true, value: 'john@email.com' } | { ok: false, error: 'Invalid email' }
 */
const ok = (value) => ({ ok: true, value })
const err = (error) => ({ ok: false, error })
const parseEmail = (email) => email.includes('@') ? ok(email) : err('Invalid email')
console.log(parseEmail('john@email.com'))
console.log(parseEmail('invalid'))

//==================================================================================================
// Wrappers
//==================================================================================================

/**
 * Decorator
 * - Wraps a target function to dynamically attach additional behavior without modifying its
 *   structure.
 * - Output: Calling function: sum | 8
 */
const withLogging = fn => (...args) => {
    console.log('Calling function:', fn.name)
    return fn(...args)
}
const sum = (x, y) => x + y
const sumWithLogging = withLogging(sum)
console.log(sumWithLogging(3, 5))

/**
 * Guard
 * - Evaluates preconditions or authorization rights before permitting a target function to execute.
 * - Output: Executing delete
 */
const withAdminCheck = (context, fn) => (...args) => {
    if (context.user !== 'admin') {
        throw new Error('Forbidden')
    }
    return fn(...args)
}
const exec = command => {
    console.log('Executing', command)
}
const execAdmin = withAdminCheck({ user: 'admin' }, exec)
execAdmin('delete')

/**
 * Middleware
 * - Intercepts execution flow to apply cross-cutting logic before invoking the next function.
 * - Output: Redirecting to /admin
 */
const authMiddleware = (context, next) => {
    if (!context.authenticated) {
        throw new Error('Forbidden')
    }
    return next()
}
const redirect = url => console.log('Redirecting to', url)
const context = { authenticated: true, user: 'John' }
authMiddleware(context, () => {
    redirect('/admin')
})

/**
 * Adapter
 * - Translates an incompatible or legacy interface into a modern interface expected by client code.
 * - Output: log: Hello World | warn: Hello World
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

/**
 * Memoize
 * - Caches the evaluated results of function calls based on input arguments to optimize repeated
 *   executions.
 * - Output: Computed: 2 | From Cache: 2
 */
const withMemo = fn => {
    const cache = new Map()
    return (...args) => {
        const key = JSON.stringify(args)
        if (cache.has(key)) {
            return cache.get(key)
        }
        const result = fn(...args)
        cache.set(key, result)
        return result
    }
}
const div = (x, y) => x / y
const memoDiv = withMemo(div)
console.log('Computed:', memoDiv(6, 3))
console.log('From Cache:', memoDiv(6, 3))

/**
 * Retry
 * - Re-executes an asynchronous operation up to a maximum limit upon failure.
 * - Output: Attempting... | Attempting... | Success
 */
const withRetry = (fn, retries = 3) => async (...args) => {
    for (let i = 0; i < retries; i++) {
        try {
            console.log('Attempting...')
            return await fn(...args)
        } catch (err) {
            if (i === retries - 1) throw err
        }
    }
}
let attempts = 0
const unstableFetch = async () => {
    attempts++
    if (attempts < 3) throw new Error('Fail')
    return 'Success'
}
const retryFetch = withRetry(unstableFetch, 3)
retryFetch().then(console.log)

/**
 * Debounce
 * - Delays function execution until a specified delay has elapsed since the last call.
 * - Note: Prevents excessive calls during high-frequency events like keypresses or window resizes.
 * - Output: Executed: Search query
 */
const debounce = (fn, delay) => {
    let timeoutId
    return (...args) => {
        clearTimeout(timeoutId)
        timeoutId = setTimeout(() => fn(...args), delay)
    }
}
const search = query => console.log('Executed:', query)
const debouncedSearch = debounce(search, 100)
debouncedSearch('Searc')
debouncedSearch('Search query')

/**
 * Throttle
 * - Ensures a target function executes at most once within a specified time window.
 * - Unlike Debounce which waits for idle time, Throttle enforces a maximum execution rate.
 * - Output: Scroll event handled
 */
const throttle = (fn, limit) => {
    let inThrottle
    return (...args) => {
        if (!inThrottle) {
            fn(...args)
            inThrottle = true
            setTimeout(() => inThrottle = false, limit)
        }
    }
}
const handleScroll = () => console.log('Scroll event handled')
const throttledScroll = throttle(handleScroll, 200)
throttledScroll()
throttledScroll()

//==================================================================================================
// Routing
//==================================================================================================

/**
 * Strategy
 * - Encapsulates interchangeable algorithms into a lookup object, enabling dynamic selection at
 *   runtime.
 * - Output: Processing credit card... | Processing debit card...
 */
const strategies = {
    creditCard: amount => console.log('Processing credit card...'),
    debitCard: amount => console.log('Processing debit card...')
}
const processPayment = (type, amount) => strategies[type]?.(amount)
processPayment('creditCard', 300)
processPayment('debitCard', 250)

/**
 * Dispatcher
 * - Routes events or actions to their corresponding handler functions based on an event type.
 * - Note: Unlike Strategy which provides interchangeable algorithms for a single task, Dispatcher
 *   routes distinct domain commands to their respective actions.
 * - Output: Created | Updated | Deleted
 */
const handlers = {
    create: ({ name }) => console.log('Created'),
    update: ({ id, name }) => console.log('Updated'),
    delete: ({ id }) => console.log('Deleted')
}
const dispatch = (event, data) => handlers[event]?.(data)
dispatch('create', { name: 'John' })
dispatch('update', { id: 1, name: 'Jane' })
dispatch('delete', { id: 2 })

/**
 * Emitter
 * - Publishes events to registered listeners, enabling asynchronous, event-driven communications.
 * - Note: Unlike the classic Observer pattern where subjects hold direct references to observers,
 *   Emitter decouples publishers and subscribers through named event channels.
 * - Output: Order processed: { id: 1, status: 'success' }
 */
const createOrderService = () => {
    const emitter = new EventEmitter()
    return {
        on: (event, handler) => emitter.on(event, handler),
        off: (event, handler) => emitter.off(event, handler),
        processOrder: id => {
            // Process...
            emitter.emit('processed', { id, status: 'success' })
        }
    }
}
const orderService = createOrderService()
const handler = data => console.log('Order processed:', data)
orderService.on('processed', handler)
orderService.processOrder(1)
orderService.off('processed', handler)

//==================================================================================================
// Composition
//==================================================================================================

/**
 * Currying
 * - Transforms a multi-argument function into a chain of single-argument (unary) functions.
 * - Note: Converts f(a, b, c) into f(a)(b)(c). Enables partial application as a byproduct,
 *   requiring strictly one argument per function step.
 * - Output: [ERROR] [Main.js] Application Shutdown
 */
const log = level => module => message => console.log(`[${level}] [${module}] ${message}`)
log('ERROR')('Main.js')('Application Shutdown')

/**
 * Partial Application
 * - Binds a subset of function arguments upfront, returning a new function that accepts the rest.
 * - Note: Unlike Currying (which transforms function arity into unary steps), Partial Application
 *   pre-fills fixed arguments without forcing the function into single-argument steps.
 * - Output: [ERROR] [Main.js] Application Shutdown
 */
const logError = log('ERROR')
const logMainError = logError('Main.js')
logMainError('Application Shutdown')

/**
 * Pipe / Compose
 * - Chains multiple single-argument functions sequentially, passing the output of each into the
 *   next.
 * - Note: Pipe evaluates left-to-right using reduce. Compose evaluates right-to-left (matching
 *   mathematical f(g(x))) by replacing reduce with reduceRight.
 * - Output: HELLO WORLD
 */
const pipe = (...fns) => data => fns.reduce((acc, fn) => fn(acc), data)
const trimHandler = data => data.trim()
const toUpperHandler = data => data.toUpperCase()
const pipeline = pipe(trimHandler, toUpperHandler)
console.log(pipeline(' hello world '))

/**
 * Tap
 * - Intercepts a value in a pipeline to execute side-effects without mutating the value.
 * - Useful for debugging or logging intermediate data within a Pipe/Compose chain.
 * - Output: Logging step: HELLO | HELLO WORLD
 */
const tap = fn => value => {
    fn(value)
    return value
}
const logStep = val => console.log('Logging step:', val)
const processText = pipe(
    toUpperHandler,
    tap(logStep),
    val => val + ' WORLD'
)
console.log(processText('hello'))

/**
 * Thunk
 * - Wraps an expression or function call inside a zero-argument function to delay its execution.
 * - Note: Defers execution until the thunk is explicitly invoked, enabling lazy evaluation.
 * - Output: importing data
 */
const getData = () => console.log('importing data')
const createThunk = () => () => getData()
const compute = createThunk()
compute()

/**
 * Trampoline
 * - Converts recursive functions into iterative loops to prevent stack overflow errors.
 * - Note: Requires the recursive function to return thunks instead of direct recursive calls.
 * - Output: Done
 */
const trampoline = fn => (...args) => {
    let result = fn(...args)
    while (typeof result === 'function') {
        result = result()
    }
    return result
}
const countDown = n => n <= 0 ? 'Done' : () => countDown(n - 1)
const safeCountDown = trampoline(countDown)
console.log(safeCountDown(1000000))
