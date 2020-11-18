//*********************************************************  #1
const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
//Predict the output         
console.log(randomCar)
console.log(otherRandomCar)
//                        => Output- Tesla Mercedes


//*********************************************************  #2
const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;
//Predict the output
// console.log(name);
console.log(otherName);
//                     => wont output @ name but prints Elon @othername

//*********************************************************  #3
const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  
//Predict the output
console.log(password);
console.log(hashedPassword);
//                     =>const password is a set var outside const person so it will print 
//                     =>const password: hashed Password is not an object inside person so becomes undefined

//*********************************************************  #4
const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;
const [,,,second] = numbers;
const [,,,,,,,,third] = numbers;     // const first,second,third become 2,5,2
//Predict the output
console.log(first == second);    //false- 2 does not equal 5
console.log(first == third);     //true- 2 does equal 2
//          => const first,second,third become 2,5,2
//          
//          

//*********************************************************  #5
const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
//Predict the output
console.log(key);                     //prints value
console.log(secondKey);               //prints array [1,5,1,8,3,3]
console.log(secondKey[0]);            //prints 1
console.log(willThisWork);            //prints 5






