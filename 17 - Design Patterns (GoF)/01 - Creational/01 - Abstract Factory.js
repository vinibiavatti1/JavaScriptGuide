/**
 * Abstract Factory
 *
 * Provides an interface for creating families of related or dependent objects without specifying
 * their concrete classes. In JavaScript, ES6 classes with throw-on-call base methods are used to
 * enforce abstract interfaces.
 */

/**
 * Abstract Product
 * - Base class defining the product interface for button components.
 */
class AbstractButton {
    render() {
        throw new Error('not implemented')
    }
}

/**
 * Concrete Product
 * - Concrete implementations of the Button interface for flat and rounded visual styles.
 */
class FlatButton extends AbstractButton {
    render() {
        return '[Confirm]'
    }
}
class RoundButton extends AbstractButton {
    render() {
        return '(Confirm)'
    }
}

/**
 * Abstract Factory
 * - Interface declaring creation methods for each component type in the family.
 */
class AbstractComponentFactory {
    createButton() {
        throw new Error('not implemented')
    }
}

/**
 * Concrete Factory
 * - Instantiates concrete products corresponding to a specific design theme or family.
 */
class FlatComponentFactory extends AbstractComponentFactory {
    createButton() {
        return new FlatButton()
    }
}
class RoundComponentFactory extends AbstractComponentFactory {
    createButton() {
        return new RoundButton()
    }
}

/**
 * Client
 * - Encapsulates frame UI logic and interacts exclusively with component factory interfaces.
 */
class Form {
    #componentFactory

    constructor(componentFactory) {
        this.#componentFactory = componentFactory
    }

    showSubmitDialog() {
        const button = this.#componentFactory.createButton()
        console.log('Click to submit:', button.render())
    }
}

/**
 * Example
 * - Demonstrates creating dynamic UI frames bound to distinct UI component themes.
 */
const flatForm = new Form(new FlatComponentFactory())
const roundForm = new Form(new RoundComponentFactory())
flatForm.showSubmitDialog()  // Output: Click to submit: [Confirm]
roundForm.showSubmitDialog() // Output: Click to submit: (Confirm)
