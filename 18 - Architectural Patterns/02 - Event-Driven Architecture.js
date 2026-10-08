/**
 * Event-Driven Architecture (EDA)
 *
 * An architectural pattern where system components communicate asynchronously by producing and
 * consuming events, decoupling the event producer from event consumers.
 *
 * Diagram:
 * Request -> Controller -> (Async Event) -> Handlers -> Repository -> Database
 *
 * Why use it:
 * - Decouples secondary side-effects (notifications, analytics) from core API workflows.
 * - Improves REST API response times by handling background tasks asynchronously.
 * - Allows adding new features (e.g., SMS alerts) without modifying existing service code.
 */

import { EventEmitter } from "node:events"

//==================================================================================================
// Layers
//==================================================================================================

/**
 * Presentation Layer
 * -
 */
const createUserController = ({ emitter }) => ({
    handleCreateUser: req => {
        emitter.emit('user.creation.requested', req.body)
        return { status: 202, body: 'Accepted' }
    }
})

/**
 * Event Handlers Layer
 * -
 */
const createUserHandler = ({ emitter, userRepository }) => {
    emitter.on('user.creation.requested', userData => {
        if (!userData.name) {
            throw new Error('Name is required')
        }
        const user = userRepository.save(userData)
        emitter.emit('user.creation.completed', user)
        return user
    })
}
const createAuditHandler = ({ emitter }) => {
    emitter.on('user.creation.requested', userData => {
        console.log('Log: User creation requested:', userData.name)
    })
    emitter.on('user.creation.completed', user => {
        console.log('Log: User creation completed', user.id)
    })
}

/**
 * Persistence Layer
 * -
 */
const createUserRepository = ({ db }) => ({
    save: userData => db.insert('users', userData)
})

/**
 * Database Layer
 * -
 */
const createDatabase = () => ({
    insert: (table, data) => ({ id: 1, ...data })
})

//==================================================================================================
// Application
//==================================================================================================

/**
 * Composition Root
 * - Instantiates layers from the bottom up and wires dependencies explicitly via closure injection.
 */
const emitter = new EventEmitter()
const db = createDatabase()
const userRepository = createUserRepository({ db })
const userController = createUserController({ emitter })

/**
 * Register Handlers
 * -
 */
const userHandler = createUserHandler({ emitter, userRepository })
const auditHandler = createAuditHandler({ emitter })

/**
 * Request Execution
 * -
 * - Output:
 *   { status: 202, body: 'Accepted' }
 *   Log: User creation requested: John Doe
 *   Log: User creation completed 1
 */
const req = { body: { name: 'John Doe' } }
const res = userController.handleCreateUser(req)
console.log('Response:', res)
