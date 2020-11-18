const testStr = "({})[({})]"

function validBraces(braces){
    var braceDict = {
        "(" : ")",
        "[" : "]",
        "{" : "}"
    }
    var output = false;
    for(var i = 0; i < braces.length; i++){
        console.log(i)
        if(braceDict[braces[i]] != null){
            if(braces[i+1] == braceDict[braces[i]]){
            console.log("here", braceDict[braces[i]], braces[i+1]);
            output = true;
            i++;
            } else {
                for(var j = braces.length-1-i; j > i; j--){
                    if(braces[j] == braceDict[braces[i]]){
                        output = true;
                        break;
                    } else {
                        return output = false;
                    }
                }
            }
        }
    }
    return output;
}

x = validBraces(testStr);
console.log(x);