testArr = [5, 4, 5, 2, 9, 3, 1];

function partition(arr, p) {
    for (var j = 0, i = -1, piviot = arr[p]; j < arr.length; j++) {
        if (arr[j] <= piviot) {
            i++;
            [arr[j], arr[i]] = [arr[i], arr[j]];
        }
    }

    [arr[p], arr[i]] = [arr[i], arr[p]];
    const left = arr.slice(0, piviot);
    const right = arr.slice(piviot);
    console.log(arr);
    console.log("left", left);
    console.log("right", right);
    return merge(partition(left, 0), partition(right, 0));
}

function merge(left, right) {
    let resultArray = [],
    if (right.length <= 1 || left.length <= 1) {
            var leftIndex = 0,
            rightIndex = 0;
        while (leftIndex < left.length && rightIndex < right.length) {
            if (left[leftIndex] < right[rightIndex]) {
                resultArray.push(left[leftIndex]);
                leftIndex++;
            } else {
                resultArray.push(right[rightIndex]);
                rightIndex++;
            }
        }
        return resultArray
            .concat(left.slice(leftIndex))
            .concat(right.slice(rightIndex));
    }
    return resultArray;
}

var index = partition(testArr, 0);
console.log(index);

//shawns example
// let pivotVal = arr[start];
// index = start;
// for (let i = start + 1; i < arr.length; i++)
//     if (pivotVal > arr[i]) {
//         [arr[index], arr[i]] = [arr[i], arr[index]];
//         index++;
//     }
// return start;
// }

// function quicksort(arr, left = 0, right = arr.length - 1) {
// if (left < right) {
//     let pivot = partition(arr, left, right);
//     //left
//     quicksort(arr, left, pivot - 1);
//     //right

//     quicksort(arr, pivot + 1, right);
// }
// return arr;
// }

// console.log(quicksort([2, 1, 5, 7, 4, 8, 9, 6, 10, 13, 15]));


//pikes example
// `var items = [5, 3, 7, 6, 2, 9];
// function swap(items, leftIndex, rightIndex) {
// var temp = items[leftIndex];
// items[leftIndex] = items[rightIndex];
// items[rightIndex] = temp;
// }
// function partition(items, left, right) {
// var pivot = items[Math.floor((right + left) / 2)], //middle element
// i = left, //left pointer
// j = right; //right pointer
// while (i <= j) {
// while (items[i] < pivot) {
// i++;
// }
// while (items[j] > pivot) {
// j–;
// }
// if (i <= j) {
// swap(items, i, j); //sawpping two elements
// i++;
// j–;
// }
// }
// return i;
// }

// function quickSort(items, left, right) {
// var index;
// if (items.length > 1) {
// index = partition(items, left, right); //index returned from partition
// if (left < index - 1) { //more elements on the left side of the pivot
// quickSort(items, left, index - 1);
// }
// if (index < right) { //more elements on the right side of the pivot
// quickSort(items, index, right);
// }
// }
// return items;
// }
// // first call to quick sort
// var sortedArray = quickSort(items, 0, items.length - 1);
// console.log(sortedArray); //prints [2,3,5,6,7,9]`

// const partitionArray = (arr) => {
//     let i=-1
//     const pivot = arr[arr.length -1];
//     for(let j=0; j<=arr.length; j++){
//     if(arr[j]<=pivot){
//     i++
//     [arr[j], arr[i]] = [arr[i], arr[j]]
//     }
//     }
//     return i;
//     }
    
//     const quickSort = (arr) => {
//     let arrCopy = […arr]
//     if(arrCopy.length > 1){
//     let pi = partitionArray(arrCopy);
//     arrCopy = […quickSort(arrCopy.slice(0, pi)), arrCopy[pi], …quickSort(arrCopy.slice(pi+1, arrCopy.length))]
//     }
//     return arrCopy;
//     }

// function quickSort(arr){
//     if(arr.length <= 1){
//         return arr;
//     }
//     let pivot = arr.length -1;
//     for(var j =0, i = j-1; j < pivot; j++){
//         if(arr[j] <= arr[pivot]){
//             i++;
//             [arr[i],arr[j]] = [arr[j],arr[i]];
//         }   
//     }
//     [arr[pivot],arr[i+1]] = [arr[i+1],arr[pivot]]
//     pivot = i+1;
//     let left = arr.slice(0,pivot);
//     let right = arr.slice(pivot);
//     return quickSort(left).concat(quickSort(right));
// }  