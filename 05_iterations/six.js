// *********************** The forEach Return Trap ***********************

const coding = ["js", "ruby", "java", "python", "cpp"];

const values = coding.forEach((item) => {
    // console.log(item);
    return item; 
});

// console.log(values); // Outputs: undefined
// Note: forEach NEVER returns a value, even if you explicitly use the 'return' keyword [4, 5].


// *********************** The filter() Method ***********************

const myNums = [6-15];

// 1. Implicit Return (No curly braces)
// const newNums = myNums.filter( (num) => num > 4 );

// 2. Explicit Return (With curly braces - Highly Common Mistake)
// const newNums = myNums.filter( (num) => {
//     return num > 4; // You MUST use the 'return' keyword if opening a block scope {}
// } );

// console.log(newNums); // Outputs: [ 5, 6, 7, 8, 9, 10 ]


// *********************** Achieving Filter Logic using forEach ***********************

// const newNums = [];

// myNums.forEach( (num) => {
//     if (num > 4) {
//         newNums.push(num);
//     }
// } );

// console.log(newNums);


// *********************** Real-World Example (Database Filtering) ***********************

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

// Query 1: Give me all books where the genre is 'History'
let userBooks = books.filter( (bk) => bk.genre === 'History' );

// Query 2: Give me books published after 1995 AND where the genre is 'History'
userBooks = books.filter( (bk) => { 
    return bk.publish >= 1995 && bk.genre === 'History';
} );

console.log(userBooks);