// PROTOTYPE
function person(name){
    this.name = name;
}
person.prototype.getName = function () {
    console.log("Hello: ",this.name);
    
    
}
const user = new person("yashith");
user.getName();

// PROTOTYPE CHAINING

const animal = {
    eats: true
}
const dog = {
    barks: true
}

// dog.__proto__ = animal;
console.log(dog.eats);
console.log(dog.barks);


// Summary
// Prototype: An object from which another object inherits properties and methods.
// Prototype chain: JavaScript's process of searching through linked prototypes until it finds a property or reaches null.
// .prototype: A property on constructor functions/classes used to define shared methods for all instances.
// __proto__: A property on objects that references the prototype they inherit from.
// Key relationship: When you create an object with new, the object's __proto__ is set to the constructor's .prototype.

// A good rule to remember is:

// .prototype belongs to functions.
// __proto__ belongs to objects.


