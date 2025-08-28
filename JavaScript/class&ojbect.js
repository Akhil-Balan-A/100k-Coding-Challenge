//class:  class is a blue print and you create object from it. in js we can use class keyword or constructor function to create a blue print. that include data(properties) and methods(functions)
//object: object is a instance of a class. It's the concrete, real-world item created from a blueprint (the class). While all objects of the same class share the same structure and behavior, each one has its own unique set of data for its properties.


// Making class and objects using constructor function & protoypes (the old way);

// function Car(engine,chassis,parts) {
//     this.engine = engine;
//     this.chassis = chassis;
//     this.parts = parts;
//     this.drive = function () {
//         console.log("The car can drive you to desired place");
//     }

// }
// Car.prototype.makeSound=function(){
//     console.log("The car can make sound ");
// }

// const RollsRoys = new Car('2 liter disel, Manual', 'CCA Platform', 'BMW parts');
// console.log(RollsRoys);
// RollsRoys.drive();
// RollsRoys.makeSound();

// console.log(RollsRoys.hasOwnProperty('engine'));
// console.log(RollsRoys.hasOwnProperty('makeSound'));
// console.log(RollsRoys.hasOwnProperty('drive'));


// Making class and objects using class syntax (the new way);

class Car{
    constructor(engine,chassis,parts){
        this.engine = engine;
        this.chassis = chassis;
        this.parts = parts;
    }
    driv() {
        console.log("The car can drive you to desired place");
    }

    makeSound(){
        console.log("The car can make sound ");
    }
    

}

const RollsRoys = new Car('2 liter disel, Manual', 'CCA Platform', 'BMW parts');
console.log(RollsRoys);
RollsRoys.driv();
RollsRoys.makeSound();

console.log(RollsRoys.hasOwnProperty('engine'));
console.log(RollsRoys.hasOwnProperty('makeSound'));// since methods are added to the prototype automatically, wont be found in the object.
console.log(RollsRoys.hasOwnProperty('driv'));//since methods are added to the prototype automatically, wont be found in the object.
