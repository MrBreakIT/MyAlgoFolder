var testArr=[9,8,7,5,4,6,2,3,1];

function bubbleSort(arr){
    for(let i = arr.length; i > 0; i--){ 
        for (let j=0;  j < i - 1; j++){
            if (arr[j] > arr[j+1]) {
                [arr[j], arr[j+1]]= [arr[j+1], arr[j]];
            }
        }
    }
    console.log(arr)
    return arr;
}
bubbleSort(testArr);
console.log(testArr);


function bubbleSort(arr) {
    for (let i = arr.length; i > 0; i--) {
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j+1]]= [arr[j+1], arr[j]];
            }
        }
    }
    console.log(arr);
    return arr;
}

bubbleSort([1, 5, 3, 7, 2, 8, 9, 4, 6]);

var x = 1;
console.log(x)