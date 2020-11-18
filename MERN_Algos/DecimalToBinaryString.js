// Create a function dec2BinStr(value) that converts a number into a string representing that number in binary notation. For this challenge, do not use the (very convenient) toString function. For example, given the value 35, the function should return "0b100011".



// ******************************************************************from BuckyJones
function convertDecimalToBinary(number) {
    if (number == 0) {
        return "0b0"
    }
    var binary = "";
    var temp = number;
    while (temp > 0) {
        if (temp % 2 == 0) {
            binary = "0" + binary;
        }
        else {
            binary = "1" + binary;
        }

        temp = Math.floor(temp / 2);
    }
    return "0b" + binary;
}

console.log(convertDecimalToBinary(35))


// ******************************************************************from ShawnLockhart included BuckyJones
function binaryToString(n) {
    if (n == 0) {
        return 0
    } else {
        return n % 2 + 10 * binaryToString(Math.floor(n / 2))
    }
}
console.log("0b" + binaryToString(35))


// ******************************************************************from LydellTyler
function dec2BinStr(value) {
    if (value === 0) return "0"
    let arr = []
    while (value > 0) {
        let y = value % 2
        arr.unshift(y)
        value = Math.floor(value / 2)
    }
    let str = arr.join("")
    return str
}
console.log(dec2BinStr(75))


// ******************************************************************from AhmetDillice
const dec2BinStr = (num, final = []) => {

    var num = (num / 2)

    // spit out array reversed
    if (num <= 0) {

        let output = "";
        for (let i = final.length - 1; i >= 0; i--) {
            output += final[i];
        }
        return "0b" + output;
    }

    // check
    if (num % 1 == 0) {
        final.push(0);
    } else {
        final.push(1)
    }

    num = Math.floor(num)
    // // return
    return dec2BinStr(num, final)

}


console.log(dec2BinStr(35))


// ******************************************************************from AdrionDion
















