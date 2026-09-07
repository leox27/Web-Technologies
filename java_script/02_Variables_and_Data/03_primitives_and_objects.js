// ###Primitives and Objects

/* NNSSBBU

#1. Primitives: In JavaScript, there are six primitive data types: number, null, string, symbol, boolean, BigInt, undefined. These data types are immutable, which means that their values cannot be changed once they are created. When you assign a primitive value to a variable, the variable holds a copy of the value.

*/

// NNSSBBU
let a = 21
let b = null
let c = 'Suraj Kumar'
let d = Symbol('Suraj Kumar')
let e = true
let f = BigInt(21) + 1n
let g = undefined

console.log(a, b, c, d, e, f, g);
console.log(typeof a, typeof b, typeof c, typeof d, typeof e, typeof f, typeof g);
/*
21 null Suraj Kumar Symbol(Suraj Kumar) true 22n undefined
number object string symbol boolean bigint undefined
 */


/*
#2. Objects: In JavaScript, objects are a collection of key-value pairs. They can hold multiple values and can be modified after they are created. When you assign an object to a variable, the variable holds a reference to the object in memory, rather than a copy of the object itself. This means that if you modify the object through one variable, the changes will be reflected in all other variables that reference the same object.

*/

const obj = {
    name: 'Suraj Kumar', // We can use single quotes or double quotes for string values in JavaScript. Both are valid and can be used interchangeably. However, it is generally recommended to use single quotes for string values in JavaScript, as it is more common and consistent with other programming languages.
    
    "age": 21,
    "isStudent": true,
    "address": {
        "city": 'Pune',
        "state": 'Maharashtra'
    },
    "son": undefined,
}

console.log(obj['name']);  //using bracket notation
console.log(obj.name);     //using dot notation
/*
Suraj Kumar
Suraj Kumar
 */

