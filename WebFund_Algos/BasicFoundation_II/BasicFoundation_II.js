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

// Problem 1: Biggie Size - Given array, write fx changing pos.#s in array to "big". 
console.log("Problem #1: Biggie Size:");
function posIntoBig(input) {
    for (var i = 0; i < input.length; i++) {
        if (input[i] > 0) {
            input[i] = "Big";
        }
    }
    console.log("The new array is: [" + input + "]");
    return input;
}
var a = [-1, 3, 5, -5];
console.log("The original array is [" + a + "]");
var b = posIntoBig(a);
readability();

// Problem 2: Print Low, Return High - Write fx taking an array. Print the lowest value but return the highest value.
console.log("Problem #2: Print Low, Return High:");
function printLowReturnHigh(input) {
    var min = input[0],
        max = input[0];
    for (var i = 0; i < input.length; i++) {
        if (input[i] < min) {
            min = input[i];
        }
        if (input[i] > max) {
            max = input[i];
        }
    }
    console.log("The lowest value in the array is: " + min);
    return max;
}
var c = [-255, -100, 0, -300, 1000];
var d = printLowReturnHigh(c);
console.log("The max value of the array is: " + d);
readability();

// Problem 3: Print One, Return Another - Write a fx array that prints 2nd to last value and returns the first odd value.
console.log("Problem #3: Print One, Return Another:");
function printOneRtrnAnother(input) {
    var firstOdd = 0;
    console.log(
        "The second to last number of the array is: " + input[input.length - 2]
    );

    for (var i = 0; i < input.length; i++) {
        if (input[i] % 2 !== 0) {
            firstOdd = input[i];
            return firstOdd;
        }
    }
    return "There are no odd numbers in the given array.";
}
var e = [0, 1, -1, 3, -2], // expect to print 3, return 1
    f = [0, 2, 4, 6, 8, 10], // expect to print 8, return "There are no odd numbers in the given array."
    g = [-10, 2, 0, 7], // expect to print 0, return 7
    h = printOneRtrnAnother(f);
// Change the argument `e` to a different variable to check it...
console.log("The first odd value of the function is: " + h);
readability();

// Problem 4: Double Vision - Given an array (similar to saying 'takes in an array'), create a function that returns a new array where each value in the original array has been doubled.
console.log("Problem #4: Double Vision:");
function doubleArray(input) {
    for (var i = 0; i < input.length; i++) {
        input[i] = input[i] * 2;
    }
    return input;
}
var m = [1, 2, 3],
    n = [2, 5, 8],
    o = [-1, 0, 10];
console.log("The original array: [" + m + "]");
var p = doubleArray(m);
console.log("The doubled array: [" + p + "]");
readability();

// Problem 5:Count Positives - Given an array of numbers, create a function to replace the last value with the number of positive values found in the array.  Example, countPositives([-1,1,1,1]) changes the original array to [-1,1,1,3] and returns it.
console.log("Problem #5: Count Positives:");
function countPositives(input) {
    var num = 0;
    for (var i = 0; i < input.length; i++) {
        if (input[i] > 0) {
            num++;
        }
    }
    input[input.length - 1] = num;
    return input;
}
var q = [-1, 1, 1, 1];
console.log("The original array: [" + q + "]");
var r = countPositives(q);
console.log("The original array: [" + r + "]");
readability();

// Problem 6:Evens and Odds - Create a function that accepts an array.  Every time that array has three odd values in a row, print "That's odd!".  Every time the array has three evens in a row, print "Even more so!".
console.log("Problem #6: Evens and Odds:");
function checkEvenOdd(input) {
    var oddCounter = 0,
        evenCounter = 0;
    for (var i = 0; i < input.length; i++) {
        if (input[i] !== 0) {
            if (input[i] % 2 !== 0) {
                // step 1: check if odd
                oddCounter++; // inc oddCounter
                evenCounter = 0; // reset evenCounter
                if (oddCounter >= 3) {
                    // counter checked if triple or more (because more than four would be two triple sets, etc.)
                    console.log("That's odd!");
                }
            } else {
                // step 2: if not odd, then even
                oddCounter = 0; // reset oddCounter
                evenCounter++; // inc evenCounter
                if (evenCounter >= 3) {
                    // counter checked if triple or more (because more than four would be two triple sets, etc.)
                    console.log("Even more so!");
                }
            }
        } else {
            // added a test for zeros in case of test array being a sneaky jerk :D
            console.log("There's a zero here sir!");
        }
    }
    return "End of checking array for triple evens or triple odds... weirdo";
}
/* The 's' array checks for triple odd, then triple even...
When the function comes across the quadset of odd or even, the respective statement should print twice...
If it was five in a row, it would print three times because there is three sets of triple in a row.
Zero will */
var s = [2, 1, 1, 1, 2, 2, 2, 0, 1, 1, 1, 1, 2, 2, 2, 2];
checkEvenOdd(s);
readability();

// Problem 7:Increment the Seconds - Given an array of numbers arr, add 1 to every other element, specifically those whose index is odd (arr[1], arr[3], arr[5], etc).  Afterward, console.log each array value and return arr.
console.log("Problem #7: Increment the Seconds:");
function incOddIndex(input) {
    for (var i = 0; i < input.length; i++) {
        if (i % 2 !== 0) {
            input[i]++;
        }
        console.log(
            "The value of input at index '" + i + " is '[" + input[i] + "]'."
        );
    }
    return input;
}
var t = [0, 3, -1, 12, -8, 1, 0];
console.log("The original array is [" + t + "].");
var u = incOddIndex(t);
console.log("The array's new value is [" + u + "].");
readability();

// Problem #8: Previous Lengths - You are passed an array (similar to saying 'takes in an array' or 'given an array') containing strings.  Working within that same array, replace each string with a number - the length of the string at the previous array index - and return the array.  For example, previousLengths(["hello", "dojo", "awesome"]) should return ["hello", 5, 4]. Hint: Can for loops only go forward?
console.log("Problem #8: Previous Lengths:");
function previousLengths(input) {
    var temp;
    for (var i = input.length - 1; i >= 1; i--) {
        if (i > 0) {
            temp = input[i - 1];
            input[i] = temp.length;
        }
    }
    return input;
}
var v = ["hello", "dojo", "awesome"],
    w = previousLengths(v);
console.log(w);
readability();


// Problem #9: Add Seven - Build a function that accepts an array. Return a new array with all the values of the original, but add 7 to each. Do not alter the original array.  Example, addSeven([1,2,3]) should return [8,9,10] in a new array.
console.log("Problem #9: Add Seven:");
function addSeven(input) {
    var newArr = [];
    for (var i = 0; i < input.length; i++) {
        newArr.push(input[i] + 7);
    }
    return newArr;
}
var x = [1, 2, 3];
var y = addSeven(x);
console.log("The original array is: [" + x + "].");
console.log("The new array is: [" + y + "].");
readability();

// Problem #10: Reverse Array - Given an array, write a function that reverses its values, in-place.  Example: reverse([3,1,6,4,2]) returns the same array, but now contains values reversed like so... [2,4,6,1,3].  Do this without creating an empty temporary array.  (Hint: you'll need to swap values).
console.log("Problem #10: Reverse Array:");
function reverseArray(input) {
    var i, temp;
    for (i = 0; i < input.length / 2; i++) {
        temp = input[i]; // temp = 3
        input[i] = input[input.length - 1 - i]; // ex: input[0] = input[5 - 1 - 0] '4' (last) -> input[1] = input[5 - 1 - 1] '3' (-> input[2] = input[5 - 1 - 2] '2'
        input[input.length - 1 - i] = temp; // input[4] = 3
    }
    return input;
}
var z = [3, 1, 6, 4, 2];
console.log("The original elements of the array are: [" + z + "].");
var ab = reverseArray(z);
console.log("The original array reversed is: [" + ab + "].");
readability();

// Problem #11: Outlook: Negative - Given an array, create and return a new one containing all the values of the original array, but make them all negative (not simply multiplied by -1). Given [1,-3,5], return [-1,-3,-5].
console.log("Problem #11: Outlook... Negative:");
function outlookNegative(input) {
    var newArr = [];
    for (var i = 0; i < input.length; i++) {
        if (input[i] > 0) {
            newArr.push(-input[i]);
        } else {
            newArr.push(input[i]);
        }
    }
    return newArr;
}
var ac = [1, -3, 5];
console.log("The original elements of the array are: [" + ac + "].");
var ad = outlookNegative(ac);
console.log("The original elements of the array are: [" + ad + "].");
readability();

// Problem #12: Always Hungry - Create a function that accepts an array, and prints "yummy" each time one of the values is equal to "food".  If no array values are "food", then print "I'm hungry" once.
console.log("Problem #12: Always Hungry:");
function alwaysHungry(input) {
    var countOfFood = 0;
    for (var i = 0; i < input.length; i++) {
        if (input[i] == "food") {
            console.log("yummy");
            countOfFood = 1; // This is to track if food is in the array. If this is one, "I'm hungry" will never console.log.
        }
    }
    if (countOfFood == 0) {
        console.log("I'm hungry");
    }
    return 0;
}
var eat = ["food", "water", "foot"],
    noteat = ["water", "foot"],
    eatlast = ["water", "foot", "foods", "food", "food"];
console.log("The first eat...");
var canHazCheezbrgr = alwaysHungry(eat);
console.log("The second eat...");
canHazCheezbrgr = alwaysHungry(noteat);
console.log("The final eat...");
canHazCheezbrgr = alwaysHungry(eatlast);
readability();

// Problem #13: Swap Toward the Center - Given an array, swap the first and last values, third and third-to-last values, etc.  Example: swapTowardCenter([true,42,"Ada",2,"pizza"]) turns the array into ["pizza", 42, "Ada", 2, true].  swapTowardCenter([1,2,3,4,5,6]) turns the array into [6,2,4,3,5,1].  No need to return the array this time.
console.log("Problem #13: Swap Toward the Center:");
function swapTowardCenter(input) {
    var i, temp; // placeholder for first value while we overwrite the real first value
    for (i = 0; i < input.length / 2; i++) {
        if (i % 2 == 0) {
            temp = input[i]; // firstTemp = 'true' or '1' depending on test array
            input[i] = input[input.length - 1 - i]; // input[i] is now the opposite element (1st iteration is either '"pizza"' or '6')
            input[input.length - 1 - i] = temp;
        }
    }
    return input;
}
var trueThruPizza = [true, 42, "Ada", 2, "pizza"];
console.log("The first array to test: [" + trueThruPizza + "]");
var swapThePizza = swapTowardCenter(trueThruPizza);
console.log("The swaparonni of that array is: [" + swapThePizza + "]");

var oneThruSix = [1, 2, 3, 4, 5, 6];
console.log("The second array to test: [" + oneThruSix + "]");
var swapTheNums = swapTowardCenter(oneThruSix);
console.log("The swaparonni of that array is: [" + swapTheNums + "]");
readability();

// Problem #14: Scale the Array - Given an array arr and a number num, multiply all values in the array arr by the number num, and return the changed array arr.  For example, scaleArray([1,2,3], 3) should return [3,6,9].
console.log("Problem #14: Scale the Array:");
function scaleArray(array, number) {
    for (i = 0; i < array.length; i++) {
        array[i] = array[i] * number;
    }
    return array;
}
var arr = [1, 2, 3],
    num = 3;
console.log("The original array is: [" + arr + "]");
console.log("The scale is: " + num);
var performScale = scaleArray(arr, num);
console.log("The scaled array is: [" + performScale + "]");
readability(end);
// readability(a);