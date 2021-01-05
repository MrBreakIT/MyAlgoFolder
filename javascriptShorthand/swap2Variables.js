
// To swap two variables, we often use a thrid variable. We can swap two variables easily with array destructuring assignment.

// 1- Swap 2 variables


let x = "Hello", y = 55;

// longhand
const temp = x;
x = y;
y = temp;

// shorthand
[x, y] = [y, x]


// another example
let a = 'world', b = 'hello';
[a, b] = [b, a]
console.log(a)
console.log(b)
