const testArr = ['n','n','n','s','n','s','n','s','n','s']
function tenMinWalk(arr) {
    var lPosition = 0;
    var hPosition = 0;
    var done = false;
    if (arr.length > 10) {
        return done;
    } else {
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] == "n") {
                hPosition += 1;
            }
            if (arr[i] == "s") {
                hPosition += -1;
            }
            if (arr[i] == "w") {
                lPosition += 1;
            }
            if (arr[i] == "e") {
                lPosition += -1;
            }
        }
        if(lPosition == 0 && hPosition == 0){
            done = true;
        } else {
            done = false;
        }
    }
    return done;
}

console.log(tenMinWalk(testArr))