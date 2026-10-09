/**
 * State
 *
 * Allows an object to alter its behavior when its internal state changes. In JavaScript, we can
 * implement this functionally by delegating behavior to interchangeable state handler objects or
 * transition functions inside a closure context.
 *
 * Output:
 * Draft: Document submitted for review
 * Moderation: Document published successfully
 * Published: Cannot edit published document
 */
const createDocument = () => {
    const states = {
        draft: {
            publish: () => {
                state = states.moderation
                console.log('Draft: Document submitted for review')
            }
        },
        moderation: {
            publish: () => {
                state = states.published
                console.log('Moderation: Document published successfully')
            }
        },
        published: {
            publish: () => console.log('Published: Cannot edit published document')
        }
    }
    let state = states.draft
    return {
        publish: () => state.publish()
    }
}
const doc = createDocument()
doc.publish()
doc.publish()
doc.publish()
