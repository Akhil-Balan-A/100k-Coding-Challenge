//oops
//When JavaScript was first introduced in 1995, it was mainly a function-based, procedural scripting language designed to add simple interactivity to web pages (form validation, alerts, etc.).

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


//in JavaScript, there are multiple ways to create objects, but at the core, all of them still rely on the prototype system (object from object).

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