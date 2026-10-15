/**
 * Interfaces
 *
 * Interfaces are used to define structural contracts for objects, classes, and advanced shape
 * patterns with extension and merging capabilities.
 */

//==================================================================================================
// Basic Interfaces
//==================================================================================================

/**
 * Basic Interface
 * - Defines the strict shape and property contracts expected of an object instance.
 */
interface User {
    name: string
    age: number
}
const user: User = {
    name: 'John',
    age: 30
}

/**
 * Optional Properties
 * - The '?' symbol makes a property optional during object creation.
 */
interface Product {
    name: string
    description?: string
}
const item: Product = {
    name: 'Mechanical Keyboard'
}

/**
 * Readonly Properties
 * - The 'readonly' keyword prevents a property from being modified after initial assignment.
 * - In the example, the 'apiKey' property cannot be re-assigned (appConfig.apiKey = 'new-key')
 *   because it is a read-only.
 */
interface Configuration {
    readonly apiKey: string
    timeout: number
}
const appConfig: Configuration = {
    apiKey: 'xyz-123-abc',
    timeout: 5000
}

/**
 * Methods
 * - Interfaces can also define the signature of methods that objects must implement.
 */
interface Greeter {
    greeting: string
    greet(person: string): string
}
const systemGreeter: Greeter = {
    greeting: 'Hello',
    greet(person) {
        return `${this.greeting}, ${person}!`
    }
}

/**
 * Index Signatures
 * - Allows defining object shapes that accept dynamic keys with uniform value types.
 */
interface StringDictionary {
    [key: string]: string
}
const config: StringDictionary = {
    theme: 'dark',
    locale: 'en-US'
}

//==================================================================================================
// Extension & Merging
//==================================================================================================

/**
 * Extending Interfaces
 * - Interfaces can inherit and expand members from one or multiple base interfaces using 'extends'.
 */
interface Person {
    name: string
    age: number
}
interface Employee extends Person {
    employeeId: number
    role: string
}
const employee: Employee = {
    name: 'John',
    age: 30,
    employeeId: 1042,
    role: 'admin'
}

/**
 * Declaration Merging
 * - TypeScript automatically merges multiple declarations of an interface with the same name
 *   into a single combined definition.
 */
interface WindowConfig {
    width: number
}
interface WindowConfig {
    height: number
}
const win: WindowConfig = {
    width: 1920,
    height: 1080
}

//==================================================================================================
// Class Implementation
//==================================================================================================

/**
 * Class Implementation
 * - Classes can explicitly implement an interface to guarantee they conform to its shape.
 */
interface Logger {
    log(message: string): void
}
class ConsoleLogger implements Logger {
    log(message: string): void {
        console.log(`[LOG]: ${message}`)
    }
}

export { }
