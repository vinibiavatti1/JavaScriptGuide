/**
 * Date-fns
 *
 * Modern JavaScript date utility library providing a comprehensive, yet simple and consistent
 * toolset for manipulating and formatting dates in a modular, tree-shakeable, and immutable
 * fashion.
 *
 * Note: This document covers only the most common and widely-used features of the library. For
 * advanced configurations, additional methods, and complete API references, please consult the
 * official documentation.
 */
import { format, addDays, subDays, differenceInDays, parseISO, isValid } from 'date-fns';

//==================================================================================================
// Formatting & Parsing
//==================================================================================================

/**
 * Format Date
 * - Formats a date object into a custom string representation using token patterns.
 * - Output: 2026-10-11
 */
const currentDate = new Date('2026-10-11T12:00:00Z');
console.log(format(currentDate, 'yyyy-MM-dd'));

/**
 * Parse ISO String
 * - Parses an ISO 8601 string into a standard JavaScript Date object.
 * - Output: Sun Oct 11 2026
 */
const parsedDate = parseISO('2026-10-11T00:00:00.000Z');
console.log(parsedDate.toDateString());

/**
 * Validate Date
 * - Checks if a date object represents a valid date or an invalid instance.
 * - Output: true
 */
console.log(isValid(currentDate));

//==================================================================================================
// Manipulation
//==================================================================================================

/**
 * Add Days
 * - Adds a specified number of days to a given date, returning a new immutable Date instance.
 * - Output: 2026-10-16
 */
const futureDate = addDays(currentDate, 5);
console.log(format(futureDate, 'yyyy-MM-dd'));

/**
 * Subtract Days
 * - Subtracts a specified number of days from a given date, returning a new immutable Date instance.
 * - Output: 2026-10-06
 */
const pastDate = subDays(currentDate, 5);
console.log(format(pastDate, 'yyyy-MM-dd'));

//==================================================================================================
// Comparison & Calculation
//==================================================================================================

/**
 * Difference in Days
 * - Calculates the number of full days between two given dates.
 * - Output: 10
 */
const targetDate = new Date('2026-10-21T12:00:00Z');
const diffDays = differenceInDays(targetDate, currentDate);
console.log(diffDays);
