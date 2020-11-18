var testStr = "AAAAaaaabbbbBBBBcccc"

const stringEncode = (str) => {
    var counter = 0;
    var newStr = "";
    for (var i = 0; i < str.length; i++ ){
        if ( str[i] == str[i+1] ){
            counter ++;
        }
        else if (str[i] != str[i+1]) {
            counter += 1;
            newStr += str[i] + counter;
            counter = 0;
        }
    }
    console.log(newStr)
    return newStr;
}

x = stringEncode(testStr);
console.log(x);

const Decode = (str) => {
    var Dstr = "";
    for (var i = 0; i < str.length; i++){
        var Letter = isNaN(str[i])
        if (Letter){
            var currentL = str[i];
        }
        else{
            var int = str[i];
            for (var j = 0; j < int; j++){
                Dstr+= currentL;
            }
        }
    }
    console.log(Dstr);
    return Dstr;
}

y = Decode(x);
console.log(y);