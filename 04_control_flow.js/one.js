// *********************** If Statement & Comparisons ***********************

// Comparison Operators: <, >, <=, >=, ==, !=, === (strict check), !==

const isUserloggedIn = true;
const temperature = 41;

// if ( temperature < 50 ){
//     console.log("less than 50");
// } else {
//     console.log("temperature is greater than 50");
// }

// console.log("Execute"); // This will execute regardless of the if-else block


// *********************** Scope within If-Else ***********************

// const score = 200;
// if (score > 100) {
//     let power = "fly";
//     console.log(`User power: ${power}`);
// }

// console.log(`User power: ${power}`); // Throws an Error: power is not defined


// *********************** Shorthand Notation (Implicit Scope) ***********************

const balance = 1000;

// Bad Practice: Writing implicit scope with commas
// if (balance > 500) console.log("test"), console.log("test2"); 


// *********************** Else If (Multiple Conditions) ***********************

// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
// } else if (balance < 900) {
//     console.log("less than 900");
// } else {
//     console.log("less than 1200");
// }


// *********************** Logical Operators (&& and ||) ***********************

const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

// AND (&&) Operator: ALL conditions must be true
if (userLoggedIn && debitCard && 2==2) {
    console.log("Allow to buy courses");
}

// OR (||) Operator: At least ONE condition must be true
if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}
