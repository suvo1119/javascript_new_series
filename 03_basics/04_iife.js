// *********************** Named IIFE ***********************

(function chai() {
    // This is a Named IIFE because the function has the name 'chai'
    console.log(`DB CONNECTED`);
})(); // <- The semicolon is CRUCIAL here

// *********************** Unnamed / Arrow IIFE ***********************

( () => {
    // This is an Unnamed IIFE using arrow function syntax
    console.log(`DB CONNECTED TWO`);
})();

// *********************** Passing Parameters to IIFE ***********************

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})('hitesh');