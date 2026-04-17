// *********************** Array Declaration ***********************

const myArr = [1,2,3,4,5];
const myHeroes = ["shaktiman", "naagraj"]; // Mixed data types are also allowed
const myArr2 = new Array(1, 2, 3, 4);

// console.log(myArr[1]); // Accessing elements uses 0-based indexing

// *********************** Array Methods ***********************

// myArr.push(6);     // Adds 6 to the end of the array
// myArr.push(7);     // Adds 7 to the end
// myArr.pop();       // Removes the last element from the array

// myArr.unshift(9);  // Adds 9 to the start of the array (shifts all other elements)
// myArr.shift();     // Removes the first element from the array

// console.log(myArr.includes(9)); // Outputs boolean (true/false)
// console.log(myArr.indexOf(3));  // Outputs the index, or -1 if the element doesn't exist

// const newArr = myArr.join(); // Binds the array and converts it into a comma-separated string

// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr); // Outputs: string


// *********************** slice vs splice ***********************

console.log("A (Original)", myArr);

const myn1 = myArr.slice(1, 3);
console.log("slice result: ", myn1);
console.log("B (After slice)", myArr);

const myn2 = myArr.splice(1, 3);
console.log("C (After splice)", myArr);
console.log("splice result: ", myn2);
