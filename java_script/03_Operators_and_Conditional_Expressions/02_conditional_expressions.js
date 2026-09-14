// ###Conditional Expressions

// prompt and alert function
/*
1. For int: parseInt()
2. For float: parseFloat()
3. For converting to string: toString()
4. For boolean: Boolean()
5.For converting to number: Number()

*/

let userInput = prompt("Enter a number:"); 
age = Number.parseInt(userInput); 
console.log("Conditional Expressions");

// ##1. if statement
if (age >= 18) {
    console.log("You are Adult");
}
/*
Enter your age: 20
You are Adult
*/

// ##2. if-else statement
let adult = prompt("Enter your age: ");
adultAge = Number.parseInt(adult);
if (adultAge >= 18) {
    console.log("You are Adult");
} else {
    console.log("You are not Adult");
}
/*
Enter your age: 15
You are not Adult
*/

// ##3. if-else if-else statement
let ageInput = prompt("Enter your age: ");
ageValue = Number.parseInt(ageInput);
if (ageValue >= 18) {
    console.log("You are Adult");
} else if (ageValue >= 13) {
    console.log("You are a Teenager");
} else {
    console.log("You are a Child");
}
/*
Enter your age: 15
You are a Teenager
*/

// ##4. Nested if statement
let nestedAgeInput = prompt("Enter your age: ");
nestedAgeValue = Number.parseInt(nestedAgeInput);
if (nestedAgeValue >= 18) {
    console.log("You are Adult");
} else {
    if (nestedAgeValue >= 13) {
        console.log("You are a Teenager");
    } else {
        console.log("You are a Child");
    }
}
/*
Enter your age: 15
You are a Teenager
*/
