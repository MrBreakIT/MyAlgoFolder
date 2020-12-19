//To loop thru an array we normally use the traditional forLoop.  We can make use fo the for...of loop to iterate thru arrays.  To access the index of each value we can use for...in loop.


let arr = [10, 20, 30, 40];

//longhand
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

//shorthand
//for...of loop
for (const val of arr) {
    console.log(val);
}
//for...in loop
for (const index in arr) {
    console.log(`index: ${index} and value: ${arr[index]}`);
}


//We can also loop thru object properties using for...in loop.

let obj = { x: 20, y: 50 };
for (const key in obj) {
    console.log(obj[key])
}




