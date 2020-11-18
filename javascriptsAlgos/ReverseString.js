// reverse a string with built-ins using <String.prototype.split()>, <Array.prototype.reverse(), <Array.prototype.join()>

function reverseString1(str) {
    // using split method to return new array
    var splitString = str.split("");
    var reverseArray = splitString.reverse();
    var joinArray = reverseArray.join("");
    return joinArray;
    // return str.split("").reverse().join("");  We can chain all these built-in_methods together
}
console.log("******Below uses built in methods******");
console.log(reverseString1("hello my name is John"));
// console.log("*************************************");



// reverse a string with a decrementing ForLoop
function reverseString2(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}
console.log("******Below uses decrementing ForLoop******");
console.log(reverseString2('hello and goodbye'));

// reverse a string using Recursion (will use 2 methods)
function reverseString3(str) {
    if (str === "") {
        return "";
    } else {
        return reverseString3(str.substr(1)) + str.charAt(0);
    }
}
console.log("******Below uses recursion******");
console.log(reverseString3("hello my pretty"));

// reverse a string using Recursion ALONG with a ternary (will use 2 methods)
function reverseString4(str) {
    return (str === '') ? '' : reverseString4(str.substr(1)) + str.charAt(0);
}
console.log("******Recursion w/ternary******");
console.log(reverseString4("you must carry on"));


