/**
 * Temporal
 *
 * A modern replacement for JavaScript's legacy Date object. Provides explicit, immutable
 * representations for distinct date-time concepts, eliminates base-0 month bugs, and supports
 * proper timezone handling.
 */

//==================================================================================================
// Date Declaration
//==================================================================================================

/**
 * Current Date Time
 * - Retrieves the current local date and time without timezone details.
 * - Output: 2026-10-02T15:10:09.109504883
 */
let date = Temporal.Now.plainDateTimeISO()
console.log(date.toString())

/**
 * Plain Date
 * - Represents a wall-clock date independent of time or timezone (e.g., birthday, holiday).
 * - Note: Month is 1-indexed (1 = January, 12 = December).
 * - Output: 2026-10-02
 */
date = Temporal.PlainDate.from({
    year: 2026, month: 10, day: 2
})
console.log(date.toString())

/**
 * Plain Time
 * - Represents a wall-clock time independent of date or timezone (e.g., daily alarm).
 * - Output: 13:30:15
 */
date = Temporal.PlainTime.from({
    hour: 13, minute: 30, second: 15
})
console.log(date.toString())

/**
 * Plain Date Time
 * - Represents a combined date and time without a timezone (e.g., flight schedule in local time).
 * - Output: 2026-10-02T13:30:15
 */
date = Temporal.PlainDateTime.from({
    year: 2026, month: 10, day: 2, hour: 13, minute: 30, second: 15
})
console.log(date.toString())

/**
 * Plain Date Time (ISO Format)
 * - Parses an ISO 8601 string into a PlainDateTime object.
 * - Output: 2026-10-02T13:30:15
 */
date = Temporal.PlainDateTime.from('2026-10-02T13:30:15')
console.log(date.toString())

/**
 * Zoned Date Time
 * - Represents a precise instant bound to a specific timezone and geographical location.
 * - Output: 2026-10-02T13:30:15-04:00[America/New_York]
 */
date = Temporal.ZonedDateTime.from({
    year: 2026, month: 10, day: 2, hour: 13, minute: 30, second: 15, timeZone: 'America/New_York'
})
console.log(date.toString())

//==================================================================================================
// Formats & Attributes
//==================================================================================================

/**
 * Date Format
 * - Formats Temporal objects directly using Intl.DateTimeFormat options via .toLocaleString().
 * - Output:
 *   10/2/2026, 1:30:15 PM
 *   Fri, October 02, 2026 at 1:30 PM
 */
date = Temporal.PlainDateTime.from('2026-10-02T13:30:15')
console.log(
    date.toLocaleString('en-US'),
    date.toLocaleString('en-US', {
        day: '2-digit',   // '02'
        month: 'long',    // 'October'
        year: 'numeric',  // '2026'
        weekday: 'short', // 'Fri'
        hour: '2-digit',  // '1'
        minute: '2-digit' // '30'
    })
)

/**
 * Date Attributes
 * - Accesses date and time components through direct, read-only properties.
 * - Note: dayOfWeek uses ISO 8601 standard (1 = Monday, 7 = Sunday).
 * - Output: 2026 10 2 5 13 30 15 0 0 0
 */
date = Temporal.PlainDateTime.from('2026-10-02T13:30:15')
console.log(
    date.year,        // 2026
    date.month,       // 10
    date.day,         // 2
    date.dayOfWeek,   // 5 - Friday (1 = Mon ~ 7 = Sun)
    date.hour,        // 13
    date.minute,      // 30
    date.second,      // 15
    date.millisecond, // 0
    date.microsecond, // 0
    date.nanosecond   // 0
)

//==================================================================================================
// Date Comparison & Arithmetic
//==================================================================================================

/**
 * Date Comparison
 * - Checks value equality via .equals() and determines relative ordering via .compare().
 * - Note: .compare() returns -1 if first date is earlier, 0 if equal, and 1 if later.
 * - Output: false 0 -1 1
 */
let date1 = Temporal.PlainDate.from('2026-10-02')
let date2 = Temporal.PlainDate.from('2026-10-05')
console.log(
    date1.equals(date2),
    Temporal.PlainDate.compare(date1, date1), //  0 because date1 = date1
    Temporal.PlainDate.compare(date1, date2), // -1 because date1 < date2
    Temporal.PlainDate.compare(date2, date1)  //  1 because date2 > date1
)

/**
 * Date Arithmetic
 * - Performs precise date manipulations using immutable .add() and .subtract() methods.
 * - Note: Automatically handles end-of-month boundaries safely (e.g. Jan 31 + 1 day = Feb 1).
 * - Output: 2025-02-01
 */
date = Temporal.PlainDate.from('2026-01-31')
date = date.add({ days: 1 })
date = date.subtract({ years: 1 })
console.log(date.toString())

/**
 * Date Duration
 * - Calculates the difference between two dates returning a Temporal.Duration object.
 * - Note: By default, .until() computes duration in days unless largestUnit option is specified.
 * - Output: 365 12
 */
date1 = Temporal.PlainDate.from('2026-01-01')
date2 = Temporal.PlainDate.from('2027-01-01')
const daysDuration = date1.until(date2)
const monthsDuration = date1.until(date2, { largestUnit: 'month' })
console.log(daysDuration.days, monthsDuration.months)
