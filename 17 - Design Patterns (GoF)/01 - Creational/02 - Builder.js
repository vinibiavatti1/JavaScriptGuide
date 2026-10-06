/**
 * Builder
 *
 * Separates the construction of a complex object from its representation. In JavaScript, we can
 * implement this functionally using fluent factory functions that chain method calls to mutate
 * or accumulate internal state.
 */
const createQueryBuilder = (table) => {
    const state = {
        table,
        fields: ['*'],
        where: []
    }
    return {
        select(...fields) {
            state.fields = fields
            return this
        },
        where(column, operator, value) {
            state.where = [column, operator, value]
            return this
        },
        build() {
            return state
        }
    }
}
const query = createQueryBuilder('users')
    .select('name', 'age')
    .where('name', '=', 'John')
    .build()
console.log(query.table, query.fields, query.where)
// Output: users [ 'name', 'age' ] [ 'name', '=', 'John' ]
