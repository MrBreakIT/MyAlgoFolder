var testArr=[8,1,7,8,0,0,2,9,3,5]

function phoneNum(arr){
    var number="(";
    for(var i = 0; i < arr.length; i++){
        if(i == 3){
            number += ") ";
            number += arr[i];
        }
        else if(i == 6){
            number += "-";
            number += arr[i]
        }
        else{
            number += arr[i];
        }
    }
    return number;
}
x = phoneNum(testArr);
console.log(x);