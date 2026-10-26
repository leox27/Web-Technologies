
// ###5. Operators in JavaScript

/*
Operators in JavaScript
1. Unary Operators
2. Binary Operators
   2.1 Arithmetic Operators
   2.2 Relational Operators
   2.3 Logical Operators
   2.4 Assignment Operators
3. Ternary Operators
4. string concatenation operator
*/


// 2.1 Arithmetic Operators [+, -, *, /, %, **]
let numberOne = 10;
let numberTwo = 20;
console.log("Addition of two numbers: " + (numberOne + numberTwo)); // Addition of two numbers: 30
console.log("Subtraction of two numbers: " + (numberTwo - numberOne)); // Subtraction of two numbers: 10
console.log("Multiplication of two numbers: " + (numberOne * numberTwo)); // Multiplication of two numbers: 200
console.log("Division of two numbers: " + (numberTwo / numberOne)); // Division of two numbers: 2
console.log("Modulus of two numbers: " + (numberTwo % numberOne)); // Modulus of two numbers: 0
console.log("Exponentiation of two numbers: " + (numberOne ** numberTwo)); // Exponentiation of two numbers: 100000000000000000000

// 2.2 Relational Operators [>, <, >=, <=, ==, ===, !=, !==]
let numberThree = 30;
let numberFour = 40;
console.log("Is numberThree greater than numberFour? " + (numberThree > numberFour)); // Is numberThree greater than numberFour? false
console.log("Is numberThree less than numberFour? " + (numberThree < numberFour)); // Is numberThree less than numberFour? true
console.log("Is numberThree greater than or equal to numberFour? " + (numberThree >= numberFour)); // Is numberThree greater than or equal to numberFour? false
console.log("Is numberThree less than or equal to numberFour? " + (numberThree <= numberFour)); // Is numberThree less than or equal to numberFour? true
console.log("Is numberThree equal to numberFour? " + (numberThree == numberFour)); // Is numberThree equal to numberFour? false
console.log("Is numberThree strictly equal to numberFour? " + (numberThree === numberFour)); // Is numberThree strictly equal to numberFour? false
console.log("Is numberThree not equal to numberFour? " + (numberThree != numberFour)); // Is numberThree not equal to numberFour? true
console.log("Is numberThree strictly not equal to numberFour? " + (numberThree !== numberFour)); // Is numberThree strictly not equal to numberFour? true

// 2.3 Logical Operators [&&, ||, !]
let numberFive = 50;
let numberSix = 60;
console.log("Is numberFive greater than 40 AND numberSix less than 70? " + (numberFive > 40 && numberSix < 70)); // true
console.log("Is numberFive less than 40 OR numberSix greater than 70? " + (numberFive < 40 || numberSix > 70)); // false
console.log("Is numberFive NOT greater than 40? " + !(numberFive > 40)); // false
console.log("Is numberSix NOT less than 70? " + !(numberSix < 70)); // false
console.log("Is numberFive greater than 40 AND numberSix less than 70? " + (numberFive > 40 && numberSix < 70)); // true
console.log("Is numberFive less than 40 OR numberSix greater than 70? " + (numberFive < 40 || numberSix > 70)); // false
console.log("Is numberFive NOT greater than 40? " + !(numberFive > 40)); // false
console.log("Is numberSix NOT less than 70? " + !(numberSix < 70)); // false

// 2.4 Assignment Operators [=, +=, -=, *=, /=, %=]
let numberSeven = 70;
console.log("Initial value of numberSeven: " + numberSeven);
console.log("After adding 10 to numberSeven: " + (numberSeven += 10)); // 80
console.log("After subtracting 20 from numberSeven: " + (numberSeven -= 20));
console.log("After multiplying numberSeven by 2: " + (numberSeven *= 2));
console.log("After dividing numberSeven by 4: " + (numberSeven /= 4));
console.log("After taking modulus of numberSeven by 3: " + (numberSeven %= 3));

// 1. Unary Operators [++, --, typeof, delete]
let gameScore = 0;
console.log("Initial game score: " + gameScore);
console.log(++gameScore); // 1
console.log(++gameScore); // 2
console.log(++gameScore); // 3
console.log("Type of gameScore: " + typeof gameScore); // number
let playersLives = 5;
console.log("Initial players lives: " + playersLives);
console.log(--playersLives); // 4
console.log(--playersLives); // 3
console.log(--playersLives); // 2
console.log("Type of playersLives: " + typeof playersLives); // number

// 4. String Concatenation Operator [+]
let firstName = "John";
let lastName = "Doe";
console.log("Full name: " + firstName + " " + lastName); // Full name: John Doe

// 3. Ternary Operator [condition ? exprIfTrue : exprIfFalse]
let age = 18;
let canVote = (age >= 18) ? "Yes, you can vote." : "No, you cannot vote.";
console.log(canVote); // Yes, you can vote.
let isAdult = (age >= 18) ? true : false;
console.log("Is the person an adult? " + isAdult); // true

