const testStr = "lola";

function disemvowel(str) {
    var newStr = "";
    for (var i = 0; i < str.length; i++) {
        if (str[i] != "a" && str[i] != "e"&& str[i] != "i"&& str[i] != "o"&& str[i] != "u"&&str[i] != "A" && str[i] != "E"&& str[i] != "I"&& str[i] != "O"&& str[i] != "U") {
            newStr += str[i];
        }
    }
    return newStr;
}
const x = disemvowel(testStr);
console.log(x);