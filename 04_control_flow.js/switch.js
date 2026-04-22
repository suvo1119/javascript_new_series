// *********************** Switch Case ***********************

// Basic syntax:
// switch (key) {
//     case value:
//         
//         break;
//     default:
//         break;
// }

const month = 3; 

switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("Feb");
        break;
    case 3:
        console.log("March"); // This will execute
        break;
    case 4:
        console.log("April");
        break;
    default:
        console.log("default case match");
        break;
}

// *********************** Switch Case with Strings ***********************

const monthString = "march";

switch (monthString) {
    case "jan":
        console.log("January");
        break;
    case "feb":
        console.log("February");
        break;
    case "march":
        console.log("March"); // This will execute
        break;
    default:
        console.log("default case match");
        break;
}
