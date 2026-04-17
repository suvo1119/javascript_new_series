const accountId = 144553;
let accountEmail = "hitesh@hc.com"; // Email as mentioned in the example
var accountPassword = "12345";
accountCity = "Jaipur";
let accountState; 

// accountId = 2; // Not allowed (Throws an error because it's a constant)

accountEmail = "hc@hc.com";
accountPassword = "21212121";
accountCity = "Bengaluru";

console.log(accountId);

/* 
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity]);
console.log(accountState);