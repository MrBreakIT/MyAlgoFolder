// Create function combineArrs(arr1,arr2) that sorts two already separately sorted arrays, placing the result back into the first provided array. Can you work completely in-place?

// let nums1 = [1, 2, 3, 4];
// let nums2 = [5, 6, 7, 8];
// let nums3 = [9, 10, 11, 12];
// let combinedNums = nums1.concat(nums2, nums3);

// console.log(combinedNums);
// **************************** or another way for readability
// let nums1 = [3, 1, 2, 4];
// let nums2 = [7, 8, 5, 6];
// // let combinedNums = [].concat(nums1, nums2);
// // console.log(combinedNums);

// let sortNum1 = nums1.sort();
// let sortNum2 = nums2.sort();
// let combinedNums = [].concat(nums1, nums2);
// console.log(combinedNums);


// Use the combineArrs() function above to construct mergeSortArr() for an unsorted array. What are the run-time and space complexities of your mergeSortArr solution?

// const nums1 = [3, 1, 2, 4];
// const nums2 = [7, 8, 5, 6];
// mergeTwo(nums1, nums2);
// function mergeTwo(nums1,nums2){
//     let result = [...nums1, ...nums2];
//     return result.sort((a,b) => a-b);
// }

// console.log(mergeTwo);


// ***********************************************************************from LydellTyler
// Set result varible for the combined array
// set to iterator starting at 0
// start looping until the length of both iterators
    // Set a condition if one is less than the other push it into results
    // else push the other
// start looping both iterator to add the remaining values
//return result arr

// function merge (arr1, arr2) {
//     let result = []
//     let i = 0 
//     let j = 0
//     while(i < arr1.length && j < arr2.length) {
//         if(arr1[i] > arr2[j]) {
//             result.push(arr2[j])
//             j++
//         } else {
//             result.push(arr1[i])
//             i++
//         }
//     }
//     while(i < arr1.length){
//         result.push(arr1[i])
//         i++
//     }
//     while(j < arr2.length){
//         result.push(arr2[j])
//         j++
//     }
//     return result
// }

// // set base case
// // set a variable to mid point
// // set a left variable to recursively split the array for the left side
// // do the same for the right side
// // return a call of merge to combine left and right after reaching base case 

// function supaSlice(arr){
//     if(arr.length <= 1) return arr
//     let mid = Math.floor(arr.length/2)
//     let left = supaSlice(arr.slice(0,mid))
//     let right = supaSlice(arr.slice(mid))
//     return merge(left, right)
// }

// console.log(supaSlice([5,3,4,2,2,5,1,3]))

// ********************************************************************************* from ShawnLockhart
function combineArrs(arr1, arr2) {
    let combined = [];
    let i = 0;
    let j = 0;

    // two already separately sorted arrays
    while (i < arr1.length && j < arr2.length) {
        if (arr2[j] > arr1[i]) {
            combined.push(arr1[i]);
            i++;
        } else {
            combined.push(arr2[j]);
            j++;
        }
    }
    while (i < arr1.length) {
        combined.push(arr1[i]);
        i++;
    }
    while (j < arr2.length) {
        combined.push(arr2[j]);
        j++;
    }
    return combined;
}

// console.log(combineArrs([6, 10], [5, 7, 8, 9]));

// Merge Sort
// Use the combineArrs() function above to construct mergeSortArr() for an unsorted array.
// What are the run - time and space complexities of your mergeSortArr solution ?

// break an array into halves until we have empty arr OR single element in an array
// once we the small arrays merge and sort
// return the merge and sorted array

function mergeSortArr(arr) {
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2);
    let right = mergeSortArr(arr.slice(mid));
    let left = mergeSortArr(arr.slice(0, mid));
    return combineArrs(left, right);
}

console.log(mergeSortArr([5, 4, 7, 3, 9, 8, 2, 1, 6]));













