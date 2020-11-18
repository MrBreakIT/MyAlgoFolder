// Create a function that InsertionSort to sort an unsorted array in-place. What is the run-time complexity? What is the space complexity?

// function insertionSort(inputArr) {
//         let n = inputArr.length;
//         for (let i = 1; i < n; i++) {
//                 // Choosing the first element in our unsorted subarray
//                 let current = inputArr[i];
//                 // The last element of our sorted subarray
//                 let j = i - 1;
//                 while ((j > -1) && (current < inputArr[j])) {
//                         inputArr[j + 1] = inputArr[j];
//                         j--;
//                 }
//                 inputArr[j + 1] = current;
//         }
//         return inputArr;
// }

// console.log(insertionSort([5, 2, 9, 6, 12, 1, 19, 7, 3, 4]))

//**********************************************************  From Lydell Tyler
// 
// Time complexities 
// Quadratic Time - Big O(n^2) => nested loop 
// Linear Time - Big O(n) => nearly sorted data

// Space complexitiy
// Big O(1)

function insertionSort(arr) {
        for (var i = 1; i < arr.length; i++) {
                var current = arr[i]
                for (var j = i - 1; j >= 0 && current < arr[j]; j--) {
                        arr[j + 1] = arr[j]
                }
                console.log(arr)
                arr[j + 1] = current
        }
        return arr
}
console.log(insertionSort([8, 5, 6, 2, 7, 4]))

//**********************************************************  From Dennis Kim
// 

const insertionSort = arr => { //save array length as const variable len
        const len = arr.length;
        for (let i = 0; i < len; i++) { //loop over each element in array
                let temp = arr[i]; //create temp variable for current position
                let j; //new variable for comparison
                for (j = i - 1; j >= 0 && arr[j] > temp; j--) { //new for loop and compare j with temp and see if starting temp is smaller, and is greater than 0, decrement by 1
                        arr[j + 1] = arr[j];
                }
                arr[j + 1] = temp; //assign temp to current position in array
        }
        return arr;
};

console.log(insertionSort([7, 2, 5, -111000, 4, 0, 10, -1]))






