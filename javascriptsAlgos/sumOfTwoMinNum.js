const testArr=[5, 8, 12, 19, 22];
const testArr1=[23, 71, 33, 82, 1];

function sumTwoSmallestNumbers(arr) {  
    let min = arr[0];
    let min1 = arr[arr.length-1];
    for(var i = 0, j = arr.length-1 ; i<arr.length ; i++, j--){
        if (arr[i] < min && arr[i] != min1){
            min = arr[i];
            console.log(min);
        }
        if (arr[j]< min1 && arr[j] !== min){
            min1 = arr[j];
            console.log(min1);
        }
    }
    console.log(min,min1);
    return min+min1;
}

var x = sumTwoSmallestNumbers(testArr);
console.log(x);