function Phone(brand, model) {
    this.brand = brand;
    this.model = model;
    this.details = function () {
        console.log(this.brand + this.model);
    };
}

function Rectangle(width, heigh) {
    this.width = width;
    this.heigh = heigh;
    this.area = function () {
        return this.width * this.heigh;
    }
}

function BankAccount(owner, balance) {
    this.owner = owner;
    this.balance = balance;
    this.deposit = function (amount) {
        this.balance += amount;
    }
    this.withdraw = function (amount) {
        if (balance >= amount) {
            this.balance -= amount;
        }
    }
    this.checkBalance = function () {
        console.log(balance);
    }
}

function Animal(name) {
    this.name = name;
    Animal.speak = function () {
        return `${this.name} makes a sound`;
    };
}

function Dog(name) {
    Animal.call(this, name);
    this.bark = function () {
        return `${this.name} barks`;
    };
}


function Shape() {
    this.area = function () {
        return 0;
    };
}

function Circle(radius) {
    this.radius = radius;
    this.area = function () {
        return Math.PI * Math.pow(this.radius, 2);
    };
}

function Square(side) {
    this.side = side;
    this.area = function () {
        return Math.pow(this.side, 2);
    };
}

//ES6

class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }
    info() {
        console.log(this.title + " by " + this.author;)
    }
}

class Person {
    constructor(name) {
        this.name = name;
    }
    greet() {
        console.log("Hello, I'm " + this.name);
    }
}

class Student extends Person {
    constructor(name, school) {
        super(name);
        this.school = school;
    }
    study() {
        console.log(this.name + " is studying at " + this.school);
    }
}

class Employee {
    constructor(salary) {
        this.#salary = salary;
    }
    getSalary() {
        return this.#salary;
    }

    // Base work method
    work() {
        return "Employee is working";
    }
}

class Manager extends Employee {
    constructor(salary) {
        // Call the parent class constructor using super()
        super(salary);
    }

    // Override the work method (Polymorphism)
    work() {
        return "Manager is managing";
    }
}
