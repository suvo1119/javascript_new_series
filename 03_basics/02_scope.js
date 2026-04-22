// *********************** Global vs Block Scope ***********************

// var c = 300 // Avoid using var
let a = 300

if (true) {
    let a = 10
    const b = 20
    // var c = 30 
    // console.log("INNER: ", a); // Outputs: 10
}

// console.log(a); // Outputs: 300
// console.log(b); // Throws Error: b is not defined
// console.log(c); // Outputs: 30 (Issue with var leaking out of block scope)


// *********************** Nested Scope (Closures) ***********************

function one() {
    const username = "hitesh"

    function two() {
        const website = "youtube"
        console.log(username); // Child can access parent's variables
    }
    
    // console.log(website); // Throws Error: website is not defined

    two()
}

// one()


// *********************** Nested Scope in if/else ***********************

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website); // Outputs: hitesh youtube
    }
    // console.log(website); // Throws Error: website is not defined
}

// console.log(username); // Throws Error: username is not defined


// *********************** Hoisting / Function Declarations ***********************

// 1. Standard Function Declaration
console.log(addone(5)); // Works fine (Outputs: 6)

function addone(num) {
    return num + 1
}

// 2. Function Expression (Holding function in a variable)
// console.log(addTwo(5)); // Throws Error: Cannot access 'addTwo' before initialization

const addTwo = function(num) {
    return num + 2
}