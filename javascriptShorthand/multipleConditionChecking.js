// For multiple value matching, we can put all values in array and use indexOF() or includes() method.


//longhand
if (value === 1 || value === "one" || value === 2 || value === "two") {
    //Execute some code here
}

//shorthand 1
if ([1, "one", 2, "two"].indexOf(value) >= 0) {
    //Execute some code here
}

//shorthand 2
if ([1, "one", 2, "two"].includes(value)) {
    //Execute some code here
}



