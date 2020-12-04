

function printSumTo255() {
    var sum = 0;
    for (var i = 0; i <= 255; i++) {
        sum = sum + i;
        console.log("New number:", i, " & ", "Sum of numbers to 255 is: ", sum);
    }
}
printSumTo255();

//less than Y.  Count and print the number of array values less than a given Y

function numLessThanY(arr, y) {
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < y) {
            count++;
        }
    }
    console.log("%d value(s) are less than %d", count, y)
}
numLessThanY([1, 3, 5, 7, 9], 3);

//greater than Y.  Count and print the number of array values greater than a given Y

function numGreaterThanY(arr, y) {
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > y) {
            count++;
        }
    }
    console.log("%d value(s) are greater than %d", count, y)
}
numGreaterThanY([1, 3, 5, 7, 9], 3);

//set negatives to 0.  

function setNegativesToZero(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            arr[i] = 0;
        }
    }
    return arr;
}
console.log(setNegativesToZero([1, -1, 5, -5, 9, - 9]));









