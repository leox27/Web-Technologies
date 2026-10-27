/*
1.arrow higher order function
2.arrow call back function
*/

let arrowHigherOrderFunction=anotherFunction=>{
    console.log(anotherFunction);
}
arrowHigherOrderFunction(_=>"Arrow CallBack Function Executed.");

/*
Arrow CallBack Function Executed.
*/

/*
How it works:
1. arrowHigherOrderFunction is an arrow higher order function that takes another function as an argument.
2. The arrow callback function returns a string.
3. When arrowHigherOrderFunction is called with the arrow callback function as an argument, it executes the callback function and logs its return value.
*/
