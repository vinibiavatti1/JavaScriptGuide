/**
 * Composite
 *
 * Composes objects into tree structures to represent part-whole hierarchies. Composite lets clients
 * treat individual objects and compositions of objects uniformly through a common component
 * interface.
 */

/**
 * Abstract Component
 * - Defines the interface for all objects in the composition, including leaves and composites.
 */
class AbstractElement {
    render() {
        throw new Error('not implemented')
    }
}

/**
 * Leaf
 * - Represents leaf objects in the composition with no children. Defines behavior for primitive
 *   units.
 */
class TextElement extends AbstractElement {
    render() {
        console.log('<text />')
    }
}
class ImgElement extends AbstractElement {
    render() {
        console.log('<img />')
    }
}

/**
 * Composite
 * - Stores child components and implements component interface behavior by delegating work to
 *   children.
 */
class GroupElement extends AbstractElement {
    #graphics

    constructor(...graphics) {
        super()
        this.#graphics = graphics
    }

    render() {
        console.log('<group>')
        this.#graphics.forEach(graphic => graphic.render())
        console.log('</group>')
    }
}

/**
 * Client
 * - Manipulates objects in the hierarchy through the abstract component interface.
 */
class Document {
    render(...graphics) {
        graphics.forEach(graphic => graphic.render())
    }
}

/**
 * Example
 * - Renders a nested tree structure of individual elements and composite groups uniformly.
 */
const doc = new Document()
doc.render(
    new GroupElement(
        new GroupElement(
            new TextElement(),
            new ImgElement(),
        ),
        new GroupElement(
            new TextElement(),
            new ImgElement(),
        )
    )
)
// Output:
// <group>
//     <group>
//         <text />
//         <img />
//     </group>
//     <group>
//         <text />
//         <img />
//     </group>
// </group>
