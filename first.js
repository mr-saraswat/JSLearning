console.log("Hello, World!");

// Variables and Data Types
// Variable declaration with var (older approach)
var name = "John";
var age = 25;
var isStudent = true;

// Modern variable declarations (ES6+)
let message = "Hello World";
const PI = 3.14159;

// Data types
let stringVar = "Hello";           // String
let numberVar = 42;                // Number
let booleanVar = true;             // Boolean
let nullVar = null;                // Null
let undefinedVar;                  // Undefined
let objectVar = {name: "John"};    // Object
let arrayVar = [1, 2, 3];          // Array

// Control Structures

// If-Else Statements
// Basic if statement
if (age >= 18) {
    console.log("You are an adult");
}

// If-else statement
if (age < 18) {
    console.log("You are a minor");
} else {
    console.log("You are an adult");
}

// If-else if-else statement
let score = 85;
let grade;

if (score >= 90) {
    grade = "A";
} else if (score >= 80) {
    grade = "B";
} else if (score >= 70) {
    grade = "C";
} else {
    grade = "F";
}
console.log("Grade: " + grade);

// Switch Case
let day = 3;
let dayName;

switch (day) {
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";
        break;
    case 4:
        dayName = "Thursday";
        break;
    case 5:
        dayName = "Friday";
        break;
    case 6:
        dayName = "Saturday";
        break;
    case 7:
        dayName = "Sunday";
        break;
    default:
        dayName = "Invalid day";
}

console.log("Day: " + dayName);

// Loops

// For Loop
for (let i = 0; i < 5; i++) {
    console.log("Iteration: " + i);
}

// For loop with array
let fruits = ["apple", "banana", "orange"];
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// While Loop
let count = 0;
while (count < 5) {
    console.log("Count: " + count);
    count++;
}

// Do-While Loop
let num = 0;
do {
    console.log("Number: " + num);
    num++;
} while (num < 3);

// Functions
// Function declaration
function greet(name) {
    return "Hello, " + name;
}

// Function expression
const add = function(a, b) {
    return a + b;
};

// Arrow function (ES6+)
const multiply = (a, b) => a * b;

// Calling functions
console.log(greet("Alice")); // Hello, Alice
console.log(add(5, 3));      // 8
console.log(multiply(4, 6)); // 24

// Arrays and Objects

// Arrays
let colors = ["red", "green", "blue"];

// Accessing elements
console.log(colors[0]); // red

// Array methods
colors.push("yellow");        // Add to end
console.log("After push:", colors);
colors.pop();                 // Remove from end
console.log("After pop:", colors);

// Array Instantiation Practice
let numbers = [10, 20, 30, 40, 50];             // Array literal
let emptyArray = [];                            // Empty array
let mixedArray = ["JavaScript", 101, true];     // Mixed values
let generatedArray = Array.from({ length: 5 }, function(_, index) {
    return index + 1;
});                                             // [1, 2, 3, 4, 5]

console.log("Numbers:", numbers);
console.log("Empty array:", emptyArray);
console.log("Mixed array:", mixedArray);
console.log("Generated array:", generatedArray);

// More Array Function Practice
numbers.unshift(0);                             // Add to beginning
console.log("After unshift:", numbers);

numbers.shift();                                // Remove from beginning
console.log("After shift:", numbers);

let doubledNumbers = numbers.map(function(number) {
    return number * 2;
});
console.log("Doubled numbers:", doubledNumbers);

let numbersGreaterThan25 = numbers.filter(function(number) {
    return number > 25;
});
console.log("Numbers greater than 25:", numbersGreaterThan25);

let total = numbers.reduce(function(sum, number) {
    return sum + number;
}, 0);
console.log("Total:", total);

console.log("Includes 30:", numbers.includes(30));
console.log("Index of 40:", numbers.indexOf(40));

let slicedNumbers = numbers.slice(1, 4);        // Copy from index 1 up to 3
console.log("Sliced numbers:", slicedNumbers);

let joinedNumbers = numbers.join(" - ");
console.log("Joined numbers:", joinedNumbers);

numbers.forEach(function(number, index) {
    console.log("Number at index " + index + ": " + number);
});

// Objects
let person = {
    name: "John",
    age: 30,
    isEmployed: true,
    greet: function() {
        return "Hello, I'm " + this.name;
    }
};

// Accessing properties
console.log(person.name);     // John
console.log(person["age"]);   // 30
console.log(person.greet());  // Hello, I'm John

// Template Literals (ES6+)
let userName = "Alice";
let age2 = 25;
let templateMessage = `Hello, my name is ${userName} and I am ${age2} years old.`;
console.log(templateMessage); // Hello, my name is Alice and I am 25 years old.

// Comparison Operators
console.log(5 > 3);      // true
console.log(5 == "5");   // true (loose equality)
console.log(5 === "5");  // false (strict equality)
