function solution(num){
    var sum = 0;
    var newNum = num-1;
    while( newNum-1 >= 0){
        if(newNum%3 == 0 || newNum%5 == 0){
            sum += newNum;
            console.log(newNum);
            newNum--;
            
        }
        else{
            newNum--;
        }
    }
    return sum;
}

x=solution(10);
console.log(x);