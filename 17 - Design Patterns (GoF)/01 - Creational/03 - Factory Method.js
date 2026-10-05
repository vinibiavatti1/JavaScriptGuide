/**
 * Factory Method
 *
 * Defines an interface for creating an object, but lets subclasses decide which class to
 * instantiate. Factory Method allows a class to defer instantiation to subclasses. In JavaScript,
 * this is achieved by declaring an abstract creation method in a base class that concrete
 * subclasses override.
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
 * - Concrete implementations of the button product with flat and rounded visual representations.
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
 * Abstract Creator
 * - Declares the factory method 'createButton' and relies on it inside core business logic methods.
 */
class AbstractForm {
    createButton() {
        throw new Error('not implemented')
    }

    showSubmitDialog() {
        const button = this.createButton()
        console.log('Click to submit:', button.render())
    }
}

/**
 * Concrete Creator
 * - Overrides the factory method to instantiate and return specific concrete products.
 */
class FlatForm extends AbstractForm {
    createButton() {
        return new FlatButton()
    }
}
class RoundForm extends AbstractForm {
    createButton() {
        return new RoundButton()
    }
}

/**
 * Example
 * - Instantiates concrete creators and triggers core business operations that use factory methods.
 */
const flatForm = new FlatForm()
const roundForm = new RoundForm()
flatForm.showSubmitDialog()  // Output: Click to submit: [Confirm]
roundForm.showSubmitDialog() // Output: Click to submit: (Confirm)
