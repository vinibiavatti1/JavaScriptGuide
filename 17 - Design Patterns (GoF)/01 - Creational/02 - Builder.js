/**
 * Builder
 *
 * Separates the construction of a complex object from its representation, allowing the same
 * construction process to create different representations. In JavaScript, method chaining (fluent
 * interface) combined with private fields provides a clean implementation.
 */

/**
 * Product
 * - Represents the complex object under construction containing configurable properties.
 */
class Button {
    constructor(label, edges) {
        this.label = label
        this.edges = edges
    }

    render() {
        console.log(`${this.edges[0]}${this.label}${this.edges[1]}`)
    }
}

/**
 * Abstract Builder
 * - Interface defining step-by-step construction methods for the product.
 */
class AbstractButtonBuilder {
    withLabel(label) {
        throw new Error('not implemented')
    }

    withEdges(edges) {
        throw new Error('not implemented')
    }

    build() {
        throw new Error('not implemented')
    }
}

/**
 * Concrete Builder
 * - Implements the construction steps and maintains the intermediate state using private fields.
 */
class ButtonBuilder {
    #label = ''
    #edges = ['', '']

    withLabel(label) {
        this.#label = label
        return this
    }

    withEdges(left, right) {
        this.#edges = [left, right]
        return this
    }

    build() {
        return new Button(this.#label, this.#edges)
    }
}

/**
 * Director
 * - Defines the order in which to execute building steps to reuse specific configurations.
 */
class ButtonDirector {
    #buttonBuilder

    constructor(buttonBuilder) {
        this.#buttonBuilder = buttonBuilder
    }

    buildFlatButton(label) {
        return this.#buttonBuilder
            .withLabel(label)
            .withEdges('[', ']')
            .build()
    }

    buildRoundButton(label) {
        return this.#buttonBuilder
            .withLabel(label)
            .withEdges('(', ')')
            .build()
    }
}

/**
 * Example
 * - Constructs custom objects via Director presets and logs rendered output.
 */
const buttonBuilder = new ButtonBuilder()
const buttonDirector = new ButtonDirector(buttonBuilder)
const flatButton = buttonDirector.buildFlatButton('Click')
const roundButton = buttonDirector.buildRoundButton('Click')
flatButton.render()  // Output: [Click]
roundButton.render() // Output: (Click)
