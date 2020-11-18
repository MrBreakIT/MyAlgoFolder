var testStr = "AAAAaaaabbbbBBBBcccc"

const Encode = (str) => {
    var Lcount = 0;
    var Estr = "";
    for (var i = 0; i < str.length; i++){
        if (str[i] == str[i + 1]){
            Lcount++
        }
        else if (str[i] != str[i + 1]){
            Lcount+=1;
            Estr+=str[i] + Lcount;
            Lcount = 0;
        }
    }
    console.log(Estr);
    return Estr;
}
x = Encode(testStr);
console.log(x)