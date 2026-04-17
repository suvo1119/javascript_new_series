// *********************** Conversions ***********************

let score = "33abc"; // Tested with 33, "33", "33abc", null, undefined, true, false, "hitesh"

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);

/*
Notes on Number Conversion:
"33" => 33
"33abc" => NaN (Not a Number)
null => 0
undefined => NaN
true => 1; false => 0
"hitesh" => NaN
*/

let isLoggedIn = 1; // Tested with 1, 0, "", "hitesh"
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

/*
Notes on Boolean Conversion:
1 => true; 0 => false
"" => false
"hitesh" => true
*/

let someNumber = 33;
let stringNumber = String(someNumber);
console.log(stringNumber);
console.log(typeof stringNumber);

// *********************** Operations ***********************

let value = 3;
let negValue = -value;
// console.log(negValue);

// Standard Math Operations
// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3); // Power/Exponent
// console.log(2/3);
// console.log(2%3);  // Remainder/Modulo

let str1 = "hello";
let str2 = " hitesh";
let str3 = str1 + str2;
// console.log(str3);

// Tricky String Concatenations
// console.log("1" + 2);      // Outputs: 12
// console.log(1 + "2");      // Outputs: 12
// console.log("1" + 2 + 2);  // Outputs: 122 
// console.log(1 + 2 + "2");  // Outputs: 32

// Use parentheses instead of writing confusing code
// console.log( (3 + 4) * 5 % 3);

// Tricky Conversions (Not Recommended for Clean Code)
// console.log(+true); // Outputs: 1
// console.log(+"");   // Outputs: 0

// Tricky Assignments (Not Recommended for Clean Code)
let num1, num2, num3;
// num1 = num2 = num3 = 2 + 2; 

let gameCounter = 100;
++gameCounter; // Prefix and Postfix increments
console.log(gameCounter);