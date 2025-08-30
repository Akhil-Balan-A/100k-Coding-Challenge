//Abstraction: Hiding the implementation details and only exposing what’s necessary to the outside world.
//The user of an object should focus on what it does, not how it does it.

//Example from real life:

//When you drive a car, you use the steering wheel, pedals, and gear.

//You don’t need to know how the engine, gearbox, or fuel injection works.

//That’s abstraction.

//we can still achieve abstraction in multiple ways:

//////////////////////////////1. Using Functions and Closures/////////////////////////////


/*
function createBankAccount(initialBalance) {
  let balance = initialBalance; // private variable (hidden)

  return {
    deposit(amount) { balance += amount; },
    withdraw(amount) { balance -= amount; },
    getBalance() { return balance; } // exposed method
  };
}

let account = createBankAccount(1000);
account.deposit(500);
console.log(account.getBalance()); // 1500
console.log(account.balance); // ❌ undefined (hidden!)
*/





///////////////////////////2. Using Classes (with private fields)//////////////////////////////

/*
class BankAccount {
  #balance; // private field

  constructor(initialBalance) {
    this.#balance = initialBalance;
  }

  deposit(amount) {
    this.#balance += amount;
  }

  withdraw(amount) {
    if (amount <= this.#balance) {
      this.#balance -= amount;
    } else {
      console.log("Insufficient funds");
    }
  }

  getBalance() {
    return this.#balance;
  }
}

let acc = new BankAccount(1000);
acc.deposit(200);
console.log(acc.getBalance()); // 1200
console.log(acc.#balance); // ❌ SyntaxError (hidden)
*/

///////////////////////////3. Using Abstract Base Classes (Manual)/////////////////////////

class Shape {
  area() {
    throw new Error("Method 'area()' must be implemented.");
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  area() {
    return Math.PI * this.radius * this.radius;
  }
}

let c = new Circle(5);
console.log(c.area()); // 78.54

//Here, Shape defines the abstract idea of a shape, and subclasses implement it.
