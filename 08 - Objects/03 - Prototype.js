/**
 * Prototype
 *
 * JavaScript uses prototypal inheritance under the hood, meaning objects inherit properties
 * and methods directly from other objects via an internal prototype link ('[[Prototype]]',
 * exposed via '__proto__' or 'Object.getPrototypeOf').
 *
 * Note on Modern Practices:
 * While ES6 'class' syntax is the industry standard today for readability and ergonomics, classes
 * in JavaScript are syntactic sugar over this exact prototypal mechanism. Understanding prototypes
 * reveals how object-oriented JS actually works under the hood.
 */

//==================================================================================================
// Function Instances
//==================================================================================================

/**
 * Constructor Function
 * - Acts as a blueprint for creating multiple objects.
 * - Inside the constructor, 'this' refers to the newly created instance.
 * - Constructor Functions typically uses the first letter capitalized.
 * - Note: As industry standard, it is recommended to use 'class' instead.
 */
function Person(name, age) {
    this.name = name
    this.age = age
}

/**
 * Prototype Property
 * - Methods defined on the constructor's 'prototype' are shared across all instances.
 * - Saves memory by avoiding creating a new function instance for every created object.
 */
Person.prototype.greet = function () {
    console.log(`Hi, I am ${this.name}`)
}

/**
 * Creating Instances
 * - The 'new' operator creates a blank object, sets its internal '__proto__' to 'Person.prototype',
 *   binds 'this', and executes the constructor.
 * - Output: Hi, I am John
 */
const p = new Person('John', 30)
p.greet()

//==================================================================================================
// Inheritance
//==================================================================================================

/**
 * Child Constructor Function
 * - Uses 'Parent.call(this, ...)' to execute parent logic and inherit instance properties.
 */
function Employee(name, age, role) {
    Person.call(this, name, age)
    this.role = role
}

/**
 * Prototype Linkage (Inherit Methods)
 * - 'Object.create' creates a new object linked to Person.prototype.
 * - Restores constructor identity since 'Object.create' overwrites
 *   'Employee.prototype.constructor'.
 */
Employee.prototype = Object.create(Person.prototype)
Employee.prototype.constructor = Employee

/**
 * Child Method
 * - Adds methods specific to Employee instances.
 * - MUST be defined AFTER 'Object.create', otherwise 'Object.create' will overwrite the prototype
 *   object and erase these methods.
 */
Employee.prototype.work = function () {
    console.log(`${this.name} is working as an ${this.role}`)
}

/**
 * Prototype Chain Execution
 * - Demonstrates property lookup: JS first searches for methods on the instance 'e', then walks up
 *   to 'Employee.prototype', then 'Person.prototype', and finally 'Object.prototype'.
 * - Example: e -> Employee.prototype -> Person.prototype -> Object.prototype
 * - Output: John is working as an admin | Hi, I am John
 */
const e = new Employee('John', 30, 'admin')
e.work()     // From: Employee.prototype
e.greet()    // From: Person.prototype
e.toString() // From: Object.prototype

//==================================================================================================
// Prototype Utilities
//==================================================================================================

/**
 * Prototype Lookup
 * - Inspects internal prototype links using Object.getPrototypeOf() instead of deprecated
 *   __proto__.
 * - Confirms that instances and child prototypes properly point to their parent prototypes in the
 *   chain.
 * - Output: true | true
 */
console.log(Object.getPrototypeOf(e) === Employee.prototype)
console.log(Object.getPrototypeOf(Employee.prototype) === Person.prototype)

/**
 * End of Prototype Chain
 * - Demonstrates the top boundary of the prototype hierarchy where Object.prototype.__proto__
 *   points to null.
 * - Tells the JS engine to stop property lookup and return 'undefined' if a property is not found.
 * - Output: null
 */
console.log(Object.getPrototypeOf(Object.prototype))

//==================================================================================================
// Object Inheritance
//==================================================================================================

/**
 * Declare Object
 * - Defines a plain object literal that serves as a prototype blueprint for other objects.
 */
const animal = {
    makeSound() { console.log('woof!') }
}

/**
 * Object Inheritance
 * - Creates a new object using an existing object directly as its internal prototype via
 *   'Object.create()'.
 * - Bypasses constructor functions and the 'new' keyword completely for direct object-to-object
 *   delegation.
 * - Output: woof!
 */
const dog = Object.create(animal)
dog.makeSound()

//==================================================================================================
// Prototype Hierarchy Representation
//==================================================================================================

/**
 * The diagram below demonstrates the prototype chain from the examples above.
 */;
`
e (Employee Instance)
|- name: 'John'
|- age: 30
|- role: 'admin'
|- [[Prototype]]: Employee.prototype
   |- constructor: Employee
   |- work: function() { ... }
   |- [[Prototype]]: Person.prototype
      |- constructor: Person
      |- greet: function() { ... }
      |- [[Prototype]]: Object.prototype
         |- toString: function() { ... }
         |- [[Prototype]]: null
`;
