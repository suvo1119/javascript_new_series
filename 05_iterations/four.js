// *********************** for...in Loop on Objects ***********************

const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: 'ruby',
    swift: 'swift by apple'
};

for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`);
}

// *********************** for...in Loop on Arrays ***********************

const programming = ["js", "rb", "py", "java", "cpp"];

for (const key in programming) {
    // console.log(key); // Prints the index keys: 0, 1, 2, 3, 4
    // console.log(programming[key]); // Prints the actual values
}

// *********************** for...in Loop on Maps ***********************

const map = new Map();
map.set('IN', "India");
map.set('USA', "United States of America");
map.set('Fr', "France");

for (const key in map) {
    // console.log(key); 
    // This will NOT print anything. Maps are not iterable via for...in loops.
}