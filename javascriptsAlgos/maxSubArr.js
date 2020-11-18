const testArr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

var maxSequence = function(arr){
    var newArr = [];
    dict = {};
    for (let i = arr.length - 1; i >= 0; i--) {
        if (dict[arr[i]]) {
            dict[arr[i]]++;
            continue;
        }
        dict[arr[i]] = 1;
    }
    
    return dict;
}

x = maxSequence(testArr);
console.log(x);