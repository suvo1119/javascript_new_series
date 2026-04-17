// *********************** Numbers ***********************

const score = 400;
// console.log(score); // Outputs: 400

// Explicitly defining a number using the Number object
const balance = new Number(100);
// console.log(balance); // Outputs: [Number: 100]

// Number Methods
// console.log(balance.toString().length); // Converts to string, length is 3
// console.log(balance.toFixed(2)); // Outputs: 100.00 (Highly useful for e-commerce calculations)

const otherNumber = 23.8966;
// console.log(otherNumber.toPrecision(3)); // Outputs: 23.9
/* 
Note on toPrecision: 
If the number was 123.8966, it would output 124. 
If it was 1123.8966, it would return an exponential value like 1.12e+3.
Priority is given to digits before the decimal.
*/

const hundreds = 1000000;
// console.log(hundreds.toLocaleString('en-IN')); // Outputs: 10,00,000 (Indian Number System)

// Built-in Number Properties
// console.log(Number.MAX_VALUE);
// console.log(Number.MIN_VALUE);
// console.log(Number.MAX_SAFE_INTEGER);


// *********************** Maths ***********************

// console.log(Math); // An object holding various mathematical properties and methods

// Standard Math Methods
// console.log(Math.abs(-4)); // Outputs: 4 (Converts negative to positive)
// console.log(Math.round(4.6)); // Outputs: 5 (Standard round off)
// console.log(Math.ceil(4.2)); // Outputs: 5 (Ceiling: forces round up)
// console.log(Math.floor(4.9)); // Outputs: 4 (Floor: forces round down)
// console.log(Math.min(4, 3, 6, 8)); // Outputs: 3
// console.log(Math.max(4, 3, 6, 8)); // Outputs: 8

// ***************** Math.random() *****************

console.log(Math.random()); // Gives a random decimal between 0 and 1
console.log((Math.random() * 10) + 1); // Multiplies by 10 and adds 1 to guarantee it's never 0
console.log(Math.floor(Math.random() * 10) + 1); // Rounds down to a clean integer (1 to 10)

// Generic Formula to find a random integer between a specific min and max range:
const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min); 
