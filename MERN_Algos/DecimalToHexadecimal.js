// Create a function dec2HexStr(value) that converts a number into a string representing that number in hexadecimal notation. For this challenge, do not use the (very convenient) toString function. For example, given the value 108, the function should return "0x6C".

// *********************************************************** from AhmetDillice
const dec2Hex = (num, final = []) => {

    // split by 16
    num = (num / 16);

    // spit out array reversed
    if (num <= 0) {

        // set output
        let output = "";

        // loop reversed
        for (let i = final.length - 1; i >= 0; i--) {

            // setup letters
            if (final[i] === 10) {
                output += "A";
            } else if (final[i] === 11) {
                output += "B";
            } else if (final[i] === 12) {
                output += "C";
            } else if (final[i] === 13) {
                output += "D";
            } else if (final[i] === 14) {
                output += "E";
            } else if (final[i] === 15) {
                output += "F";
                // spit out the numbers
            } else {
                // append to output
                output += final[i];
            }

        }

        // setup final string
        return "0x" + output;

    }

    // push decimal times 16 into array
    final.push((num % 1) * 16);

    // recursive
    return dec2Hex(Math.floor(num), final)

}

// debug
console.log(dec2Hex(108));

// *********************************************************** from AhmetDillice (and the reverse)

//  using replace after trype casting it into a string making it go back to a number
// const hex2Decimal = (hex) => {

//     let hexString = String(hex).replace("0x", "");
//     output = hexString;
//     return output;

// }

// //debug
// console.log(hex2Decimal(0xBC));

// *********************************************************** from AhmetDillice (and the reverse)
const hex2Decimal = (hex) => {

    let hexString = hex.replace("0x", "");
    arr = [...hexString].reverse(),
        output = 0;

    // loop
    for (let i = 0, len = arr.length; i < len; i++) {

        // setup letters
        if (arr[i] === "A") {
            output += 10;
        } else if (arr[i] === "B") {
            output += 11;
        } else if (arr[i] === "C") {
            output += 12;
        } else if (arr[i] === "D") {
            output += 13;
        } else if (arr[i] === "E") {
            output += 14;
        } else if (arr[i] === "F") {
            output += 15;
            // spit out the numbers
        } else {
            // append to output
            output += (arr[i] * Math.pow(16, i));
        }

    }

    return output;

}


//debug
console.log(hex2Decimal("0x6C"));


// *********************************************************** from AdrionDion
function decimalToHexa(num) {
    var hexa = '';
    while (num > 0) {
        num = num / 16;
        var remainder = (num - Math.floor(num)) * 16;
        switch (remainder) {
            case 10:
                hexa = 'a' + hexa;
                break;
            case 11:
                hexa = 'b' + hexa;
                break;
            case 12:
                hexa = 'c' + hexa;
                break;
            case 13:
                hexa = 'd' + hexa;
                break;
            case 14:
                hexa = 'e' + hexa;
                break;
            case 15:
                hexa = 'f' + hexa;
                break;
            default:
                hexa = remainder.toString() + hexa;
        }
        num = Math.floor(num);
    }

    return hexa;
}
console.log(decimalToHexa(119));














