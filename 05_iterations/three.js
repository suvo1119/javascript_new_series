// *********************** for...of Loop on Arrays ***********************

const arr = [3-7];

// The syntax is: for (const iterator of object) 
// Note: "object" here refers to any iterable structure, not just JS Objects.
for (const num of arr) {
    // console.log(num);
}


// *********************** for...of Loop on Strings ***********************

const greetings = "Hello World!";

for (const greet of greetings) {
    // console.log(`Each char is ${greet}`);
}


// *********************** Maps ***********************
// Maps hold key-value pairs and remember the original insertion order.
// They strictly enforce unique keys.

const map = new Map();
map.set('IN', "India");
map.set('USA', "United States of America");
map.set('Fr', "France");

// Attempting to add a duplicate key will simply be ignored
map.set('IN', "India"); 

// console.log(map);


// *********************** Iterating over Maps ***********************

// Using array destructuring [key, value] to extract data cleanly
for (const [key, value] of map) {
    // console.log(key, ':-', value);
}


// *********************** for...of Loop on Objects (Does NOT work) ***********************

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
};

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
// }
// Throws Error: myObject is not iterable