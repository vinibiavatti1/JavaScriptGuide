/**
 * Classes
 *
 * ES6 Classes are syntactic sugar over JavaScript's existing prototype-based inheritance model.
 * They provide a cleaner, more declarative syntax for creating objects, handling inheritance,
 * encapsulating private fields, and managing constructor functions.
 *
 * Key Concepts:
 * - Syntactic Sugar: Classes do not introduce a new object-oriented inheritance model to JS.
 *   Under the hood, class methods are still assigned to the constructor's 'prototype'.
 * - Strict Mode: Class bodies execute automatically in strict mode.
 * - Hoisting: Unlike function declarations, classes are NOT hoisted (TDZ applies).
 */

//==================================================================================================
// Class
//==================================================================================================

/**
 * Class Declaration
 * - Demonstrates public/private fields, static members, constructors, getters/setters, and methods.
 */
class Person {

    /**
     * Public Field
     * - Declared directly on the instance, outside the constructor.
     */
    name = 'Unknown'

    /**
     * Private Field
     * - Hard-enforced by the V8 runtime. Inaccessible outside the class body (throws SyntaxError).
     */
    #age = 0

    /**
     * Static Field
     * - Stored on the class function object itself, not on instantiated objects.
     */
    static defaultName = 'Unknown'

    /**
     * Constructor
     * - Special method called automatically when creating an instance with 'new'.
     */
    constructor(name, age = 0) {
        this.name = name
        this.age = age // Triggers the 'set age' setter below
    }

    /**
     * Public Method
     * - Stored on Person.prototype to optimize memory across instances.
     */
    sayName() {
        console.log(this.name)
    }

    /**
     * Private Method
     * - Accessible only within internal class routines.
     */
    #sayAge() {
        console.log(this.age)
    }

    /**
     * Static Method
     * - Invoked directly on the Class (Person.defaultPerson()).
     * - Within a static method, 'this' refers to the Class constructor itself.
     */
    static defaultPerson() {
        return new this(this.defaultName)
    }

    /**
     * Property (Getter & Setter Acessors)
     * - Bind an object property to a function when looking up or assigning values.
     * - Allows validation or encapsulation around private fields (#age).
     */
    get age() {
        return this.#age
    }
    set age(age) {
        this.#age = age
    }
}

/**
 * Class Instance
 * - Instantiates 'Person' and demonstrates method call and setter interaction.
 * - Output: John | 35
 */
const person = new Person('John', 30)
person.sayName()
person.age = 35
console.log(person.age)

/**
 * Static Context
 * - Demonstrates accessing static factory methods without instantiating the main class first.
 * - Output: Person { name: 'Unknown' }
 */
const defaultPerson = Person.defaultPerson()
console.log(defaultPerson)

//==================================================================================================
// Inheritance
//==================================================================================================

/**
 * Extends
 * - 'extends' connects the prototype chain (Employee.prototype === Person.prototype).
 * - 'super()' must be called before accessing 'this' inside the child constructor.
 */
class Employee extends Person {
    #role

    constructor(name, age, role) {
        super(name, age) // Invokes parent constructor (Person)
        this.#role = role
    }

    sayRole() {
        console.log(this.role)
    }

    get role() {
        return this.#role
    }
    set role(role) {
        this.#role = role
    }
}

/**
 * Child Class Instance
 * - Demonstrates inherited methods from Person and instance check via prototype chain.
 * - Output: John | true
 */
const employee = new Employee('John', 30, 'admin')
employee.sayName() // Inherited from Person.prototype
employee.sayRole() // Own method on Employee.prototype

/**
 * Instance Of
 * - Evaluates true since an instance of the child class is also considered an instance of the
 *   parent class.
 * - Output: true
 */
console.log(employee instanceof Person)

//==================================================================================================
// Static Initializer
//==================================================================================================

/**
 * Static Initializer
 * - Evaluates logic once when the class definition is loaded into memory by the engine.
 * - Allows complex initialization routines (e.g., try/catch, static property setups) and provides
 *   privileged access to private fields within the static scope.
 */
class Logger {
    static {
        console.log('Logger Initialized!')
    }
}

/**
 * Example
 * - The static block executes as soon as the class is defined/evaluated, even before 'new Logger()'
 *   is invoked.
 * - Output: Logger Initialized!
 */
const logger = new Logger()

//==================================================================================================
// Private Field Verification
//==================================================================================================

/**
 * Private Field Verification ('in' Operator)
 * - Safely checks if an object contains a specific private field without throwing a TypeError.
 * - Unlike public properties (which check prototype chains), private brand checking checks solely
 *   for internal private brand slots directly attached to the instance.
 */
class Validator {
    #secret = 42

    static isInstance(obj) {
        return #secret in obj
    }
}

/**
 * Brand Checking Usage
 * - Output: true | false
 */
const v = new Validator()
console.log(Validator.isInstance(v))  // Evaluates true
console.log(Validator.isInstance({})) // Evaluates false without throwing a TypeError
