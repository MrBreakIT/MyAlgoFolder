const unionArray = (arrA, arrB) => {

    // ini
    let i = 0,
    j = 0,
    final = [];
    let checkA = {};
    let checkB = {};


    // loop
    while(i < arrA.length && j < arrB.length){


        if((checkA[arrA[i]] !== undefined)){
            checkA[arrA[i]] += 1;
        }else{
            checkA[arrA[i]] = 1;
        }  

        if((checkB[arrB[j]] !== undefined)){
            checkB[arrB[j]] += 1;
        }else{
            checkB[arrB[j]] = 1;
        }  

        // increment
        i++;
        j++;


    }

    // loop
    for(item in checkA){
        if(checkA[item] > checkB[item] || !checkB[item]){
            for(let i = 0, len = checkA[item]; i < len; i++){
                final.push(item);
            }
        }
    }
    // loop
    for(item in checkB){
        if(checkB[item] >= checkA[item] || !checkA[item]){
            for(let i = 0, len = checkB[item]; i < len; i++){
                final.push(item);
            }
        }
    }

// return
return final;        

}


// output
console.log(unionArray([1,2,2,2,7], [2,2,6,6,7]))