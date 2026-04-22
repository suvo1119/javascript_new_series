const userEmail = "h@hitesh.ai"; 

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// *********************** Falsy Values ***********************
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// *********************** Truthy Values ***********************
// "0", 'false', " ", [], {}, function(){}


// *********************** Checking Empty Arrays & Objects ***********************

// Checking if an Array is empty
// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

const emptyObj = {};

// Checking if an Object is empty
if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}


// *********************** Nullish Coalescing Operator (??) ***********************
// Specifically handles 'null' and 'undefined'

let val1;
// val1 = 5 ?? 10;          // Outputs: 5
// val1 = null ?? 10;       // Outputs: 10
// val1 = undefined ?? 15;  // Outputs: 15
val1 = null ?? 10 ?? 20;    // Outputs: 10

console.log(val1);


// *********************** Ternary Operator ***********************
// Syntax: condition ? true : false

const iceTeaPrice = 100;
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");