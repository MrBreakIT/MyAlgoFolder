//To repeat a string for a specified number of time you can use a forLoop. But using the repeat() method we can do it in a single line


//longhand
let str = "";
for (let i = 0; i < 5; i++) {
    str += "Hello";
}
console.log(str);  //Hello Hello Hello Hello Hello


//shorthand
"Hello ".repeat(5);


//TIP: want to apologize to someone by sending 100 times "Sorry"?  Try it with repeat() method. If you want to repeat each string in new line, add \n to string
"sorry\n".repeat(100);