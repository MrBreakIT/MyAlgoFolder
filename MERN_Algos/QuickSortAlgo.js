var items = [5, 3, 7, 6, 2, 9];
function swap(items, leftIndex, rightIndex) {
    var temp = items[leftIndex];
    items[leftIndex] = items[rightIndex];
    items[rightIndex] = temp;
}
function partition(items, left, right) {
    var pivot = items[Math.floor((right + left) / 2)], //middle element
        i = left, //left pointer
        j = right; //right pointer
    while (i <= j) {
        while (items[i] < pivot) {
            i++;
        }
        while (items[j] > pivot) {
            j--;
        }
        if (i <= j) {
            swap(items, i, j); //sawpping two elements
            i++;
            j--;
        }
    }
    return i;
}

function quickSort(items, left, right) {
    var index;
    if (items.length > 1) {
        index = partition(items, left, right); //index returned from partition
        if (left < index - 1) { //more elements on the left side of the pivot
            quickSort(items, left, index - 1);
        }
        if (index < right) { //more elements on the right side of the pivot
            quickSort(items, index, right);
        }
    }
    return items;
}
// first call to quick sort
var sortedArray = quickSort(items, 0, items.length - 1);
console.log(sortedArray); //prints [2,3,5,6,7,9]

// ********************************************************************************* from JoshuaDou
// const partitionArray = (arr) => {
//     let i=-1
//     const pivot = arr[arr.length -1];
//     for(let j=0; j<=arr.length; j++){
//         if(arr[j]<=pivot){
//             i++
//             [arr[j], arr[i]] = [arr[i], arr[j]]
//         }
//     }
//     return i;
// }

// const quickSort = (arr) => {
//     let arrCopy = [...arr]
//     if(arrCopy.length > 1){
//         let pi = partitionArray(arrCopy);
//         arrCopy = [...quickSort(arrCopy.slice(0, pi)), arrCopy[pi], ...quickSort(arrCopy.slice(pi+1, arrCopy.length))]
//     }
//     return arrCopy;
// }
// ********************************************************************************* from AdrienDion
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









