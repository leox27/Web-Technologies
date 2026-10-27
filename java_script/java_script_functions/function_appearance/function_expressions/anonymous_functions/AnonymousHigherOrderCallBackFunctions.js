
/*
1. Anonymous higher order function
2. Anonymous call back function
*/

let anonymousHigherOrderFunction=function (anotherFunction){ // anotherFunction is a call back function
    console.log(anotherFunction);
}

anonymousHigherOrderFunction(function (){
    return "Anonymous CallBack Function Executed.";
});

/*
Anonymous CallBack Function Executed.
*/

/*
How it works:
1. anonymousHigherOrderFunction is an anonymous higher order function that takes another function as an argument.
2. The anonymous callback function returns a string.
3. When anonymousHigherOrderFunction is called with the anonymous callback function as an argument, it executes the callback function and logs its return value.
*/