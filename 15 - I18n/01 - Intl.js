/**
 * Intl (Internationalization - I18n)
 *
 * Provides language-sensitive string comparison, number formatting, date/time formatting, relative
 * time formatting, list formatting, and locale manipulation using the ECMAScript I18n API.
 */

//==================================================================================================
// Number Formatters
//==================================================================================================

/**
 * Decimal
 * - Formats numbers as standard decimal values using localized digit grouping and decimal
 *   separators.
 * - Output: 1,234,567.89
 */
let formatter = new Intl.NumberFormat('en-US', {
    style: 'decimal'
})
console.log(formatter.format(1234567.89))

/**
 * Currency
 * - Formats numbers as monetary amounts matching specific currency display rules and symbols.
 * - Output: €1,234.56
 */
formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'EUR'
})
console.log(formatter.format(1234.56))

/**
 * Percent
 * - Formats numbers as percentages, automatically multiplying the input value by 100.
 * - Output: 75%
 */
formatter = new Intl.NumberFormat('en-US', {
    style: 'percent'
})
console.log(formatter.format(0.75))

/**
 * Unit
 * - Formats numbers with localized physical measurement units (e.g. celsius, megabyte,
 *   mile-per-hour).
 * - Output: 25°C
 */
formatter = new Intl.NumberFormat('en-US', {
    style: 'unit',
    unit: 'celsius'
})
console.log(formatter.format(25))

/**
 * Compact
 * - Formats large numbers using human-readable short or long compact notation.
 * - Output: 1.2M
 */
formatter = new Intl.NumberFormat('en-US', {
    notation: 'compact'
})
console.log(formatter.format(1200000))

//==================================================================================================
// Date Time Formatters
//==================================================================================================

/**
 * Date Time Formatter
 * - Formats Temporal or Date objects into localized date and time string representations.
 * - Output: Sunday, October 4, 2026
 */
formatter = new Intl.DateTimeFormat('en-US', {
    dateStyle: 'full'
})
console.log(formatter.format(Temporal.PlainDate.from('2026-10-04')))

/**
 * Relative Time Formatter
 * - Formats time differences into localized human-readable relative duration phrases.
 * - Output: 2 days ago
 */
formatter = new Intl.RelativeTimeFormat('en-US', {
    numeric: 'auto'
})
console.log(formatter.format(-2, 'day'))

//==================================================================================================
// List Formatters
//==================================================================================================

/**
 * List Formatter
 * - Joins arrays of strings into localized conjunction ('and') or disjunction ('or') lists.
 * - Output: Apple, Banana, and Orange
 */
formatter = new Intl.ListFormat('en-US', {
    style: 'long',
    type: 'conjunction'
})
console.log(formatter.format(['Apple', 'Banana', 'Orange']))

//==================================================================================================
// Intl Utilities
//==================================================================================================

/**
 * Collator
 * - Compares strings according to locale collation rules (e.g. case-insensitive or accent sorting).
 * - Note: Options like sensitivity: 'base' or numeric: true alter comparison behavior.
 * - Output: [ 'apple', 'Banana', 'cherry' ]
 */
const collator = new Intl.Collator('pt-BR', { sensitivity: 'base' })
const words = ['Zebra', 'Água', 'Azeite']
console.log(words.sort(collator.compare))

/**
 * Plural Rules
 * - Selects the appropriate plural category keyword (e.g. 'one', 'other') based on locale rules.
 * - Output: one | other
 */
const pluralRules = new Intl.PluralRules('en-US')
console.log(pluralRules.select(1), pluralRules.select(5))

/**
 * Display Names
 * - Translates region, language, or currency codes into localized human-readable display names.
 * - Output: United States | Brazil
 */
const displayNames = new Intl.DisplayNames('en-US', { type: 'region' })
console.log(displayNames.of('US'), displayNames.of('BR'))

/**
 * Segmenter
 * - Splits strings into meaningful segments (graphemes, words, or sentences) according to locale.
 * - Output: [ 'Hello World!', 'How are you?' ]
 */
const segmenter = new Intl.Segmenter('en-US', { granularity: 'sentence' })
const text = "Hello World! How are you?"
const sentences = [...segmenter.segment(text)].map(word => word.segment.trim())
console.log(sentences)

/**
 * Locale
 * - Parses and manipulates BCP 47 locale identifiers to extract language, region, and script.
 * - Output: en | US
 */
const locale = new Intl.Locale('en-US')
console.log(locale.language, locale.region)

/**
 * Get Canonical Locales
 * - Validates and canonicalizes BCP 47 language tags, correcting casing and eliminating duplicates.
 * - Note: Throws a RangeError if any provided tag is syntactically invalid.
 * - Output: [ 'en-US' ]
 */
const canonicalLocales = Intl.getCanonicalLocales('en-us')
console.log(canonicalLocales)

/**
 * Supported Values Of
 * - Returns an array of supported values for currencies, time zones, calendars, and units.
 * - Output: [ 'acre', 'bit', 'byte', 'celsius', 'centimeter', 'day', ... ]
 */
const supportedCollation = Intl.supportedValuesOf('unit')
console.log(supportedCollation)
