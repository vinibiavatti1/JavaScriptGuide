/**
 * Composite
 *
 * Composes objects into tree structures to represent part-whole hierarchies, letting clients treat
 * individual objects and compositions uniformly. In JavaScript, we can implement this functionally
 * by returning objects that expose a common interface and recursively process nested collections.
 */
const createFile = (name) => ({
    name,
    render(indent = '') {
        console.log(indent + this.name)
    }
})
const createFolder = (name, ...files) => ({
    name,
    files,
    render(indent = '') {
        console.log(indent + this.name)
        this.files.forEach(file => file.render(indent + '  '))
    }
})
const root =
    createFolder('root/',
        createFolder('src/',
            createFile('main.js'),
            createFile('test.js')
        ), createFolder('res/',
            createFile('img.png'),
            createFile('ico.png')
        )
    )
root.render()
// Output:
// root/
//   src/
//     main.js
//     test.js
//   res/
//     img.png
//     ico.png
