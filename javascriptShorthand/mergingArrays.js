
let arr1 = [20, 30];

//longhand
// let arr2 = arr1.concat([60, 80]);
// [20,30,60,80]


//shorthand
let arr2 = [...arr1, 60, 80];
// [20,30,60,80]
console.log(arr2)
console.log(arr2[1])
console.log(arr2[3])
