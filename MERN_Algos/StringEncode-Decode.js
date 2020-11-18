// You are given a string that may contain sequences of consecutive characters. Create a function to shorten a string by including the character, then the number of times it appears. For "aaaabbcddd", return "a4b2c1d3". If result is not shorter (such as "bb"=>"b2"), return the original string.
// Given an encoded string (see above), decode and return it. Given "a3b2c1d3", return "aaabbcddd".


// ******************************************************************
// ******************************************************************  EricV
// ******************************************************************
// ***************************Encode
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

Encode("aaaabbcddd");

// ***************************Decode
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

Decode("a4b2c1d3");

// ******************************************************************
// ******************************************************************  RobMoore
// ******************************************************************
function stringEncode(str){
    var result = str.charAt(0);
    var count = 1; 
    if (str.length == 1){
        result += count; 
        return result; 
    } else {
        for(var i = 1; i < str.length; i++){
            if(str.charAt(i) != str.charAt(i-1)){
                result += count + str.charAt(i);
                count = 1
            } else {
                count++
            }
            if (i == str.length - 1) {
                result += count; 
            }
        }
        return result; 
    }
}

console.log(stringEncode("aaaabbcddd"))

// Given an encoded string (see above), decode and return it. Given "a3b2c1d3", return "aaabbcddd".

function stringDecode(str){
    let encoded = str.split('')
    let decodedArr = []

    for (let i = 0; i < encoded.length; i++){
        if(isNaN(encoded[i])){
            continue; 
        } else {
            let repeater = encoded[i]
            for (let j = 0; j < repeater; j++){
                decodedArr.push(encoded[i-1])
            }
        }
    }
    var decoded = decodedArr.join('')
    console.log(decoded)
}

stringDecode("a3b2c1d3")

// ******************************************************************
// ******************************************************************  AdrienDion-Instruc
// ******************************************************************

function encode(str){
    var output = '';
    let count = 0;
    let char = str[0]
    for(let i = 0; i <= str.length; i++){
        if(char === str[i]){
            count ++;
        }
        else if(char != str[i] || i === str.length){
            output += char + count;
            count = 1;
            char = str[i];
        }
    }
    return output;
}

function decode(str){
    var char = '';
    var count = ''
    var output = '';
    for(let i =0; i < str.length; i++){
        // This gets multidigit numbers from the string
        while(!isNaN(str[i])){
            count += str[i];
            i++
        }

        while(count > 0){
            output += char;
            count --;
        }
        count = '';
        char = str[i];

    }
    return output;
}















