var testStr="MCDXLIV"

function romanNumDecoder(str){
    var romanNumDict = {
        "M": 1000,
        "CM": 900,
        "D": 500,
        "CD": 400,
        "C": 100,
        "XC": 90,
        "L": 50,
        "XL": 40,
        "X": 10,
        "IX": 9,
        "V": 5,
        "IV": 4,
        "I": 1
    }
    var output = 0;
    for(var i = 0; i < str.length; i++){
        if(romanNumDict[str[i]] < romanNumDict[str[i+1]]){
            output += romanNumDict[str[i+1]] - romanNumDict[str[i]];
            i++
        }else{
            output += romanNumDict[str[i]];
        }
    }
    return output;
}
var x = romanNumDecoder(testStr);
console.log(x);


// function romanToArabic(romanNumber){
//     romanNumber = romanNumber.toUpperCase();
//     const romanNumList = ["CM","M","CD","D","XC","C","XL","L","IX","X","IV","V","I"];
//     const corresp = [900,1000,400,500,90,100,40,50,9,10,4,5,1];
//     let index =  0, num = 0;
//     for(let rn in romanNumList){
//       index = romanNumber.indexOf(romanNumList[rn]);
//       while(index != -1){
//         num += parseInt(corresp[rn]);
//         romanNumber = romanNumber.replace(romanNumList[rn],"-");
//         index = romanNumber.indexOf(romanNumList[rn]);
//       }
//     }
//     return num;
//   }
  