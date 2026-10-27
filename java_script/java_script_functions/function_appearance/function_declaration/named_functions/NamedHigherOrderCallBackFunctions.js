
/*
1.named higher order function
2.named call back function
*/

function namedHigherOrderFunction(anotherFunction){ // anotherFunction is a call back function
    console.log(anotherFunction());
}

function namedCallBackFunction(){
    return "Named CallBack Function Executed.";
}
namedHigherOrderFunction(namedCallBackFunction);

/*
Named CallBack Function Executed.
*/

/*
How it works:
1. namedHigherOrderFunction is a higher order function that takes another function as an argument.
2. namedCallBackFunction is a callback function that returns a string.
3. When namedHigherOrderFunction is called with namedCallBackFunction as an argument, it executes the callback function and logs its return value.
*/