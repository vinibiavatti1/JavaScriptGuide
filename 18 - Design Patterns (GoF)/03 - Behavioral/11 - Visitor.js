/**
 * Visitor
 *
 * Separates an algorithm from an object structure on which it operates, allowing new operations to
 * be added without modifying the structures. In JavaScript, we can implement this functionally by
 * defining operations as lookup tables of functions mapped to element types or tags.
 *
 * Output:
 * Export XML: <text>Hello</text> <img src="a.png"/>
 * Export JSON: {"text":"Hello"} {"img":"a.png"}
 */
const createTextElement = text => ({ type: 'text', text })
const createImageElement = url => ({ type: 'img', url })
const xmlVisitor = {
    text: node => '<text>' + node.text + '</text>',
    img: node => '<img src="' + node.url + '"/>'
}
const jsonVisitor = {
    text: node => '{"text":"' + node.text + '"}',
    img: node => '{"img":"' + node.url + '"}'
}
const visit = (elements, visitor) => elements.map(node => visitor[node.type](node)).join(' ')
const document = [createTextElement('Hello'), createImageElement('a.png')]
console.log('Export XML:', visit(document, xmlVisitor))
console.log('Export JSON:', visit(document, jsonVisitor))
