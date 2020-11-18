// Makes each function easier to read on console.
var end = "end"; // phrase to type into readability() function to console.log end of program statement
function readability(input) {
    console.log(
        "----------------------------------------------------------------------------------------------------"
    );
    if (input == "end") {
        console.log("                                       End of Program");
    } else if (input !== "end") {
        // simple check for people entering other variables `end` or nothing at all into the function
        console.log("                                       Next Function");
    }
    console.log(
        "----------------------------------------------------------------------------------------------------"
    );
    return 0;
}

// Problem 1: Get 1 to 255
console.log("Problem #1:  Get 1 to 255:");
function createArray(input) {
    var newArray = [];
    for (var i = 1; i <= input; i++) {
        newArray.push(i);
    }
    console.log(newArray);                  //WHY DOES OUTPUT STATE (... 155 MORE ITEMS)?
    return 0;
}
createArray(255);
readability();

// Problem2: Get sum of evens to 1000
console.log("Problem #2: Get sum of evens to 1k");
function getEvens(input) {
    var sum = 0;
    for (var i = 1; i <= input; i++) {
        if (i % 2 == 0) {
            sum += i;
        }
    }
    console.log("Sum of evens:", sum);
    return 0;
}
getEvens(1000);
readability();

// Problem3: Get sum of odds to 5000
console.log("Problem #3: Get sum of odds to 5k");
function getOdds(input) {
    var sum = 0;
    for (var i = 1; i <= input; i++) {
        if (i % 2 != 0) {
            sum += i;
        }
    }
    console.log("Sum of odds:", sum)
    return 0;
}
getOdds(5000);
readability();

// Problem4:  Iterate array- write fx returning sum of all values w/in array.  ex([1,2,5] return 8.)
console.log("Problem #4: Iterate an array");
function iterateArr(input) {
    var sum = 0;
    for (var i = 0; i < input.length; i++) {
        sum = sum + input[i];
    }
    console.log(sum);
    return 0;
}
iterateArr([1, 2, 5]);
readability();

// Problem5:  Find Max- Given array w/multiple values, return maximum number in array. ex([-3,3,5,7])
console.log("Problem #5: Find Max from given array");
function findMax(input) {
    var max = 0;
    for (var i = 0; i < input.length; i++) {
        if (input[i] > max) {
            max = input[i];
        }
    }
    console.log("Max number is:", max);
    return 0;
}
findMax([3, 21, 7, 9]);
readability();

// Problem6:  Find Average- Given array w/multiple values, return the average of values inside an array
console.log("Problem #6: Find Average of given array");
function findAvg(input) {
    var sum = 0,
        avg;                                //EXPLAIN WHATS GOING ON? LOOKS LIKE SLIDING AVERAGE INTO THE VAR SUM= VARIABLE. SET SUM=0 with a comma then next line added average and semi-colon?
    for (var i = 0; i < input.length; i++) {
        sum += input[i];
    }
    avg = sum / input.length;
    console.log("The average inside array is: " + avg);
    return 0;
}
findAvg([5, 6, 14, 22]);
readability();

// Problem7:  Array Odd- write function returning array w/odd numbers to 50.
console.log("Problem #7: Array Odd- return odd numbers 1-50 inside array");
function oddArray(input) {
    var arr = [];
    for (var i = 1; i <= input; i++) {
        if (i % 2 !== 0) {
            arr.push(i);
        }
    }
    console.log(arr);
    return 0;
}
oddArray(50);
readability();

// Problem8: Greater than Y- Given Y, fx takes array and returns number of values greater than Y. ex. if arr=[1,3,5,7] and Y=3, fx returns 2 which number 5,7
console.log("Problem #8: Greater than Y");
function greaterY(input) {
    count = 0;
    var Y = 4;
    for (var i = 0; i < input.length; i++) {
        if (input[i] > Y) {
            count += 1;
        }
    }
    console.log("# of values > Y:", count);
    return 0;
}
greaterY([1, 2, 5, 10, 11, 0, 15, 22, 4, 17], 4);               //WHY DOESN'T FUNCTION SEE THIS AS AN X&Y COMPONENT?  X=ARRAY, Y=4. 
readability();

// Problem9: Squares- Given array, write fx replaces each value in array with value squared. eg [1,5,10,-2] wil become [1,25,100,4]
console.log("Problem #9: Squares");
function getSquares(input) {
    // var square = 0;
    for (var i = 0; i < input.length; i++) {
        input[i] = input[i] * input[i];
    }
    console.log(input);
    return 0;
}
getSquares([1, 5, 10, -2]);
readability();

// Problem10: Squares- Negatives- Given array, write fx replacing any negative value with ZERO.
console.log("Problem #10: Replace negative values with ZERO");
function replaceNeg(input) {
    var arr = [];
    for (var i = 0; i < input.length; i++) {
        if (input[i] < 0) {
            input[i] = 0;
        }
    }
    console.log(input);
    return 0;
}
replaceNeg([1, -5, 10, 2, -15, 27]);
readability();

// ///////////////////////////////////////////////////////////Problem11: Min/Max/Avg- Given array, write fx returning new array that contains only Max/Min/Avg of original.
console.log("Problem #11: Min/Max/Avg");
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

// Problem12: Swap Values- Write a fx swapping 1st & last value of given array.
console.log("Problem #12: Swap Values");
function swapValues(input) {
    var temp = input[0];
    input[0] = input[input.length - 1];
    input[input.length - 1] = temp;
    console.log(input);
}
swapValues([1, 5, 9, 4]);
readability();

// Problem13: Number to String- Write fx taking array and replaces neg values with a string 'Dojo'.
console.log("Problem #13: Number to String");
function swapNumber(input) {
    var x = 'Dojo';
    for (var i = 0; i < input.length; i++) {
        if (input[i] < 0) {
            input[i] = x;
        }
    }
    console.log(input);
    return 0;
}
swapNumber([1, -5, 2, -7, 3, -9, "KARATE CHOP!"]);
readability();



