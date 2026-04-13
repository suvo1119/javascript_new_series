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

