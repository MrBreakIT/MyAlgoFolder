testArr = [1, 2, 2, 2, 7];
testArr1 = [2, 2, 6, 6, 7];

function intersectArr(a, b) {
    var newArr = [];
    while (a.length > 0 && b.length > 0) {
        if (a[0] < b[0]) {
            a.shift();
        } else if (a[0] > b[0]) {
            b.shift();
        } /* they're equal */ else {
            newArr.push(a.shift());
            b.shift();
        }
    }

    return newArr;
}

x = intersectArr(testArr, testArr1);
console.log(x);
