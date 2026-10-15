/**
 * Enums
 *
 * Enum types are used to define a collection of named constants, supporting numeric, string,
 * heterogenous, and compile-time optimized const enum declarations.
 */

//==================================================================================================
// Enums
//==================================================================================================

/**
 * Numeric Enums
 * - Automatically assigns auto-incrementing numbers starting from 0 (or a specified initializer).
 * - Supports reverse mapping (from value back to key name).
 */
enum Direction {
    Up,    // 0
    Down,  // 1
    Left,  // 2
    Right  // 3
}
const currentDirection: Direction = Direction.Up

/**
 * String Enums
 * - Explicitly assigns string values to each member, offering clear runtime debugging values.
 * - Does not generate reverse mappings in the compiled JavaScript output.
 */
enum Status {
    Pending = 'PENDING',
    Approved = 'APPROVED',
    Rejected = 'REJECTED'
}
const currentStatus: Status = Status.Approved

//==================================================================================================
// Const Enums
//==================================================================================================

/**
 * Const Enums
 * - Completely erased during compilation; member access is directly inlined as literal values in
 *   output JS.
 * - Reduces runtime code footprint and removes the generated IIFE object.
 */
const enum LogLevel {
    Debug = 'DEBUG',
    Info = 'INFO',
    Error = 'ERROR'
}
const currentLogLevel: LogLevel = LogLevel.Info

export { }
