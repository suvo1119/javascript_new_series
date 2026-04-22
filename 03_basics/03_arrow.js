const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        // console.log(this); // Prints the current context (the user object)
    }
}

// user.welcomeMessage(); 
// user.username = "sam"; // Changing the current context
// user.welcomeMessage(); // Now prints "sam , welcome to website"

// *********************** Global 'this' ***********************
console.log(this); // Outputs: {} in Node.js environment

// *********************** 'this' inside functions ***********************

function chaiRegular() {
    let username = "hitesh";
    console.log(this.username); // Outputs: undefined
}
// chaiRegular();

// *********************** Arrow Functions ***********************

const chaiArrow = () => {
    let username = "hitesh";
    console.log(this); // Outputs: {}
}
// chaiArrow();


// 1. Explicit Return (Using curly braces {} requires the 'return' keyword)
// const addTwo = (num1, num2) => {
//     return num1 + num2;
// }

// 2. Implicit Return (Assumes the return on a single line)
// const addTwo = (num1, num2) => num1 + num2;

// 3. Implicit Return with Parentheses (Highly used in React)
// const addTwo = (num1, num2) => ( num1 + num2 );

// 4. Returning an Object Implicitly (Must be wrapped in parentheses)
const addTwo = (num1, num2) => ({username: "hitesh"});

console.log(addTwo(3, 4));
