//https://medium.com/javascript-in-plain-english/javascript-merge-sort-3205891ac060

// Merge the two arrays: left and right
function merge(left, right) {
    let resultArray = [],
        leftIndex = 0,
        rightIndex = 0;

    // We will concatenate values into the resultArray in order
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            resultArray.push(left[leftIndex]);
            leftIndex++; // move left array cursor
        } else {
            resultArray.push(right[rightIndex]);
            rightIndex++; // move right array cursor
        }
    }

    // We need to concat here because there will be one element remaining
    // from either left OR the right
    return resultArray
        .concat(left.slice(leftIndex))
        .concat(right.slice(rightIndex));
}

// Merge Sort Implentation (Recursion)
function mergeSort(arr) {
    // base case
    // No need to sort the array if the array only has one element or empty
    if (arr.length <= 1) {
        return arr;
    }
    // In order to divide the array in half, we need to figure out the middle
    const middle = arr.length / 2;

    // This is where we will be dividing the array into left and right
    const left = arr.slice(0, middle);
    //                     ^ An integer that specifies where to start the selection (The first element has an index of 0). 
    const right = arr.slice(middle);
//                     ^^^ slice returns the selected elements in the array 
    // Using recursion to combine the left and right
    return merge(mergeSort(left), mergeSort(right));
    //     ^^^ have to make another fuction to merge
}    


console.log(mergeSort([12,32,5,-4,87,5,2]));

