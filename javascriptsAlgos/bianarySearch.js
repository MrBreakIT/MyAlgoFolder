const testArr = [1, 2, 33, 44, 56, 78, 94];


function binarySearch(arr, value) {
    if (arr[arr.length / 2] == value) {
        console.log(arr[arr.length/2])
        return true;
    }
    if (arr[arr.length / 2] > value) {
        for (var i = arr[arr.length / 2]; i <= 0; i--) {
            if (arr[i] == value) {
                return true;
            }
        }
    }
    if (arr[arr.length / 2] < value) {
        for (var i = arr[arr.length / 2]; i < arr.length; i++) {
            if (arr[i] == value) {
                return true;
            }
        }
    }
}
x = binarySearch(testArr, 56);
console.log("first Test",x);


const testArr1 = [1, 2, 33, 44, 56, 78, 94];


function binarySearch1(arr, value) {
    var start = arr[0];
    var end = arr[arr.length - 1];
    let mid = Math.floor((start + end) / 2);
    if (mid == value) {
        return false;
    }
    else if ( arr[mid] > value) {
        start = arr[arr.length / 2];
        end = arr[0];
        let i = arr[mid];
        while(i > 0){
            if(arr[i]  == value ){
                return true;
            }
            i--
        } 
    }
    else if ( arr[mid] < value) {
        start = arr[arr.length / 2];
        end = arr[arr.length-1];
        let i = arr[mid];
        while(i > end){
            if(arr[i]  == value ){
                
                return true;
            }
            i++
        } 
    }
}
x1 = binarySearch1(testArr1,78);
console.log("second test",x1);


function binarySearch(arr, val) {
    var sta = 0;
    var end = arr.length-1;
    while(sta < end) {
        var mid = Math.floor((sta + end) / 2);
        if(arr[mid] === val) {
            return true;
        }
        if(val > arr[mid]) {
            sta = mid + 1;
        } else if(val < arr[mid]) {
            end = mid -1;
        }
    }
    if(arr[sta] === val) {
        return true;
    }

    return false;
}

console.log(binarySearch([2, 3, 4, 6, 8, 10, 11, 12, 13, 15, 17, 21, 22], 5));
