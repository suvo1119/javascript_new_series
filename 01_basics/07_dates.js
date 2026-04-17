// *********************** Dates ***********************

let myDate = new Date();
// console.log(myDate); // Output is in milliseconds and not very readable
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate); // Outputs: object

// *********************** Declaring Specific Dates ***********************

// let myCreatedDate = new Date(2023, 0, 23); // Months are 0-indexed (0 = Jan)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3); // Adding time (Hours, Minutes)
// let myCreatedDate = new Date("2023-01-14"); // YYYY-MM-DD format
let myCreatedDate = new Date("01-14-2023"); // MM-DD-YYYY format (commonly used in India)
// console.log(myCreatedDate.toLocaleString());


// *********************** TimeStamps ***********************

let myTimeStamp = Date.now();
// console.log(myTimeStamp); // Outputs current time in milliseconds since Jan 1, 1970
// console.log(myCreatedDate.getTime()); // Extracts milliseconds from the created date for comparison

// Convert milliseconds to seconds (Common Interview Question)
// console.log(Math.floor(Date.now() / 1000)); 


// *********************** Getting Specific Date Details ***********************

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth() + 1); // +1 because months start at 0
console.log(newDate.getDay());

// String Interpolation with Dates
// console.log(`${newDate.getDay()} and the time is ...`);

// *********************** Customizing LocaleString ***********************

newDate.toLocaleString('default', {
    weekday: "long",
    // timeZone: '...' 
});