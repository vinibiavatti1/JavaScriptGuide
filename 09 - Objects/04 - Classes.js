/**
 * Classes
 *
 * ES6 Classes are syntactic sugar over JavaScript's existing prototype-based inheritance model.
 * They provide a cleaner, more declarative syntax for creating objects, handling inheritance,
 * encapsulating private properties, and managing constructor functions.
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
 * Defines a blueprint for creating objects using the 'class' keyword.
 */
class Person {

    /**
     * Public Property
     * - Declares an instance property accessible from outside the class.
     */
    name = 'Unknown'

    /**
     * Private Property
     * - Declares a private instance property prefixed with '#' accessible only within the class
     *   body.
     */
    #age = 0

    /**
     * Static Property
     * - Defines a property stored on the class itself rather than on instances.
     */
    static defaultName = 'Unknown'

    /**
     * Constructor
     * - Special method for initializing newly instantiated objects created with the 'new' operator.
     */
    constructor(name, age = 0) {
        this.name = name
        this.age = age // Triggers the 'set age' setter below
    }

    /**
     * Public Method
     * - Instance function attached to the class prototype, accessible by all instance objects.
     */
    sayName() {
        console.log(this.name)
    }

    /**
     * Private Method
     * - Encapsulated helper function prefixed with '#' only callable inside the class.
     */
    #sayAge() {
        console.log(this.age)
    }

    /**
     * Static Method
     * - Utility function attached directly to the class rather than instance objects.
     */
    static defaultPerson() {
        return new this(this.defaultName)
    }

    /**
     * Property Acessors (Getter & Setter)
     * - Defines custom methods that execute on property read ('get') or write ('set') operations.
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
 * - Instantiates a new object with 'new', mutates a property via setter, and accesses getter.
 * - Output: John | 35
 */
const person = new Person('John', 30)
person.sayName()
person.age = 35
console.log(person.age)

/**
 * Static Context
 * - Invokes a static factory method directly on the class constructor without creating manual
 *   instances.
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
 * - Executes logic automatically when the class definition is evaluated by the runtime.
 */
class Logger {
    static {
        console.log('Logger Initialized!')
    }
}

/**
 * Example
 * - Shows that static initialization blocks execute during class definition loading before
 *   instantiation.
 * - Note: The static block executes as soon as the class is defined/evaluated, even before
 *   'new Logger()' is invoked.
 * - Output: Logger Initialized!
 */
const logger = new Logger()

//==================================================================================================
// Private Property Verification
//==================================================================================================

/**
 * Private Property Verification ('in' Operator)
 * - Safely checks for the presence of a private property on an object without throwing errors.
 * - Unlike 'instanceof', this check remains reliable even across different execution contexts
 *   (e.g., iframes, workers, or separate Node.js VM contexts) where prototype chains fail.
 */
class Entity {
    #id = 1

    static isEntity(obj) {
        return #id in obj
    }
}

/**
 * Brand Checking Usage
 * - Safely checks if an external or untrusted object is a valid instance containing the private
 *   field.
 * - Output: true | false
 */
const entity = new Entity()
console.log(Entity.isInstance(entity)) // Evaluates true
console.log(Entity.isInstance({}))     // Evaluates false without throwing a TypeError
