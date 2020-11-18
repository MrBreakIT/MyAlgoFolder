// Rotate String and isRotation
// Create a standalone function that accepts a string and an integer, and rotates the characters in the string to the right by that amount. Example: given ("Boris Godunov",5), you should return "dunovBoris Go".
// Create the function isRotation(str1,str2) that returns whether the second string is a rotation of the first. Would you change your implementation if you knew that the two were usually entirely unrelated?

//****************************************************************RobertSantos
testString="Boris Godunov"

function rotateString(str,num){
    var newStr= "";
    var newStr1= "";
    var divide = str.length-num;
    for(var i=0; i<divide; i++ ){
        newStr += str[i];
    }
    for(var j=divide; j<str.length; j++){
        newStr1 += str[j];
    }
    return newStr1 += newStr;
}

x  = rotateString(testString,5);
console.log(x);

function isRotation (str1,str2){
    if (str1.length != str2.length){
        return false;
    }
    for(var i=0; i<str2.length; i++){
        test = rotateString(str1,i);
        if(test == str2){
            return true;
        }
    }
    return false;
}

t = isRotation(x,testString);
console.log(t);
console.log("******************************************************")
// ****************************************************************AhmedDillice
// rotate string
const rotateStr = (str, steps="1", direction="right") => {
    // convert to array
    let arr = [...str],
        letter;
    // loop
    for(let i = 0, len = steps; i < len; i++){
        // go right
        if(direction == "right"){
            // remove letter from end
            letter = arr.pop();
            // place it in front of arr
            arr.unshift(letter); 
        //go left 
        }else{
            // remove letter from front
            letter = arr.shift();
            // add letter to back of array
            arr.push(letter)
        }
    }
    // join
    str = arr.join("");
    // return
    return str;
}

// check if string is rotation
const isARotation = (org, str) => {
    // init
    const orgLen = org.length,
        strLen = str.length;
    // forst check if length is same or not
    if(orgLen !== strLen){
        // return false
        return false;
    }

    // init
    const tiledString = org + str;
    // check for sub string inside string
    if(tiledString.indexOf(org) > -1){
        // return true
        return true;
    }else{
        // return false
        return false;
    }
}

console.log(rotateStr("Boris Godunov", 5))
console.log(isARotation("Boris Godunov", "dunovBoris Go"))
console.log("******************************************************")
//****************************************************************AdrienDion-instructor
function rotateString(str,num){
    num %= str.length;
    console.log("This is the real number",num);
    var arr = str.split("");
    for(let i = 0; i < num; i++){
        arr.unshift(arr.pop());
    }
    return arr.join("");
}
console.log(rotateString("Hello World",50004));

const isitRotation = (str1,str2) => {
    if(str1.length !== str2.length){
        return false;
    }
    for(let i = 0; i <str1.length; i++){
        if(str1 === rotateString(str2,i)){
            return true;
        }
    }
    return false;
}

console.log(isitRotation("Bingo","ingtB"));

