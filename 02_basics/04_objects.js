// *********************** Singleton vs Literal ***********************

// const tinderUser = new Object(); // Creates a Singleton object
const tinderUser = {}; // Creates a non-singleton object (Literal)

tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

// *********************** Nested Objects ***********************

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// Accessing deeply nested objects
// console.log(regularUser.fullname.userfullname.firstname);


// *********************** Merging Objects ***********************

const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "a", 4: "b"};
const obj4 = {5: "a", 6: "b"};

// const obj3 = { obj1, obj2 }; // Problem: Creates an object inside an object
// const obj3 = Object.assign({}, obj1, obj2, obj4); // Using Object.assign (Target, Sources)

// Modern Spread Operator (Highly Preferred)
const obj3 = {...obj1, ...obj2}; 
// console.log(obj3);


// *********************** Arrays of Objects (Database Structure) ***********************

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 2,
        email: "h2@gmail.com"
    }
]

// console.log(users[1].email);


// *********************** Important Object Methods ***********************

console.log(Object.keys(tinderUser));    // Outputs: [ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderUser));  // Outputs: [ '123abc', 'Sammy', false ]
console.log(Object.entries(tinderUser)); // Outputs array of key-value arrays
console.log(tinderUser.hasOwnProperty('isLoggedIn')); // Outputs: true


// *********************** Object Destructuring ***********************

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// Standard Access
// console.log(course.courseInstructor);

// Destructuring (Extracting and renaming variables cleanly)
const {courseInstructor: instructor} = course;
console.log(instructor); // Outputs: hitesh

// *********************** JSON APIs ***********************
/*
API Responses generally come in JSON format. 
It looks like a JavaScript object, but the keys must be strings:

{
    "name": "hitesh",
    "coursename": "js in hindi",
    "price": "free"
}

Sometimes, JSON data is returned as an Array of Objects:
[
    {},
    {},
    {}
]
*/