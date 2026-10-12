/**
 * Enums
 *
 * Enums represent a discrete set of named constant values. While JavaScript does not have native
 * enum syntax, frozen objects combined with JSDoc annotations provide type-safe enumerations with
 * autocomplete and compile-time validation.
 */
const Colors = Object.freeze({
    RED: '#ff0000',
    GREEN: '#00ff00',
    BLUE: '#0000ff',
})
