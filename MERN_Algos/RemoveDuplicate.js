// Remove duplicate characters (case-sensitive) including punctuation. Keep only the last instance of each character. Given "Snaps! crackles! pops!", return "Snrackle ops!".

function stringDedupe(str) {
    let newStr = "";
    dict = {};
    for (let i = str.length - 1; i >= 0; i--) {
        if (dict[str[i]]) {
            dict[str[i]]++;
            continue;
        } else if ((dict[str[i]] = 1)) {
            console.log(dict);
            newStr = str[i] + newStr;
        }
    }
    return newStr;
}

console.log(stringDedupe("Snaps! crackles! pops!"))

// ************************************************************************SchneiderB.
const noRepeats = str => {
    let newStr = '';
    console.log(str, str.length)
    for (let i = 0; i <= str.length -1; i++) {
        for (let j = 0; j <= str.length - 1; j++) {
            if (j != str.length - 1) {
                if (str[j] == str[i] && i != j && j > i) {
                    console.log(str[j], str[i], j, i)
                    break;
                }
            } else if (j == str.length - 1) {
                if(i == j) {
                    newStr += str[i]
                } else if( str[i] != str[j]) {
                    newStr += str[i]
                }
            }
        }
    }
    console.log(newStr)
    return newStr
}

noRepeats('Mississippi');