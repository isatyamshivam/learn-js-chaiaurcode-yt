userName = "Satyam Shivam"          // this is worked but not use by community.
const userId = 77141714             // if the variable is "const" type, then you don't change there value again in the same program.
let userPassward = 7714             // if the variable is "let" type, then you can change there value as you need.
var userAddress = "Patna, India"    // if the variable is "var" type, then prefer not to use var because of issue in block scope and functional scope ("var" is used a long time ago until the "let" was introduced).
let userEmail;                      // in this variable we can't declare there valus, then it's output is "undefined".


// output

console.log(userName)
console.log(userId)
console.log(userEmail)

// output as table

console.table([userName, userId, userPassward, userAddress, userEmail])