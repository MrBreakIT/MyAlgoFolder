function insertionSort(arr) {
    for (var i = 0; i < arr.length; i++) {
        let value = arr[i];
        for (var j = i - 1; j >= 0 && arr[j] > value; j--) {
            arr[j + 1] = arr[j];
        }
        arr[j + 1] = value;
    }
    return arr;
}

console.log(insertionSort([2, 9, 1, 4, 3, 6, 5, 8, 7]));