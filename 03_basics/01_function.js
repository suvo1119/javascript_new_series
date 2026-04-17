// *********************** Function Basics ***********************

function sayMyName() {
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName(); // Execution
// sayMyName    // Reference 

// *********************** Parameters, Arguments & Return ***********************

function addTwoNumbers(number1, number2) {
    // let result = number1 + number2;
    // return result;
    return number1 + number2;
    
    console.log("Hitesh"); // Unreachable code (will never execute)
}

const result = addTwoNumbers(3, 4);
// console.log("Result: ", result);

// *********************** Default Parameters & Validation ***********************

function loginUserMessage(username = "sam") {
    if(!username) { // Equivalent to checking if username === undefined
        console.log("Please enter a username");
        return; 
    }
    return `${username} just logged in`;
}

// console.log(loginUserMessage("hitesh"));
// console.log(loginUserMessage()); // Prints default: "sam just logged in"


// *********************** The Rest Operator (...) ***********************

function calculateCartPrice(val1, val2, ...num1) {
    return num1;
}

// console.log(calculateCartPrice(200, 400, 500, 2000)); // Outputs: [ 500, 2000 ]


// *********************** Passing Objects to Functions ***********************

const user = {
    username: "hitesh",
    price: 199
}

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user);
handleObject({
    username: "sam",
    price: 399
}); // Passing an object directly into the argument


// *********************** Passing Arrays to Functions ***********************

const myNewArray = [3-5];

function returnSecondValue(getArray) {
    return getArray[6]; 
}

// console.log(returnSecondValue(myNewArray)); // Outputs: 400