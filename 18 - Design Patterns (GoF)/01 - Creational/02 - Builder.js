/**
 * Builder
 *
 * Separates the construction of a complex object from its representation. In JavaScript, we can
 * implement this functionally using fluent factory functions that chain method calls to mutate
 * or accumulate internal state.
 *
 * Output:
 * Table: users
 * Fields: [ 'name', 'age' ]
 * Where: [ 'name', '=', 'John' ]
 */
const createQueryBuilder = table => {
    const state = {
        table,
        fields: ['*'],
        where: []
    }
    const builder = {
        select: (...fields) => {
            state.fields = fields
            return builder
        },
        where: (column, operator, value) => {
            state.where = [column, operator, value]
            return builder
        },
        build: () => {
            return state
        }
    }
    return builder
}
const query = createQueryBuilder('users')
    .select('name', 'age')
    .where('name', '=', 'John')
    .build()
console.log('Table:', query.table)
console.log('Fields:', query.fields)
console.log('Where:', query.where)
