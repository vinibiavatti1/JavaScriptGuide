/**
 * Switch (Conditional Statement)
 *
 * Evaluates an expression, matching its value against a series of case clauses,
 * and executes the corresponding statements until a break or the end of the block is reached.
 */

/**
 * Switch
 * - Compares the expression strictly (===) against case values and executes the matching block.
 * - Output: success
 */
let httpStatus = 200
switch (httpStatus) {
    case 200:
        console.log('success')
        break
    case 500:
        console.log('error')
        break
}

/**
 * Switch With Multiple Cases (Grouped)
 * - Stacks multiple case clauses together to share the same execution block.
 * - Output: error
 */
httpStatus = 500
switch (httpStatus) {
    case 200:
        console.log('success')
        break
    case 300:
    case 400:
    case 500:
        console.log('error')
        break
}

/**
 * Switch With Fall-Through
 * - Demonstrates intentional fall-through where omitting breaks allows execution to cascade down
 *   into subsequent case blocks.
 * - Output: error
 */
httpStatus = 400
switch (httpStatus) {
    case 200:
        console.log('success')
        break
    case 300:
    case 400:
    case 500:
        console.log('error')
        break
}

/**
 * Switch With Default
 * - Acts as a fallback clause executed if none of the explicit case values match.
 * - Output: unknown
 */
httpStatus = 300
switch (httpStatus) {
    case 200:
        console.log('success')
        break
    case 500:
        console.log('error')
        break
    default:
        console.log('unknown')
}

/**
 * Switch With Block-Scoped Cases
 * - Wraps case bodies in curly braces to safely declare block-scoped variables (let/const)  without
 *   colliding with other cases.
 * - Output:
 */
httpStatus = 500
switch (role) {
    case 200: {
        let message = 'success'
        console.log(message)
        break
    }
    case 500: {
        let message = 'error' // Avoids redeclaration conflict
        console.log(message)
        break
    }
}
