// var num = 10;

// console.log(name);

// var name = "Adrien";
// console.log(name);
// var isWorking = true;


// var arr = [4,"hello",true]
// console.log(num);

// console.log(arr[0])

// var obj = {
//     name: "Adrien",
//     name: "Benny Bob",
//     17: true
// }

// console.log(obj["name"]);
// console.log(obj.name);
// console.log(obj[17]);


// function print1To255(){
//     var index = 0;
//     // for(let i = 0; i < 255; i++){
//     //     console.log(i);
//     //     if(i === 9){
//     //         const option = "Hello World";
//     //         console.log(option);
//     //     }
//     //     // console.log(option);
//     // }
//     // console.log(i);
//     return index;
// }
// print1To255();
// // console.log(index);


var instructors = ["Rob","Adrien","Anne","Will"];

var [first,second,...others] = instructors;

console.log(first);
console.log(second);
console.log(others);

console.log(instructors[0]);

var students = { rob: {name:"Rob Moore"}, shawn:{name:"Shawn Lockhart"} }

var {rob,shawn: benny} = students;

console.log(benny);
var four = add(4,5,6);
console.log(four);

const add = (...args) => {
    var sum = 0;
    console.log(args);
    for(let i = 0; i < args.length; i++){
        sum += args[i];
    }
    return sum;
}

var one = add(1,2,3);

var two = add(4,5,6,7,3);
var three = add(1);

console.log(one,two ,three);

() => console.log("Hello");

two < 25 ? console.log("Adrien is cool") : console.log("Rob is the best");