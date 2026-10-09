/**
 * Factory Method
 *
 * Provides an interface for creating objects, allowing the specific type of object to be decided
 * at runtime. In JavaScript, we can implement this functionally using factory functions that map
 * types to specific creation logic.
 *
 * Output: Are you sure? (Yes) (No)
 */
const createButton = (label, type) => {
    const types = {
        flat: (x) => `[${x}]`,
        round: (x) => `(${x})`,
    }
    return types[type](label)
}
const renderDialog = (message, type) => console.log(
    message, createButton('Yes', type), createButton('No', type)
)
renderDialog('Are you sure?', 'round')
