// *********************** Basic For Loop ***********************

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        // console.log("5 is best number");
    }
    // console.log(element);
}

// console.log(element); // Throws Error: element is not defined (Block Scope)


// *********************** Nested For Loops ***********************

for (let i = 1; i <= 10; i++) {
    // console.log(`Outer loop value: ${i}`);
    for (let j = 1; j <= 10; j++) {
        // console.log(`Inner loop value ${j} and inner loop ${i}`);
        
        // Printing a Multiplication Table (1 to 10)
        // console.log(i + ' * ' + j + ' = ' + i*j);
    }
}


// *********************** Looping Through an Array ***********************

let myArray = ["flash", "batman", "superman"];
// console.log(myArray.length);

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
}
// Note: If you use index <= myArray.length, it will go out of bounds and print 'undefined' at the end.


// *********************** Break and Continue ***********************

// 1. Break Keyword
// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`Detected 5`);
//         break; // Exits the loop completely
//     }
//     console.log(`Value of i is ${index}`);
// }

// 2. Continue Keyword
for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue; // Skips the current iteration and continues the loop
    }
    console.log(`Value of i is ${index}`);
}