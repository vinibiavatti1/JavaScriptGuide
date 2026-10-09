/**
 * Abstract Factory
 *
 * Provides a way to create families of related objects without specifying their concrete classes.
 * In JavaScript, we can implement this functionally by passing factory objects or functions as
 * arguments.
 *
 * Output:
 * Enter your name: [______] [Submit]
 * Enter your name: (______) (Submit)
 */
const flatComponentFactory = {
    createInput: (label) => `${label}: [______]`,
    createButton: (label) => `[${label}]`
}
const roundComponentFactory = {
    createInput: (label) => `${label}: (______)`,
    createButton: (label) => `(${label})`
}
const renderForm = (componentFactory) => {
    console.log(
        componentFactory.createInput('Enter your name'),
        componentFactory.createButton('Submit')
    )
}
renderForm(flatComponentFactory)
renderForm(roundComponentFactory)
