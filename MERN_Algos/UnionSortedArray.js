// Efficiently combine two already-sorted arrays into a new sorted array containing the multiset union. Example: given [1,2,2,2,7] and [2,2,6,6,7], return [1,2,2,2,6,6,7].

// ***********************************************************AhmetDillice
// const unionArray = (arrA, arrB) => {
//     // ini
//     let i = 0,
//         j = 0,
//         final = [];
//     let checkA = {};
//     let checkB = {};

//     // loop
//     while (i < arrA.length && j < arrB.length) {
//         if ((checkA[arrA[i]] !== undefined)) {
//             checkA[arrA[i]] += 1;
//         } else {
//             checkA[arrA[i]] = 1;
//         }
//         if ((checkB[arrB[j]] !== undefined)) {
//             checkB[arrB[j]] += 1;
//         } else {
//             checkB[arrB[j]] = 1;
//         }
//         // increment
//         i++;
//         j++;
//     }
//     // loop
//     for (item in checkA) {
//         if (checkA[item] > checkB[item] || !checkB[item]) {
//             for (let i = 0, len = checkA[item]; i < len; i++) {
//                 final.push(item);
//             }
//         }
//     }
//     // loop
//     for (item in checkB) {
//         if (checkB[item] >= checkA[item] || !checkA[item]) {
//             for (let i = 0, len = checkB[item]; i < len; i++) {
//                 final.push(item);
//             }
//         }
//     }
//     // return
//     return final;
// }

// // output
// console.log(unionArray([1, 2, 2, 2, 7], [2, 2, 6, 6, 7]))

// ***********************************************************ShawnLockhart

function unionArray(arr, arr2) {
    let result = [], i = 0, j = 0;
    while (i < arr.length || j < arr2.length) {
        if (arr[i] == arr2[j]) {
            result.push(arr[i]);
            i++;
            j++;
        } else if (arr[i] < arr2[j]) {
            result.push(arr[i]);
            i++;
        } else {
            result.push(arr2[j]);
            j++;
        }
    }
    while (arr[i]) {
        result.push(arr[i]);
        i++;
    }
    while (arr2[j]) {
        result.push(arr2[j]);
        j++;
    }
    return result;
}

console.log(unionArray([1, 2, 2, 2, 7, 7, 7], [2, 2, 6, 6, 7, 8])) //should return [1, 2, 2, 2, 6, 6, 7, 7, 7, 8]

// ***********************************************************AdrionDion





