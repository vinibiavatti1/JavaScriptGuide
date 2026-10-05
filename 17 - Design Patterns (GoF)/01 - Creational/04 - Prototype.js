/**
 * Prototype
 *
 * Specifies the kinds of objects to create using a prototypical instance, and creates new objects
 * by copying this prototype. In JavaScript, 'structuredClone()' creates a deep clone of properties
 * but strips the prototype chain; combining it with 'Object.assign' preserves both state and class
 * instance methods.
 */

/**
 * Abstract Prototype
 * - Base class defining object properties and declaring the interface for cloning operations.
 */
class AbstractButton {
    label = ''
    edges = ['', '']

    constructor(label, edges) {
        this.label = label
        this.edges = edges
    }

    clone() {
        throw new Error('not implemented')
    }

    render() {
        return `${this.edges[0]}${this.label}${this.edges[1]}`
    }

    withLabel(label) {
        this.label = label
        return this
    }
}

/**
 * Concrete Prototype
 * - Implements the clone method by merging structured property clones into a new instance.
 */
class Button extends AbstractButton {
    constructor(label, edges) {
        super(label, edges)
    }

    clone() {
        return Object.assign(new Button(), structuredClone(this))
    }
}

/**
 * Client
 * - Encapsulates form creation logic using existing button instances as prototypes to create
 *   variants.
 */
class Form {
    showSubmitDialog() {
        const yesBtn = new Button('Yes', ['(', ')'])
        const noBtn = yesBtn.clone().withLabel('No')
        const cancelBtn = yesBtn.clone().withLabel('Cancel')
        console.log('Submit?', yesBtn.render(), noBtn.render(), cancelBtn.render())
    }
}

/**
 * Example
 * - Clones a prototype button instance to create variations with modified labels.
 */
const form = new Form()
form.showSubmitDialog()
// Output: Submit? (Yes) (No) (Cancel)
