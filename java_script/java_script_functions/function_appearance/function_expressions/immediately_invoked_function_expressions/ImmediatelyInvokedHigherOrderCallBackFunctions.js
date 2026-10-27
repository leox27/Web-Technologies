/*
1.immediately invoked higher order function
2.immediately invoked call back function
*/

(function (anotherFunction){
    console.log(anotherFunction);
})(_=>"Immediately Invoked CallBack Function Executed."); 

/*
_=>"Immediately Invoked CallBack Function Executed."
*/

// "_=>"Immediately Invoked CallBack Function Executed."" is an immediately invoked call back function that returns a string. It is passed as an argument to the immediately invoked higher order function, which executes it and logs its return value.

/*
How it works:
1. The immediately invoked higher order function takes another function as an argument.
2. The immediately invoked callback function returns a string.
3. When the immediately invoked higher order function is called with the immediately invoked callback function as an argument, it executes the callback function and logs its return value.
*/