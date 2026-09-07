// Rules for naming variables in javascript

/*
1. Variable names can only contain letters, numbers, underscores, and dollar signs.
2. Variable names must begin with a letter, underscore, or dollar sign.
3. Variable names are case-sensitive.
4. Reserved words (like JavaScript keywords) cannot be used as variable names.
5. Variable names should be descriptive and meaningful.
*/

// ##1. var: The var keyword is used to declare a variable in JavaScript. It has function scope, which means that it is accessible within the function in which it is declared. If it is declared outside of any function, it has global scope. However, var has some issues with hoisting and can lead to unexpected behavior, so it is generally recommended to use let or const instead.

// console.log("Now we are learning about the var, let, and const in javascript!!!")
// var a = 21
// var b = null
// var c = 'Surak Kumar'
// var d = undefined
// {
//     var c = 'Mayur Jadhav'
//     console.log(c);
// }
// console.log(c);
/*
Now we are learning about the var, let, and const in javascript!!!
Mayur Jadhav
Mayur Jadhav
*/

// We're never going to use the 'var' in javascript but changing the old code where developers used the 'var' only those files we can use 'var' (Future javascript code we only use 'let' in javascript)


// ##2. let: The let keyword is used to declare a variable in JavaScript. It has block scope, which means that it is only accessible within the block in which it is declared. This makes it a better choice than var for declaring variables that are only needed within a specific block of code.

// let a = 21
// let b = null
// let c = 'Surak Kumar'
// let d = undefined
// {
//     let c = 'Mayur Jadhav'
//     console.log(c);
// }
// console.log(c);
/*
Mayur Jadhav
Surak Kumar
*/

// That's why we use let, it will create a new variable in the block scope and it will not change the value of the variable outside the block scope. 

/*
### var vs let
1. var has function scope, while let has block scope.
2. var can be redeclared and updated, while let can only be updated but not redeclared in the same scope.
3. var is hoisted to the top of its scope, while let is not hoisted.
4. var can lead to unexpected behavior due to its function scope, while let is more predictable due to its block scope.
5. var is generally not recommended for use in modern JavaScript, while let is preferred for declaring variables that may change value.
*/


// ##3. const: The const keyword is used to declare a variable in JavaScript that cannot be reassigned. It has block scope, just like let. This makes it a good choice for declaring variables that should not change value, such as constants or configuration values.

let a = 21
const author = 'Surak Kumar' // This variable cannot be reassigned but can be updated
console.log(author);
/* 
 Surak Kumar
*/

// const name; // This will throw an error because we cannot declare a const variable without initializing it
author = 'Mayur Jadhav' // This will throw an error because we cannot reassign a const variable

let c = 'Surak Kumar'
let d = undefined
{
    let c = 'Mayur Jadhav'
    console.log(c);
    // Mayur Jadhav
}
console.log(c);
// Surak Kumar
