/**
 * Closures
 *
 * A closure is a fundamental runtime behavior in JavaScript where an inner function retains access
 * to its outer (lexical) scope's variables, even after the outer function has finished executing.
 *
 * The example below shows a function returning an anonymous function that increments and logs
 * 'count'. Even though 'createCounter()' has finished executing, the returned inner function holds
 * a private reference to 'count'. The JS Garbage Collector cannot free 'count' because the closure
 * maintains a live binding to it, preserving its state across multiple calls (1 -> 2 -> 3).
 *
 * Output: 1 | 2 | 3
 */
function createCounter() {
    let count = 0 // Enclosed outer variable (persists in memory via closure)
    return function () {
        count++
        console.log(count)
    }
}

const counter = createCounter()
counter() // Increments 'count' to 1
counter() // Increments 'count' to 2
counter() // Increments 'count' to 3
