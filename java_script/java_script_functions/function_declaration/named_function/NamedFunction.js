// ### Function Declaration

// 1. Named Function
function namedFunction() {
    for (printedTimes = 1; printedTimes <= 5; printedTimes++) {
        console.log("This is a named function", `Executing ${printedTimes}st time`);
    }
}
namedFunction(); // Calling the named function

/*
This is a named function Executing 1st time
This is a named function Executing 2st time
This is a named function Executing 3st time
This is a named function Executing 4st time
This is a named function Executing 5st time
*/

/*
How it works:
1. The named function is defined using the function keyword followed by the function name.
2. The function body contains a for loop that iterates 5 times, logging a message to the console each time.
3. The named function is called using its name followed by parentheses, which executes the code inside the function body.
*/
