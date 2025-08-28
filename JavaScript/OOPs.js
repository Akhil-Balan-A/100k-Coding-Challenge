/**
 
# Object-Oriented Programming (OOP) in JavaScript

## What is OOP?
OOP is a programming paradigm that organizes code into **objects** containing both **data** (properties) and **behavior** (methods), rather than just functions and logic.

## class: a class is a blue print and you create object from it. in js we can use class keyword or constructor function to create a blue print. that include data(properties) and methods(functions) 

## Object:a object is a instance of a class. It's the concrete, real-world item created from a blueprint (the class). While all objects of the same class share the same structure and behavior, each one has its own unique set of data for its properties.



## The Four Pillars of OOP

### 1. Encapsulation
**What it is**: Bundling data and methods that operate on that data within one unit (object/class)
**Why it is**: Prevents external code from directly accessing internal state, reducing bugs
**When it's used**: When you need data protection and controlled access

```javascript
// BEFORE (Without Encapsulation)
let bankAccountBalance = 1000; // Global variable - dangerous!

function withdraw(amount) {
    bankAccountBalance -= amount; // Direct access - risky!
}

// AFTER (With Encapsulation)
class BankAccount {
    #balance; // Private field (# makes it truly private in modern JS)

    constructor(initialBalance) {
        this.#balance = initialBalance;
    }

    // Controlled access through methods
    withdraw(amount) {
        if (amount > 0 && amount <= this.#balance) {
            this.#balance -= amount;
            return amount;
        }
        throw new Error('Invalid withdrawal amount');
    }

    getBalance() {
        return this.#balance;
    }

    // Real-life validation
    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
        } else {
            throw new Error('Deposit amount must be positive');
        }
    }
}

// Usage
const myAccount = new BankAccount(1000);
myAccount.withdraw(200);
console.log(myAccount.getBalance()); // 800
// console.log(myAccount.#balance); // Error: Private field
```

**Real-life Problem Solved**: Banking system where balance shouldn't be directly modified

### 2. Inheritance
**What it is**: Creating new classes based on existing classes, inheriting their properties and methods
**Why it is**: Code reuse, hierarchical relationships, polymorphism
**When it's used**: When you have shared behavior across multiple types

```javascript
// Base class
class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    start() {
        return `${this.make} ${this.model} is starting...`;
    }

    stop() {
        return `${this.make} ${this.model} is stopping...`;
    }
}

// Derived class - Inheritance
class Car extends Vehicle {
    constructor(make, model, year, fuelType) {
        super(make, model, year); // Call parent constructor
        this.fuelType = fuelType;
    }

    // Additional method specific to Car
    refuel() {
        return `Refueling ${this.make} with ${this.fuelType}`;
    }
}

class ElectricCar extends Car {
    constructor(make, model, year, batteryCapacity) {
        super(make, model, year, 'electricity');
        this.batteryCapacity = batteryCapacity;
    }

    // Override parent method
    refuel() {
        return `Charging ${this.make} with ${this.batteryCapacity}kWh battery`;
    }
}

// Usage
const myCar = new Car('Toyota', 'Camry', 2023, 'gasoline');
console.log(myCar.start()); // Toyota Camry is starting...
console.log(myCar.refuel()); // Refueling Toyota with gasoline

const myTesla = new ElectricCar('Tesla', 'Model 3', 2023, 75);
console.log(myTesla.refuel()); // Charging Tesla with 75kWh battery
```

**Real-life Problem Solved**: Transportation system with different vehicle types sharing common behaviors but having unique features

### 3. Polymorphism
**What it is**: Same interface, different implementations
**Why it is**: Flexibility, interchangeable objects, simplified code
**When it's used**: When you want different objects to respond to the same method in different ways

```javascript
class PaymentProcessor {
    processPayment(amount) {
        throw new Error('processPayment must be implemented');
    }
}

class CreditCardPayment extends PaymentProcessor {
    processPayment(amount) {
        return `Processing credit card payment of $${amount}`;
    }
}

class PayPalPayment extends PaymentProcessor {
    processPayment(amount) {
        return `Processing PayPal payment of $${amount}`;
    }
}

class CryptoPayment extends PaymentProcessor {
    processPayment(amount) {
        return `Processing cryptocurrency payment of $${amount}`;
    }
}

// Usage - Same method, different behaviors
const payments = [
    new CreditCardPayment(),
    new PayPalPayment(),
    new CryptoPayment()
];

payments.forEach(payment => {
    console.log(payment.processPayment(100));
    // Different output for each payment type
});

// Real-life e-commerce example
class ShoppingCart {
    constructor() {
        this.items = [];
        this.paymentProcessor = null;
    }

    setPaymentProcessor(processor) {
        this.paymentProcessor = processor;
    }

    checkout() {
        const total = this.items.reduce((sum, item) => sum + item.price, 0);
        return this.paymentProcessor.processPayment(total);
    }
}

const cart = new ShoppingCart();
cart.items = [{ name: 'Book', price: 20 }, { name: 'Pen', price: 5 }];
cart.setPaymentProcessor(new PayPalPayment());
console.log(cart.checkout()); // Processing PayPal payment of $25
```

**Real-life Problem Solved**: Payment processing system supporting multiple payment methods with the same interface

### 4. Abstraction
**What it is**: Hiding complex implementation details, showing only essential features
**Why it is**: Simplifies complex systems, reduces complexity for users
**When it's used**: When you want to provide simple interfaces to complex operations

```javascript
// Abstract concept - Users don't need to know how email sending works internally
class EmailService {
    constructor() {
        // Complex setup: SMTP configuration, authentication, etc.
        this.isConfigured = false;
    }

    #configureService() {
        // Complex configuration logic
        console.log('Configuring email service...');
        this.isConfigured = true;
    }

    #validateEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    // Simple public interface
    sendEmail(to, subject, body) {
        if (!this.isConfigured) {
            this.#configureService();
        }

        if (!this.#validateEmail(to)) {
            throw new Error('Invalid email address');
        }

        // Complex email sending logic hidden from user
        console.log(`Sending email to: ${to}`);
        console.log(`Subject: ${subject}`);
        console.log(`Body: ${body}`);
        
        return true;
    }
}

// Usage - Simple interface for complex operation
const emailService = new EmailService();
emailService.sendEmail(
    'user@example.com',
    'Welcome!',
    'Thank you for signing up!'
);

// User doesn't need to know about:
// - SMTP configuration
// - Email validation
// - Authentication
// - Error handling
// - Retry mechanisms
```

**Real-life Problem Solved**: Email service where users just want to send emails without understanding the complex backend operations

## Modern JavaScript OOP Features

### 1. Classes (ES6)
```javascript
class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    // Method
    getProfile() {
        return `${this.name} (${this.email})`;
    }

    // Static method
    static validateEmail(email) {
        return email.includes('@');
    }
}
```

### 2. Private Fields (ES2022)
```javascript
class SecureData {
    #secretKey; // Truly private

    constructor(key) {
        this.#secretKey = key;
    }

    // Public method to access private data safely
    getMaskedKey() {
        return this.#secretKey.slice(-4).padStart(this.#secretKey.length, '*');
    }
}
```

### 3. Getters and Setters
```javascript
class Temperature {
    constructor(celsius) {
        this._celsius = celsius;
    }

    get fahrenheit() {
        return this._celsius * 9/5 + 32;
    }

    set fahrenheit(value) {
        this._celsius = (value - 32) * 5/9;
    }
}

const temp = new Temperature(25);
console.log(temp.fahrenheit); // 77 (getter)
temp.fahrenheit = 100; // setter
```

## Real-World Application: E-commerce System

```javascript
// Abstraction
class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }

    // Encapsulation
    #applyDiscount(percentage) {
        return this.price * (1 - percentage/100);
    }

    getDiscountedPrice(percentage) {
        if (percentage < 0 || percentage > 100) {
            throw new Error('Invalid discount percentage');
        }
        return this.#applyDiscount(percentage);
    }
}

// Inheritance
class DigitalProduct extends Product {
    constructor(id, name, price, downloadLink) {
        super(id, name, price);
        this.downloadLink = downloadLink;
    }

    // Polymorphism
    deliver() {
        return `Download link sent: ${this.downloadLink}`;
    }
}

class PhysicalProduct extends Product {
    constructor(id, name, price, weight) {
        super(id, name, price);
        this.weight = weight;
    }

    // Polymorphism - different implementation
    deliver() {
        return `Product shipped. Weight: ${this.weight}kg`;
    }
}

// Usage
const products = [
    new DigitalProduct(1, 'E-book', 20, 'https://example.com/download'),
    new PhysicalProduct(2, 'Book', 25, 0.5)
];

products.forEach(product => {
    console.log(product.deliver());
    // Different delivery methods for different product types
});
```

## When to Use OOP in JavaScript

1. **Large Applications**: When codebase grows beyond simple scripts
2. **Complex Data Structures**: When you have many related entities
3. **Team Development**: When multiple developers work on same codebase
4. **Code Reusability**: When you need to reuse components
5. **Maintainability**: When you need organized, scalable code

## When NOT to Use OOP

1. **Simple Scripts**: For small, one-time tasks
2. **Performance-Critical Code**: Functional programming can be faster
3. **FP Preference**: When functional programming fits better

OOP in JavaScript provides structure, organization, and maintainability for complex applications while keeping the flexibility of the language!
 
 
 
 
 
 
 
 
 */