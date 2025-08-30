//1. Prototype

//Every function in JS automatically gets a property called prototype.

//That’s where shared methods live when you do ConstructorFunction.prototype.method = ....

//Example:

function Person(name) { this.name = name; }
Person.prototype.greet = function() { console.log("Hi " + this.name); };

//2. Prototypal Inheritance

//The concept that objects can inherit directly from other objects through their prototype.

//Example with Object.create:

let parent = { greet() { console.log("Hello"); } };
let child = Object.create(parent); // child inherits from parent
child.greet(); // works via inheritance

//3. Simulating Classical Inheritance (before ES6 `class`)-prototypal inheritance


function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function() {
  console.log(this.name + " makes a sound");
};

function Dog(name) {
  Animal.call(this, name); // call parent constructor
}

Dog.prototype = Object.create(Animal.prototype); // inherit prototype
Dog.prototype.constructor = Dog;

Dog.prototype.speak = function() {
  console.log(this.name + " barks");
};

let d = new Dog("Tommy");
d.speak(); // "Tommy barks"

//4. Modern class inheritance.

class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(this.name + " makes a sound");
  }
}

class Dog extends Animal {
  speak() {
    console.log(this.name + " barks");
  }
}