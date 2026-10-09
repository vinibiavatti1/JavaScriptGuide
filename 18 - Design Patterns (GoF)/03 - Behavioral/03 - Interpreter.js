/**
 * Interpreter
 *
 * Defines a grammatical representation for a language along with an interpreter that uses the
 * representation to evaluate expressions. Nodes are constructed via composite factory functions
 * that share a unified AST node interface.
 *
 * Output: (((a*a)+(b*b))+(2*(a*b))) | 100
 */
const varExp = name => ({
    evaluate: ctx => ctx[name],
    toString: () => name
})
const constExp = value => ({
    evaluate: ctx => value,
    toString: () => value.toString()
})
const addExp = (exp1, exp2) => ({
    evaluate: ctx => exp1.evaluate(ctx) + exp2.evaluate(ctx),
    toString: () => '(' + exp1.toString() + '+' + exp2.toString() + ')'
})
const mulExp = (exp1, exp2) => ({
    evaluate: ctx => exp1.evaluate(ctx) * exp2.evaluate(ctx),
    toString: () => '(' + exp1.toString() + '*' + exp2.toString() + ')'
})
const evaluator = addExp(
    addExp(
        mulExp(
            varExp('a'),
            varExp('a')
        ),
        mulExp(
            varExp('b'),
            varExp('b')
        )
    ),
    mulExp(
        constExp(2),
        mulExp(
            varExp('a'),
            varExp('b')
        )
    )
)
const ctx = { a: 5, b: 5 }
const result = evaluator.evaluate(ctx)
console.log(evaluator.toString())
console.log(result)
