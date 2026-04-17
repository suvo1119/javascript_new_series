const marvel_heroes = ["thor", "Ironman", "spiderman"];
const dc_heroes = ["superman", "flash", "batman"];

// *********************** push() vs concat() ***********************

// marvel_heroes.push(dc_heroes);
// console.log(marvel_heroes); 
// Problem: This does NOT merge them. It pushes the entire dc_heroes array as a single 4th element [1, 2].
// To access "flash" in this scenario, you would need messy syntax like: marvel_heroes[3][4] [2, 5].

// concat() returns a NEW merged array without modifying the original [6, 7].
const allHeroes = marvel_heroes.concat(dc_heroes);
// console.log(allHeroes); 


// *********************** Spread Operator (...) ***********************

// The highly preferred modern way to combine arrays [7, 8].
const all_new_heroes = [...marvel_heroes, ...dc_heroes]; 
console.log(all_new_heroes); [8]


// *********************** Flattening Arrays ***********************

const another_array = [1, 2, 3, [9-11], 7, [6, 7, [9, 10]]];

// flat() resolves nested arrays into a single-level array. 
// Passing 'Infinity' automatically handles all depth levels [12, 13].
const real_another_array = another_array.flat(Infinity); [13]
console.log(real_another_array); [14]


// *********************** Array Static Methods ***********************
// Useful for data scraping when NodeLists or Objects need to be converted to Arrays [14].

console.log(Array.isArray("Hitesh")); // Outputs: false [14, 15]
console.log(Array.from("Hitesh"));    // Outputs: ['H', 'i', 't', 'e', 's', 'h'] [15]

// TRICKY INTERVIEW QUESTION:
console.log(Array.from({name: "hitesh"})); // Outputs: [] (Empty array) [15, 16]

let score1 = 100;
let score2 = 200;
let score3 = 300;

// Array.of() bundles independent variables or values into a new array [16, 17].
console.log(Array.of(score1, score2, score3)); // Outputs: [18-20] [17]