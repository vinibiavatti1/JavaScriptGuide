/**
 * Date
 *
 * NOTE: The legacy Date API in JavaScript has several design flaws, such as zero-indexed months,
 * lack of timezone support, mutable instances, and subtle parsing inconsistencies across
 * environments.
 *
 * For modern JavaScript development, prefer using the new `Temporal` API (or libraries like
 * date-fns/dayjs in older runtimes) for reliable, immutable, and UTC-safe date/time management.
 */

//==================================================================================================
// Date Declaration
//==================================================================================================

/**
 * Current Date & Time
 * - Creates a Date instance representing the current moment in time.
 * - Output: 02/10/2026, 13:50:47
 */
let date = new Date()
console.log(date.toLocaleString())

/**
 * Custom Date
 * - Creates a local date using numeric parameters (year, monthIndex, day).
 * - Note: Months are zero-indexed in JavaScript (0 = January, 11 = December).
 * - Output: 02/10/2026, 00:00:00
 */
date = new Date(2026, 9, 2)
console.log(date.toLocaleString())

/**
 * Custom Date (ISO Format)
 * - Parses an ISO-like date string containing time without timezone offset.
 * - Note: Strings with time specified without 'Z' are parsed in local time.
 * - Output: 02/10/2026, 00:00:00
 */
date = new Date('2026-10-02T00:00:00')
console.log(date.toLocaleString())

/**
 * Custom Date & Time
 * - Creates a local date and time using numeric parameters for hours, minutes, and seconds.
 * - Output: 02/10/2026, 13:30:15
 */
date = new Date(2026, 9, 2, 13, 30, 15)
console.log(date.toLocaleString())

/**
 * Custom Date & Time (ISO Format)
 * - Parses an ISO string with explicit local date and time components.
 * - Output: 02/10/2026, 13:30:15
 */
date = new Date('2026-10-02T13:30:15')
console.log(date.toLocaleString())

//==================================================================================================
// Formats & Attributes
//==================================================================================================

/**
 * Date Formats
 * - Demonstrates different native string representations of the same Date instance.
 * - Note: Direct console logging of a Date object calls .toISOString() internally in Node.js.
 * - Output:
 *   2026-10-02T12:59:12.342Z
 *   2026-10-02T12:59:12.342Z
 *   10/2/2026, 3:15:51 PM
 *   Fri Oct 02 2026 13:59:12 GMT+0100
 */
date = new Date()
console.log(
    date,
    date.toISOString(),
    date.toLocaleString('en-us'),
    date.toString()
)

/**
 * Date Attributes
 * - Extracts individual date and time components based on the local system timezone.
 * - Output: 2026 10 2 13 30 15 0 -60
 */
date = new Date(2026, 9, 2, 13, 30, 15)
console.log(
    date.getFullYear(),
    date.getMonth() + 1,
    date.getDate(),
    date.getHours(),
    date.getMinutes(),
    date.getSeconds(),
    date.getMilliseconds(),
    date.getTimezoneOffset()
)

/**
 * Date Attributes (UTC)
 * - Extracts individual date and time components adjusted to UTC reference.
 * - Output: 2026 10 2 12 30 15 0
 */
date = new Date(2026, 9, 2, 13, 30, 15)
console.log(
    date.getUTCFullYear(),
    date.getUTCMonth() + 1,
    date.getUTCDate(),
    date.getUTCHours(),
    date.getUTCMinutes(),
    date.getUTCSeconds(),
    date.getUTCMilliseconds()
)

//==================================================================================================
// Date Comparison & Arithmetic
//==================================================================================================

/**
 * Date Comparison
 * - Compares two dates chronologically and checks for value equality.
 * - Note: Relational operators (>, <) compare underlying timestamps, while equality (===) checks
 *   reference identity.
 * - Output: false true false true false
 */
let date1 = new Date('2026-10-02T00:00:00')
let date2 = new Date('2026-10-05T10:00:00')
console.log(
    date1 > date2,
    date1 < date2,
    date1 >= date2,
    date1 <= date2,
    date1.getTime() === date2.getTime()
)

/**
 * Date Arithmetic
 * - Performs manual date addition by passing incremented day values into the Date constructor.
 * - Note: Adding days using constructor overflow automatically handles month/year transitions.
 * - Output: 2026 2 1
 */
date = new Date(2026, 0, 31)
date = new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate() + 1,
)
console.log(
    date.getFullYear(),
    date.getMonth() + 1,
    date.getDate(),
)
