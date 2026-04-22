// *********************** While Loop ***********************

let index = 0; // Initialization

while (index <= 10) { // Condition Check
    // console.log(`Value of index is ${index}`);
    index = index + 2; // Increment/Change (Crucial to avoid infinite loops)
}

// *********************** While Loop with Arrays ***********************

let myArray = ["flash", "batman", "superman"];
let arr = 0;

while (arr < myArray.length) {
    // console.log(`Value is ${myArray[arr]}`);
    arr = arr + 1; // Or arr++
}

// *********************** Do-While Loop ***********************

// let score = 1;
let score = 11; // Special case to demonstrate do-while behavior

do {
    console.log(`Score is ${score}`);
    score++;
} while (score <= 10);




