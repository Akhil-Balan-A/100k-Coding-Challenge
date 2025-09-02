//oops
//

// It supported functions, conditionals, and loops.

// No real classes or modules at that time.

// Object-Oriented features (like prototypes) existed in a minimal way, but class syntax and full OOP support came much later (ES6 in 2015).
//before OOP we have procedural programming based in functions. so over a period of time fuctions increased and intedependencies between the funciton increase and made a spagetty code.. which made so many problem… to solve this issue OOP came.but it’s prototype-based oop, not classical OOP like Java or C++.
//In original JavaScript: There is no separate class concept(blueprint) like Java or C++. You literally create an object, and then other objects can inherit directly from it. This is why it's called prototypal inheritance—objects inherit from other objects, not from classes.

// Why?

// In classical OOP (Java, C++):

// Classes are blueprints.

// Objects are created from classes.

// Inheritance happens via classes.

// In JavaScript:

// Everything is an object (or can behave like one).

// Objects inherit directly from other objects via the prototype chain.

// ES6 introduced class syntax, but it’s just syntactic sugar over prototypes.

// 
// unlike other programming languges that use proper class based OOPs here in the javascript we use function based OOPs which is called prototype based OOPs. here we dont have classes like in other programming languages. here we use objects to create classes and we create object from object basically. Over the years, to make the language more familiar to developers from other backgrounds, JavaScript has added features that mimic the class-based model you're used to. This is why the class keyword was introduced in ECMAScript 2015 (ES6). It's a syntactic sugar that allows you to write code that looks like a traditional class-based language, but under the hood, it's still operating on the same prototypal inheritance principles.

//class 



//old way of data respresentation.

let basicSalary = 10000;
let hra = 2000;
let da = 3000;
let pf = 2000;
let totalWorkDays = 20;//8 hours per day
let daysPresent = 20;
let overTime = 10;
let rate = 200;

function getWage() {
    let totalWage = basicSalary + hra + da + pf + (overTime * rate);
    return totalWage;
}

const totalWage=getWage(basicSalary, hra, da, pf, totalWorkDays, daysPresent, overTime, rate);
console.log("Total Wage for the month is: ",totalWage);

// this function need to be callyed again and again for each employess to find the total wage but when using
// class we can avoid this problem. we make a class (blue print) where we bundle above properties and methods
// in a single unit. use the class to create objects for each employee, there by we are just using the same class for each employee, each object has its own unique set of data to find the wages and we can add more methods or use existing methods. here in the class all the variables become properties and all the functions become methods.

//eg.

class CalculateWage {
    constructor(basicSalary, hra, da, pf, totalWorkDays, daysPresent, overTime, rate) {
        this.basicSalary = basicSalary;
        this.hra = hra;
        this.da = da;
        this.pf = pf;
        this.totalWorkDays = totalWorkDays;
        this.daysPresent = daysPresent;
        this.overTime = overTime;
        this.rate = rate;
    }

    getWage() {
        let totalWage = this.basicSalary + this.hra + this.da + this.pf + (this.overTime * this.rate);
        return totalWage;
    }
}

//here we just need to give each emplyees data to find the wages and we can use the same class to find the wages for each employee. there by we are just using the same class for each employee, each object has its own unique set of data to find the wages and we can add more methods or use existing methods. for that we make an employee object from the class using employees details with constructor function and we can use the same class to find the wages for each employee.

const employee1 = new CalculateWage(10000, 2000, 3000, 2000, 20, 20, 10, 200);
const employee2 = new CalculateWage(10000, 2000, 3000, 2000, 20, 20, 10, 200);
const employee3 = new CalculateWage(10000, 2000, 3000, 2000, 20, 20, 10, 200);

console.log("Total Wage for employee1 is: ", employee1.getWage());
console.log("Total Wage for employee2 is: ", employee2.getWage());
console.log("Total Wage for employee3 is: ", employee3.getWage());

// here we have used the class to create objects for each employee, each object has its own unique set of data to find the wages and we can add more methods or use existing methods like getWage to calculate wages.

//grouping of data and methods in a single unit is called class and objects are created from the class.


//

//////object literals don't have a prototype chain like constructor functions or classes do.

/////prototype is a reference to a object that inlude so many functions and properties...
//// by using extends we can inherits the properties and methods from the parent class, including constructor method. but it works as long as on child class we dont use any property.  if at the time of child class haveing properties we need to use constructor class with super() method to call the properties of parent class..it is a best practice for a class that extends another is to include a constructor and call super(). This allows the child class to set its unique properties while still using the parent's constructor to set the inherited ones.

// using __proto__ property we can add methods of another object to our object. but if same method is already present in our object it will override it. alway priority is for own methods than the __proto__ methods.


// end of the day function is both object and fuction like behaves..

//////////// setting a spcial method in the prototype so that it can be access to all the object types (object, array, string, function);

Object.prototype.akhil = function () {
    console.log("Akhil is present in all objects");
}

// When you add a method to Object.prototype, you're putting it on the top of the prototype chain. Since nearly all JavaScript objects, including arrays, strings, functions, and regular objects, inherit from Object.prototype at some point in their prototype chain, the method you added becomes available to them all.
// When you add a method to Array.prototype or String.prototype, function.prototype, or any other object's prototype, it's only available to objects that are part of the array's prototype chain.


//in the new err inheritance is much easier using class sytax. but in the old time inhertiance use two methods.
//1. setPrototypeOf
//2. __proto__

const emplyees = {
    basicSalary: 10000,
    hra: 2000,
    calcTotalWage: function () {
        return this.basicSalary + this.hra;
    }
}

const employe1 = {
    basicSalary: 10000,
    hra: 2000,
}

// here we have used prototype or __proto__ to inherit a method and properties to the employe1 object.
Object.setPrototypeOf(employe1,emplyees);

console.log("Wages",employe1.calcTotalWage())

// here we have used prototype or __proto__ to inherit a method and properties to the employe1 object.

employe1.__proto__ = emplyees;

console.log("wages",employe1.calcTotalWage());


////Strings dual behaviour as a string and an object.

/*
Prototypes and the Prototype Chain
All JavaScript objects, arrays, and functions inherit from a common base: Object.prototype.

Strings, however, are a primitive data type, not objects. But when you try to access a method on a string, JavaScript temporarily wraps it in a String object. This temporary String object has its own prototype, String.prototype.

The prototype chain is what connects these types. It works like this:

An Array inherits from Array.prototype.

Array.prototype inherits from Object.prototype.

A String's temporary object inherits from String.prototype.

String.prototype also inherits from Object.prototype.

Therefore, when you add a method to Object.prototype, it becomes available to arrays, functions, and strings because they all eventually look up to Object.prototype in their chain. Methods added to Array.prototype or String.prototype are more specific and are only accessible by those types.
*/


//difference between using dot notation and [] notation for accessing methods and properties of a object - When accessing object properties, you have two options: dot notation and bracket notation. Dot notation is the simpler, more common choice and is used when you know the exact name of the property. Bracket notation, on the other hand, is essential when the property name is stored in a variable (making it dynamic) or when the property name itself contains invalid characters like spaces or hyphens. Both methods will return undefined if the property doesn't exist, rather than throwing an error.

// default constructor is automatically assigned even if you don't write one is to ensure the class remains a valid blueprint. This automatic constructor is an empty function, but it's essential for the new keyword to work correctly. Without it, there would be no a specific place for JavaScript to execute the initialization logic needed to create a new, empty object instance.


////method chaining is a technique in JavaScript that allows you to call multiple methods on the same object in a single statement.
//// for that return the object itself by returning this in the method.
//eg.
/*
class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
        this.score = 0;
    }
    login() {
        console.log(`The user ${this.name} logged in with email ${this.email}`);
        return this;
    };
    logout=()=> {
        console.log(`The user ${this.name} logged out!`);
        return this;
    }
    updateScore() {
        this.score++;
        console.log(`The user ${this.name} has a score of ${this.score}`);
        return this;
    }
}



const user1 = new User("Akhil", "o9V2v@example.com");
console.log(user1);
user1.login().updateScore().updateScore().logout();
*/


//////2 constructor fuction (blue print) inhertance usign prototype

/*
function User(name,email) {
    this.name = name;
    this.email = email; 
    this.score = 0;
    this.login = function() {
        console.log(`The user ${this.name} logged in with email ${this.email}`);
        return this;
    };
    this.logout = function () {
        console.log(`The user ${this.name} logged out!`);
        return this;
    };
    this.updateScore = function() {
        this.score++;
        console.log(`The user ${this.name} has a score of ${this.score}`);
        return this;
    };
}

User.prototype.checkFunction = function () {
    console.log("Akhil is present in all objects(prototype function)");
}

const user1 = new User("Akhil", "o9V2v@example.com");
console.log(user1);
user1.login().updateScore().updateScore().logout();
user1.checkFunction();

function Admin(name,email) {
    User.call(this,name,email);
}
Admin.prototype = Object.create(User.prototype); // inherit prototype
Admin.prototype.constructor = Admin;

const admin1 = new Admin("Arun", "osdddddd9V2v@example.com");
console.log(admin1);
admin1.login().updateScore().updateScore().logout();
admin1.checkFunction();

*/


// what is static method.. it is a method that is not associated with any particular instance of a class. It is a class-level method that can be called without creating an instance of the class.
// we can make static method by using static keyword inside class or cand use ClassName.staticMethod(); outside the class
//eg.
/*
class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
        this.score = 0;
    }
    static checkFunction() {
        console.log("This is a static method.   t to the objects (instances) created from that class. They are part of the class's blueprint but not part of the individual objects. ");
    }
}
User.checkFunction();
*/


//This "old way" of creating objects from other objects is accomplished using Object.create(). This method creates a new object and sets its __proto__ property (the link in the prototype chain) to a specified existing object. This means the new object inherits properties and methods from the prototype object.
//eg:
/*

const book = {
    title:"The Lord of the Rings",
    author:"JRR Tolkien",
    year:"1954",
    getSummary: function() {
        console.log(`${this.title} was written by ${this.author} in ${this.year}`);
    }
}


console.log(book);
book.getSummary();

const book1 = Object.create(book);//This line creates a new empty object and sets a link to the __proto__ property of the book1 object. this creates a prototype chain
console.log(book1);// shows empty object as the properties not directly on book2 itself. they are inherited from its prototype, which is book1. the console.log shows only the own properties of an object.
console.log(book1.title); 
console.log(book1.author);
console.log(book1.year);
book2.getSummary();

How Prototypal Inheritance Works here..
When you use Object.create(book), a new object book1 is created. This new object is initially empty, but it has a hidden link (its __proto__) that points to the book object. .

When you call book1.getSummary(), the JavaScript engine does the following:

It checks if book1 has a getSummary property of its own. It doesn't.

It then follows book1's prototype link to the book object.

It finds getSummary on book and executes it.

Inside the getSummary function, the this keyword refers back to the original object that called it, which is book1.

When the function tries to access this.title, this.author, and this.year, it looks for those properties on book1. Since they aren't found there, it follows the prototype chain to book and retrieves the values.

This means the data is not duplicated; it's simply referenced. This is an intentional design pattern in JavaScript for memory efficiency and is a perfectly valid way for OOP to work in a prototypal language.

If you want book1 to have its own, unique properties, you must add them directly to the object after creating it. like below.
book1.title = "The Hobbit"; // Now book1 has its own title property
book1.author = "JRR Tolkien";
book1.year = "1937";

or can use Object.assign(book1, {title:"The Hobbit", author:"JRR Tolkien", year:"1937"}); this will also work same as above.
*/



////////////////////////////////js object methods.
/*
JavaScript provides several built-in static methods on the global Object class that you can use to work with objects. These are not methods you call on an object instance (e.g., myObj.keys()); instead, you call them directly on the Object constructor (e.g., Object.keys(myObj)).

Here are some of the most common and useful Object methods:

Creating Objects
Object.create(): Creates a new object, using an existing object as the prototype of the newly created object.

Managing Properties
Object.keys(): Returns an array of a given object's own enumerable string-keyed property names.

Object.values(): Returns an array of a given object's own enumerable property values.

Object.entries(): Returns an array of a given object's own enumerable string-keyed property [key, value] pairs. This is useful for iterating over an object's properties.

Object.assign(): Copies all enumerable own properties from one or more source objects to a target object. It can be used to merge objects or create a shallow copy.

Property Descriptors
Object.defineProperty(): Defines a new property directly on an object, or modifies an existing property, and returns the object. This method gives you fine-grained control over a property's attributes, such as whether it can be written to (writable), enumerated (enumerable), or configured (configurable).

Object.getOwnPropertyDescriptor(): Returns a property descriptor for an own property of a given object.

Freezing and Sealing
Object.freeze(): Prevents new properties from being added to an object, prevents existing properties from being removed, and prevents the enumerability, configurability, and writability of existing properties from being changed. It essentially makes an object immutable.

Object.seal(): Prevents new properties from being added to an object and marks all existing properties as non-configurable. This means you can still change the values of existing properties, but you can't delete them or change their descriptors.

Checking Prototypes
Object.getPrototypeOf(): Returns the prototype (i.e., the internal [[Prototype]] or __proto__ property) of the specified object.

Other Useful Methods
Object.fromEntries(): Transforms a list of [key, value] pairs into an object. This is the inverse of Object.entries().

Object.is(): Compares two values for equality. It is more robust than === for edge cases like NaN and -0.


*/

/////protoype vs __proto__

/*
The Prototype vs. __proto__
prototype: This is a property on constructor functions and classes. It's the blueprint that defines what properties and methods new instances will inherit. For example, Array.prototype contains all the array methods like push(), pop(), etc.

__proto__: This is a property on object instances. It's the internal link that points to the prototype of that object(the blueprint from which it was created). It’s what JavaScript uses to traverse the prototype chain. When you try to access a property or method on an object that doesn't exist directly on it, JavaScript follows the __proto__ link to find it on the object's prototype.
Example: If you call myArray.push(1), JavaScript doesn’t find push on myArray directly, so it goes to myArray.__proto__ (which is Array.prototype) to use the method.

👉 In short:

prototype = blueprint (belongs to functions/classes).

__proto__ = actual link (belongs to objects, points to their prototype).
*/

/////Inheritance between two constructor functions.;

/*

function Book(title,author,year) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.getSummary = function () {
        console.log(`The Book ${this.title} was writtern by ${this.author} in the year ${year}`);
    }
}


//Inhertiance - prototype chain.(book to magazine)
Magazine.prototype = Object.create(Book.prototype);//Here we are creating a new empty object and setting a link to the __proto__ property of the Book object.
Magazine.prototype.constructor = Magazine;//Here we are setting the constructor property of the Magazine object to the Magazine constructor function instad of the Book constructor function.
function Magazine(title,author,year,month) {//Here we are using the Book constructor function to create a new Magazine object.
    Book.call(this,title,author,year);//This line calls the Book constructor function with the title, author, and year arguments, and sets the this keyword to the new Magazine object.
    this.month = month;
    
}

const magazin1 = new Magazine("Magazine 1","John Doe","2020","May");

console.log(magazin1)


*/


// we can make a object by not only object litteral can use factory function like below.
/*
function createPerson(name,age){

  return {

       name,

       age,

        userInfo(){console.log(`The person name is ${this.name} aged ${this.age}`)}

    }

}


const person1 = createPerson("Akhil", 23);

console.log(person1);
person1.userInfo();

 */



const arr = [];
const proto1 = Object.getPrototypeOf(arr)
console.log(proto1===Array.prototype);// true
const proto2 = Object.getPrototypeOf(proto1)
console.log(proto2===Object.prototype);//true






