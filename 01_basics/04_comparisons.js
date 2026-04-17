// ***************** Basic Comparisons *****************
// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

// ***************** Comparing Different Data Types *****************
// console.log("2" > 1);  // Outputs: true
// console.log("02" > 1); // Outputs: true

// ***************** Tricky Comparisons (Not Recommended) *****************
console.log(null > 0);  // Outputs: false
console.log(null == 0); // Outputs: false
console.log(null >= 0); // Outputs: true

/*
Reason: An equality check (==) and comparisons (> < >= <=) work differently in JavaScript. 
Comparisons convert null to a number, treating it as 0. 
That's why null >= 0 is true and null > 0 is false.
*/

console.log(undefined == 0); // Outputs: false
console.log(undefined > 0);  // Outputs: false
console.log(undefined < 0);  // Outputs: false

// ***************** Strict Check (===) *****************
console.log("2" === 2); // Outputs: false