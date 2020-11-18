const testArr = ['A', 'B', 'D', 'E']

function missingLetter(arr) {
    var alpha = "abcdefghijklmnopqrstuvwxyz";
    var capAlpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let output = "";
    let newArr = [];
    let capArr = [];
    for (var i = 0; i < alpha.length; i++) {
        if (alpha[i] == arr[0]) {
            for (var j = i, x = 0; x < arr.length; x++, j++) {
                if (alpha[j] == arr[x]) {
                    newArr.push(j);
                }
            }
        }
    }
    for (var j = 0; j < capAlpha.length; j++) {
        if (capAlpha[j] == arr[0]) {
            for (var x = j, z = 0; z < arr.length; z++, x++) {
                if (capAlpha[x] == arr[z]) {
                    capArr.push(x);
                }
            }
        }
    }
    if (newArr.length > 0) {
        let p = newArr[newArr.length - 1] + 1;
        output = alpha[p];
    } else {
        let p = capArr[capArr.length - 1] + 1;
        output = capAlpha[p];
    }
    return output;
}
console.log(missingLetter(testArr));