const name = "hitesh";
const repoCount = 50;

// Outdated Concatenation (Not Recommended)
// console.log(name + repoCount + " Value");

// Modern Syntax: String Interpolation
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

// Declaring String as an Object
const gameName = new String('hitesh-hc-com');

// Accessing keys and prototype
// console.log(gameName);
// console.log(gameName.__proto__);

// String Methods
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

// Substrings and Slicing
const newString = gameName.substring(0, 4);
console.log(newString);

const anotherString = gameName.slice(-8, 4);
console.log(anotherString);

// Trimming Whitespace
const newStringOne = "   hitesh    ";
console.log(newStringOne);
console.log(newStringOne.trim());

// Replacing and Searching in Strings (e.g., URLs)
const url = "https://hitesh.com/hitesh%20choudhary";
console.log(url.replace('%20', '-'));
console.log(url.includes('hitesh'));

// Converting a String to an Array
console.log(gameName.split('-'));