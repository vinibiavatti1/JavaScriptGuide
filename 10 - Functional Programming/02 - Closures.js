/**
 * Closures
 *
 * A closure is a fundamental runtime behavior in JavaScript where an inner function retains access
 * to its outer (lexical) scope's variables, even after the outer function has finished executing.
 *
 * The example below shows a function returning an anonymous function that increments and logs
 * 'count'. Even though 'createCounter()' has finished executing, the returned inner function holds
 * a private reference to 'count'. The JS Garbage Collector cannot free 'count' because the closure
 * maintains a live binding to it, preserving its state across multiple calls.
 */
const createCounter = () => {
    let count = 0 // Enclosed outer variable (persists in memory via closure)
    return {
        increment: () => console.log(++count),
        decrement: () => console.log(--count),
    }
}
const counter = createCounter()
counter.increment() // Output: 1
counter.increment() // Output: 2
counter.decrement() // Output: 1
