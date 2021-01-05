//We can use a forLoop to loop thru each value in array and find the max or min value.  We can also use the Array.reduce() method to find the max and min number in array.
//But using spread operator we can do it in a single line.

//shorthand
const arr = [2, 8, 15, 4];
Math.max(...arr)    // 15
Math.min(...arr)    // 2

console.log(arr)
console.log(Math.max(...arr))
console.log(Math.min(...arr))

