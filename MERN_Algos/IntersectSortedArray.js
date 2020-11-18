// Efficiently combine two sorted arrays into an array containing the sorted multiset intersection of the two. Example: given [1,2,2,2,7] and [2,2,6,6,7], return [2,2,7].

// **************************************************************Example1
a = [1, 2, 2, 2, 7]
b = [2, 2, 7]
function intersect_safe(a, b) {
    var ai = 0, bi = 0;
    var result = [];

    while (ai < a.length && bi < b.length) {
        if (a[ai] < b[bi]) { ai++; }
        else if (a[ai] > b[bi]) { bi++; }
        else /* they're equal */ {
            result.push(a[ai]);
            ai++;
            bi++;
        }
    }

    return result;
}

console.log(intersect_safe([1, 2, 2, 2, 7], [2, 2, 7]))
// **************************************************************Example2
function intersect(a, b) {
    return a.filter(Set.prototype.has, new Set(b));
}

console.log(intersect([1, 2, 3], [2, 3, 4, 5]));

// // **************************************************************Example3
function intersectME(a, b) {
    var setA = new Set(a);
    var setB = new Set(b);
    var intersection = new Set([...setA].filter(x => setB.has(x)));
    return Array.from(intersection);
}

console.log(intersectME([1, 2, 2, 2, 7], [2, 2, 7]));

// // **************************************************************Santos
testArr = [1, 2, 2, 2, 7, 7];
testArr1 = [2, 2, 6, 7];

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

// // **************************************************************AhmetDillice
const interSect = (arr1, arr2) => {

    // ini
    let final = [];
    // loop
    for (let i = 0, len = arr1.length; i < len; i++) {
        for (let j = 0, len = arr2.length; j < len; j++) {
            if (arr1[i] === arr2[j]) {
                final.push(arr2[j]);
                arr2.splice(j, 1)
            }
        }
    }

    // return
    return final;

}

console.log(interSect([1, 2, 2, 2, 7], [2, 2, 6, 6, 7]))

x = intersectArr(testArr, testArr1);
console.log(x);
