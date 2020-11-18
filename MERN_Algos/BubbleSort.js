// <!-- #Bubblesort -->
// let bubbleSort = (inputArr) => {
//     let len = inputArr.length;
//     for (let i = 0; i < len; i++) {
//         for (let j = 0; j < len; j++) {
//             if (inputArr[j] > inputArr[j + 1]) {
//                 let tmp = inputArr[j];
//                 inputArr[j] = inputArr[j + 1];
//                 inputArr[j + 1] = tmp;
//             }
//         }
//     }
//     return inputArr;
// };
// console.log(bubbleSort([3,1,6,5,8]))


// a more efficient way of bubble sort by  keeping track of a variable called "swapped"
// let bubbleSort = (inputArr) => {
//     let len = inputArr.length;
//     let swapped;
//     do {
//         swapped = false;
//         for (let i = 0; i < len; i++) {
//             if (inputArr[i] > inputArr[i + 1]) {
//                 let tmp = inputArr[i];
//                 inputArr[i] = inputArr[i + 1];
//                 inputArr[i + 1] = tmp;
//                 swapped = true;
//             }
//         }
//     } while (swapped);
//     return inputArr;
// };

// console.log(bubbleSort([3,1,6,5,12]))


// from R.Moore
// function bubbleSort(array){
//     for (let i = 0; i < array.length; i++){
//         for (let j = 0; j < array.length; j++){
//             if (array[j] > array[j+1]){
//                 // swap
//                 let temp = array[j];
//                 array[j] = array[j + 1];
//                 array[j + 1] = temp;
//             }
//         }
//     }
//     return array; 
// }
// console.log(bubbleSort([6,4,1,3,5]))

// from A.Dillice
// def bubbleSort(nums):
//     // # loop
//     for n in nums:
//         // # sub loops
//         for num in range(1, len(nums)):
//             // # check lowest num
//             if nums[num] < nums[num - 1]:  
//                 // # swap
//                 (nums[num], nums[num-1]) = (nums[num - 1], nums[num])
//     // # return 
//     return nums

// console.log(bubbleSort([6,4,1,3,5]))

// from lydell Tyler
// function bubbleSort(arr) {
//     var noSwap;
//     for (var i = arr.length; i > 0; i--) {
//         noSwap = true
//         for (var j = 0; j < i - 1; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 var temp = arr[j]
//                 arr[j] = arr[j+1]
//                 arr[j+1] = temp
//                 noSwap = false
//             }
//         }
//         if(noSwap) break
//     }
//     return arr
// }

// console.log(bubbleSort([3,2,4,1,5,6,7,8]))





































