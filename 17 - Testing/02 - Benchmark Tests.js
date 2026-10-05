/**
 * Benchmark Tests
 *
 * Measuring performance in Node.js can be achieved using native utilities like 'console.time'
 * for quick measurements, or the Performance API ('node:perf_hooks') via 'performance.now()' and
 * 'performance.mark()' for high-precision timer measurements in milliseconds and nanoseconds.
 */
import { performance } from "node:perf_hooks";

/**
 * Basic Benchmark
 * - Measures code execution duration using high-level console timer methods.
 * - Output: Sqrt: 1.042ms
 */
console.time('Sqrt')
for (let i = 0; i < 1_000_000; i++) {
    Math.sqrt(i)
}
console.timeEnd('Sqrt')

/**
 * Performance API
 * - Sets named markers in the performance timeline and creates duration measurements between them.
 * - Note: The 'duration' and 'startTime' properties are measured in high-precision milliseconds.
 * - Output:
 *   PerformanceMeasure {
 *      name: 'Sqrt',
 *      entryType: 'measure',
 *      startTime: 18.045,
 *      duration: 13.314899999999998,
 *      detail: null
 *   }
 */
performance.mark('A')
for (let i = 0; i < 1_000_000; i++) {
    Math.sqrt(i)
}
performance.mark('B')
performance.measure('Sqrt', 'A', 'B')
performance.getEntriesByName('Sqrt').forEach(entry => console.log(entry))
