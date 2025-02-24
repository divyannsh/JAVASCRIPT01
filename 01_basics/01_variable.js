const accountId = 14455
let accountEmail = "gogo@gamil.com" 
var accountPassword = "77707"
accountcity = "indore" 
let accountState;

// account = 2 // not allowed

// note : Prefer not to use var because of issue in block scope and functional scope

accountEmail = "hc@hc.com"
accountPassword = "57775"
accountcity = "goa"

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountcity, accountState]);
