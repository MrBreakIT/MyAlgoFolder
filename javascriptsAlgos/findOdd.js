var testArr=[20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5];
function findOdd(arr) {
    var newArr = [];
    dict = {};
    for (let i = arr.length - 1; i >= 0; i--) {
        if (dict[arr[i]]) {
            dict[arr[i]]++;
            continue;
        }
        dict[arr[i]] = 1;
    }
    var output = [0];
        for (var key in dict) {
            var value = dict[key];
            if(value%2 != 0){
                output =  parseInt(key);
            }
        }
    return output;
}


x = findOdd(testArr);
console.log(x);
