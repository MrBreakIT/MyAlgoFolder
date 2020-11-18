// function removeDups(str) {
//     var newStr = "";
//     var couter = 0;
//     for (var i = 0; i < str.length; i++) {
//         for (var j=1 ; j < str.length; j++) {
//             if (str[i] == str[j]) {
//                 console.log(str[i], str[j]);
//                 couter += 1;
//             }
//             else if ( couter == 0){
//                 newStr += str[i];
//             }
//         }
//     }
//     console.log(couter);
// }

// testSrt = "Snap! crackle! pop!";

// function stringDedupe(str) {
//     let newStr = "";
//     dict = {};
//     for (let i = str.length - 1; i >= 0; i--) {
//         if (dict[str[i]]) {
//             dict[str[i]]++;
//             continue;
//         }
//         (dict[str[i]] = 1)
//             console.log(dict);
//             newStr = str[i] + newStr;

//     }
//     return newStr;
// }

// x = stringDedupe(testSrt);
// console.log(x);

testSrt = "din";
var testStr = "Success";

function stringDedupe(str) {
    let newStr = "";
    dict = {};
    for (let i = str.length - 1; i >= 0; i--) {
        if (dict[str[i]]) {
            dict[str[i]]++;
            continue;
        }
        dict[str[i]] = 1;
    }
    for (let j = 0; j < str.length; j++) {
        if (str[j] == "S"){
            newStr += ")";
            j++;
        }
        for (var key in dict) {
            var value = dict[key];
            
            if (str[j] == key) {
                if (value == 1) {
                    newStr += "(";
                    console.log("((( =",str[j]);
                }
                if (value > 1) {
                    newStr += ")";
                    console.log("))) =",str[j]);
                }
            }
        }
    }
    return newStr;
}

x = stringDedupe(testStr);
console.log("x =", x);
