//If the variable name and object key name is same then we can just mention variable name in object literals instead of both key and value. JS will automatically set the key same as variable name and assign the value as variable value.


let firstName = "Amitav";
let lastName = "Mishra";

//longhand
// let obj = { firstName: firstName, lastName: lastName };

//shorthand
let obj = { firstName, lastName };
console.log(obj)
console.log(obj.firstName + " " + obj.lastName)
