// Partition unsorted array in-place. Use arr[arr.length -1] as pivot val; return idx of pivot. Input [5,4,9,2,5,3] becomes [3,4,5,2,5,9], return 4.
// **************************from RobertSantos

testArr = [5, 4, 5, 2, 9, 3]

function partition(arr, p) {
    for (var j = 0, i = -1, piviot = arr[p]; j < arr.length; j++) {
        if (arr[j] <= piviot) {
            i++
            [arr[j], arr[i]] = [arr[i], arr[j]];
        }
    }
    [arr[p], arr[i]] = [arr[i], arr[p]];
    console.log(arr);
    return i;
}

var index = partition(testArr, 0)
console.log(index)

// *******************************************from ShawnLockhart
function partition(arr) {
    var start = 0;
    let pivotVal = arr[start];
    for (let i = start + 1; i < arr.length; i++)
        if (pivotVal > arr[i]) {
            [arr[start], arr[i]] = [arr[i], arr[start]];
            start++;
            console.log(arr);
        }
    return start;
}
//
console.log(partition([5, 4, 9, 2, 5, 3]));
//                        i
//                    [4, 5, 9, 2, 5, 3]
//                           i
//                    [4, 5, 2, 9, 5, 3]
//                              i
//                    [4, 2, 5, 9, 3, 5]
//                                 i
//                    [4, 2, 5, 3, 9, 5]

//                    [4, 2, 3, 5, 9, 5]

// ***************************************************************from LydellTyler
function arrayParition(arr) {
    let pivot = arr[arr.length -1]
    for (var i = -1, j = 1; j < arr.length; j++) {
        if (arr[j] <= pivot) {
            i++
            [arr[j], arr[i]]= [arr[i], arr[j]];
        }
    }
    console.log(arr)
    return arr.indexOf(pivot)
}
console.log(arrayParition([5, 4, 9, 2, 5, 3]))










