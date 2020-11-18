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
//Create the function isRotation(str1,str2) that returns whether the second string is a rotation of the first. Would you change your implementation if you knew that the two were usually entirely unrelated?