// ***************** Primitive Data Types *****************

// 7 categories: String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail; // undefined

// Symbol: Used to make values unique
const id = Symbol('123');
const anotherId = Symbol('123');
// console.log(id === anotherId); // Outputs: false

// BigInt: For exceptionally large numbers (append 'n' at the end)
const bigNumber = 3456543576654356754n;


// ***************** Reference (Non-Primitive) Data Types *****************

// Arrays, Objects, Functions

// Array
const heroes = ["shaktiman", "naagraj", "doga"];

// Object
let myObj = {
    name: "hitesh",
    age: 22
}

// Function (treated as a variable)
const myFunction = function() {
    console.log("Hello world");
}

// ***************** Checking Data Types using typeof *****************

console.log(typeof bigNumber);   // bigint
console.log(typeof outsideTemp); // object (Known quirk in JS)
console.log(typeof scoreValue);  // number
console.log(typeof myFunction);  // function (technically an "object function")
console.log(typeof id);          // symbol


// ********************************************************************
// ***************** Memory: Stack and Heap ***************************
// ********************************************************************

// Stack Memory is used for Primitive Data Types (Provides a COPY of the value)
let myYoutubename = "hiteshchoudharydotcom";
let anothername = myYoutubename;
anothername = "chaiaurcode";

console.log(myYoutubename); // Outputs: hiteshchoudharydotcom
console.log(anothername);   // Outputs: chaiaurcode

// Heap Memory is used for Reference Data Types (Provides a REFERENCE to the original value)
let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne;
userTwo.email = "hitesh@google.com";

console.log(userOne.email); // Outputs: hitesh@google.com
console.log(userTwo.email); // Outputs: hitesh@google.com