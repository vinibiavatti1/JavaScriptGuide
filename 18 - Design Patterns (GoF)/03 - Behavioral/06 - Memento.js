/**
 * Memento
 *
 * Captures and externalizes an object's internal state without violating encapsulation, allowing
 * the object to be restored to this state later. In JavaScript, we can implement this functionally
 * using immutable memento snapshots managed by a closure-based caretaker history.
 *
 * Output:
 * (empty) | (empty)
 * Memento Design Pattern | The Memento pattern is a design pattern that enables undo mechanisms!
 * Memento | The Memento pattern is a design pattern
 * (empty) | (empty)
 */
const createTextEditor = () => {
    let title = '(empty)'
    let content = '(empty)'
    return {
        setTitle: (newTitle) => { title = newTitle },
        setContent: (newContent) => { content = newContent },
        append: (text) => { content += text },
        save: () => Object.freeze({ title, content }),
        restore: (snapshot) => {
            title = snapshot.title
            content = snapshot.content
        },
        print: () => console.log(title + ' | ' + content)
    }
}
const createTextEditorHistory = (editor) => {
    const history = []
    return {
        save: () => history.push(editor.save()),
        undo: () => {
            if (history.length === 0) return
            editor.restore(history.pop())
        }
    }
}
const editor = createTextEditor()
const history = createTextEditorHistory(editor)
editor.print()
history.save()
editor.setTitle('Memento')
editor.setContent('The Memento pattern is a design pattern')
history.save()
editor.setTitle('Memento Design Pattern')
editor.append(' that enables undo mechanisms!')
editor.print()
history.undo()
editor.print()
history.undo()
editor.print()
