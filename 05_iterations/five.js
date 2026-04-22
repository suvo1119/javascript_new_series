const coding = ["js", "ruby", "java", "python", "cpp"];

// *********************** 1. Standard Callback Function ***********************

// A callback function has no name. It automatically receives the current item as a parameter.
coding.forEach(function (val) {
    // console.log(val);
});


// *********************** 2. Arrow Callback Function ***********************

coding.forEach((item) => {
    // console.log(item);
});


// *********************** 3. Passing an External Function Reference ***********************

function printMe(item) {
    console.log(item);
}

// Pass only the reference (printMe), do not execute it (printMe())
// coding.forEach(printMe); 


// *********************** 4. Parameters Available in forEach ***********************

coding.forEach((item, index, arr) => {
    // console.log(item, index, arr); 
    // Outputs the current item, its index, and the entire array structure
});


// *********************** 5. Iterating Over an Array of Objects ***********************
// This is an incredibly common scenario when fetching data from a database/API

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    }
];

myCoding.forEach((item) => {
    console.log(item.languageName); // Easily extracts specific data from each object
});