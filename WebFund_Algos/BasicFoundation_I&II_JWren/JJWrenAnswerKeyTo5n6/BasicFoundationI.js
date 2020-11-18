// Makes each function easier to read on console.
var end = "end"; // phrase to type into readability() function to console.log end of program statement
function readability(input) {
    console.log(
        "----------------------------------------------------------------------------------------------------"
    );
    if (input == "end") {
        console.log("End of Program");
    } else if (input !== "end") {
        // simple check for people entering other variables `end` or nothing at all into the function
        console.log("Next Function");
    }
    console.log(
        "----------------------------------------------------------------------------------------------------"
    );
    return 0;
}

// Get 1 to 255 - Write a function that returns an array with all the numbers from 1 to 255.
console.log("Get 1 to 255:");
function createArray(input) {
    var newArray = [];
    for (var i = 1; i <= input; i++) {
        newArray.push(i);
    }
    console.log(newArray);
    return 0;
}

createArray(255);
readability();

// Get even 1000 - Write a function that would get the sum of all the even numbers from 1 to 1000.  You may use a modulus operator for this exercise.
console.log("Get even 1000:");
function getEvenSum(input) {
    var sum = 0;
    for (var i = 1; i <= input; i++) {
        if (i % 2 == 0) {
            sum += i;
        }
    }
    console.log("Sum is: " + sum);
    return 0;
}
getEvenSum(1000);
readability();

// Sum odd 5000 - Write a function that returns the sum of all the odd numbers from 1 to 5000. (e.g. 1+3+5+...+4997+4999).
console.log("Sum odd 5000");
function getOddSum(input) {
    var sum = 0;
    for (var i = 1; i <= input; i++) {
        if (i % 2 !== 0) {
            sum += i;
        }
    }
    console.log("Sum is: " + sum);
    return 0;
}
getOddSum(5000);
readability();

// Iterate an array - Write a function that returns the sum of all the values within an array. (e.g. [1,2,5] returns 8. [-5,2,5,12] returns 14).
console.log("Iterate an array:");
function getSumOfArray(input) {
    var sum = 0;
    for (var i = 0; i < input.length; i++) {
        sum += input[i];
    }
    console.log(sum);
    return 0;
}
var a = [1, 2, 5],
    b = [-5, 2, 5, 12];
getSumOfArray(a);
getSumOfArray(b);
readability();

// Find max - Given an array with multiple values, write a function that returns the maximum number in the array. (e.g. for [-3,3,5,7] max is 7)
console.log("Find max:");
function getMaxOfArray(input) {
    var max = input[0];
    for (var i = 0; i < input.length; i++) {
        if (input[i] > max) {
            max = input[i];
        }
    }
    console.log("The max value of the array is: " + max);
    return 0;
}
var c = [-3, 3, 5, 7];
getMaxOfArray(c);
readability();

// Find average - Given an array with multiple values, write a function that returns the average of the values in the array. (e.g. for [1,3,5,7,20] average is 7.2)
console.log("Find average:");
function getAverageOfArray(input) {
    var sum = 0,
        average;
    for (var i = 0; i < input.length; i++) {
        sum += input[i];
    }
    average = sum / input.length;
    console.log("The average of the array is: " + average);
    return 0;
}
var d = [1, 3, 5, 7, 20];
getAverageOfArray(d);
readability();

// Array odd - Write a function that would return an array of all the odd numbers between 1 to 50. (ex. [1,3,5, .... , 47,49]). Hint: Use 'push' method.
console.log("Array odd:");
function getArrayOdd(input) {
    var array1 = [];
    for (var i = 1; i <= input; i++) {
        if (i % 2 !== 0) {
            array1.push(i);
        }
    }
    console.log(array1);
    return 0;
}
getArrayOdd(50);
readability();

// Greater than Y - Given value of Y, write a function that takes an array and returns the number of values that are greater than Y. For example if arr = [1, 3, 5, 7] and Y = 3, your function will return 2. (There are two values in the array greater than 3, which are 5, 7).
console.log("Greater than Y:");
function checkArrayGreaterThanY(array, Y) {
    var greaterThanY = 0;
    for (var i = 1; i <= array.length; i++) {
        if (array[i] > Y) {
            greaterThanY += 1;
        }
    }
    console.log(greaterThanY + " values are greater than Y.");
    return 0;
}
var d = [1, 3, 5, 7],
    e = 3;
checkArrayGreaterThanY(d, e);
readability();

// Squares - Given an array with multiple values, write a function that replaces each value in the array with the value squared by itself. (e.g. [1,5,10,-2] will become [1,25,100,4])
console.log("Squares:");
function squareTheArray(input) {
    console.log("The original array: [" + input + "]");
    for (var i = 0; i < input.length; i++) {
        input[i] = input[i] * input[i];
    }
    console.log("The square of the array is: [" + input + "]");
    return 0;
}
var f = [1, 5, 10, -2];
squareTheArray(f);
readability();

// Negatives - Given an array with multiple values, write a function that replaces any negative numbers within the array with the value of 0. When the program is done the array should contain no negative values. (e.g. [1,5,10,-2] will become [1,5,10,0])
console.log("Negatives:");
function negIntoZero(input) {
    for (var i = 0; i < input.length; i++) {
        if (input[i] < 0) {
            input[i] = 0;
        }
    }
    console.log("The new array is: [" + input + "]");
    return 0;
}
var g = [1, 5, 10, -2];
negIntoZero(g);
readability();

// Max/Min/Avg - Given an array with multiple values, write a function that returns a new array that only contains the maximum, minimum, and average values of the original array. (e.g. [1,5,10,-2] will return [10,-2,3.5])
console.log("Max/Min/Avg:");
function findMinMaxAvg(input) {
    var min = input[0],
        max = input[0],
        sum = 0,
        avg,
        minMaxAvg = [];
    for (var i = 0; i < input.length; i++) {
        if (min < input[i]) {
            min = input[i];
        }
        if (max > input[i]) {
            max = input[i];
        }
        sum += input[i];
    }
    avg = sum / input.length;
    minMaxAvg.push(min, max, avg);
    console.log(
        "The minimum, maximum, and average value of the array is: [" +
            minMaxAvg +
            "]"
    );
}
var h = [1, 5, 10, -2];
findMinMaxAvg(h);
readability();

// Swap Values - Write a function that will swap the first and last values of any given array. The default minimum length of the array is 2. (e.g. [1,5,10,-2] will become [-2,5,10,1]).
console.log("Swap Values:");
function swapValues(input) {
    var temp = input[0];
    input[0] = input[input.length - 1];
    input[input.length - 1] = temp;

    console.log(
        "The original array with the first and last variable swapped is: [" +
            input +
            "]"
    );
    return 0;
}
swapValues(h);
readability();

// Number to String - Write a function that takes an array of numbers and replaces any negative values within the array with the string 'Dojo'. For example if array = [-1,-3,2], your function will return ['Dojo','Dojo',2].
console.log("Number to String:");
function negIntoDojo(input) {
    for (var i = 0; i < input.length; i++) {
        if (input[i] < 0) {
            input[i] = "Dojo";
        }
    }
    console.log("The new array is: [" + input + "]");
    return 0;
}
var m = [-1, -3, 2];
negIntoDojo(m);
readability(end);
