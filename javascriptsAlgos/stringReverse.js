var testString = "life is not a drill!"

function stringToArray(string){
    newArr = [];
    for(var i = 0, j = 0; i<string.length; i++){
        if (string[i+1] == " " || i == string.length-1){
            const word = string.slice(j,i+1);
            newArr.push(word);
            j = i+2; 
        }
    }
    return newArr;
}

stringArr = stringToArray(testString);
console.log(stringArr);

function wordReverse(str) {
    let word = stringToArray(str);
    let reversed = "";
    for (let i = word.length - 1; i >= 0; i--) {
        reversed += word[i] + " ";
    }
    return reversed;
}

console.log(wordReverse(testString));