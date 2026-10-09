/**
 * Strategy
 *
 * Defines a family of algorithms, encapsulates each one, and makes them interchangeable. In
 * JavaScript, we can implement this functionally by passing strategy functions directly or
 * selecting them from a lookup table inside a closure context.
 *
 * Output:
 * Standard shipping: 10
 * Express shipping: 25
 */
const shippingStrategies = {
    standard: weight => weight * 2,
    express: weight => weight * 5 + 10,
    free: () => 0
}
const createShippingCalculator = (strategy = shippingStrategies.standard) => {
    let currentStrategy = strategy
    return {
        setStrategy: newStrategy => { currentStrategy = newStrategy },
        calculate: weight => currentStrategy(weight)
    }
}
const calculator = createShippingCalculator()
console.log('Standard shipping:', calculator.calculate(5))
calculator.setStrategy(shippingStrategies.express)
console.log('Express shipping:', calculator.calculate(5))
