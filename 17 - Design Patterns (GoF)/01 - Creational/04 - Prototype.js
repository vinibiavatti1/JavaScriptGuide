/**
 * Prototype
 *
 * Creates new objects by cloning an existing prototype object. In JavaScript, this is natively
 * supported through prototypal inheritance using 'Object.create' to delegate property lookups
 * without needing class inheritance.
 */
const buttonPrototype = {
    label: 'Click',
    render() {
        return `(${this.label})`
    }
}
const createButtonFromPrototype = (proto, overrides = {}) => {
    return Object.assign(Object.create(proto), overrides)
}
const yesButton = createButtonFromPrototype(buttonPrototype, { label: 'Yes' })
const noButton = createButtonFromPrototype(buttonPrototype, { label: 'No' })
console.log('Proceed?', yesButton.render(), noButton.render())
// Output: Proceed? (Yes) (No)
