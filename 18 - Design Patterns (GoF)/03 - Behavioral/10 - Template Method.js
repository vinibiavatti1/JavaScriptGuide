/**
 * Template Method
 *
 * Defines the skeleton of an algorithm in an operation, deferring some steps to client code. In
 * JavaScript, we can implement this functionally by accepting step functions as arguments or
 * configuration objects inside a higher-order pipeline function.
 *
 * Output:
 * [JSON] Parsing JSON data... | Saving to DB: { user: 'Vini' }
 * [CSV] Parsing CSV rows... | Saving to DB: { user: 'Vini' }
 */
const createDataProcessor = parseStep => {
    const read = () => 'raw_data'
    const save = data => console.log('Saving to DB:', data)
    return {
        process: () => {
            const raw = read()
            const parsed = parseStep(raw)
            save(parsed)
        }
    }
}
const jsonProcessor = createDataProcessor(raw => {
    console.log('[JSON] Parsing JSON data...')
    return { user: 'Vini' }
})
const csvProcessor = createDataProcessor(raw => {
    console.log('[CSV] Parsing CSV rows...')
    return { user: 'Vini' }
})
jsonProcessor.process()
csvProcessor.process()
