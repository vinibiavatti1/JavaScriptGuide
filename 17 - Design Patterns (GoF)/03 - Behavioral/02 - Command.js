/**
 * Command
 *
 * Encapsulates a request as an object or function, letting you parameterize clients with different
 * requests, queue or log operations, and support undoable actions. In JavaScript, we can implement
 * this functionally using first-class functions or simple action objects with execute and undo
 * methods.
 */
const editor = {
    openFile: () => console.log('File Opened'),
    saveFile: () => console.log('File Saved'),
    closeFile: () => console.log('File Closed'),
}
const openCommand = () => editor.openFile()
const saveCommand = () => editor.saveFile()
const closeCommand = () => editor.closeFile()
const createToolBar = (actions = {}) => ({
    click: (name) => actions[name]?.()
})
const toolBar = createToolBar({
    open: openCommand,
    save: saveCommand,
    close: closeCommand
})
toolBar.click('open')  // Output: File Opened
toolBar.click('save')  // Output: File Saved
toolBar.click('close') // Output: File Closed
