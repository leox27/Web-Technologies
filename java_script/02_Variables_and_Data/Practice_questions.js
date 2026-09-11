// ###Practice Questions

// #1. Write a program that takes two numbers and logs their sum, difference, product, and quotient.

let num1 = 10;
let num2 = 5;
console.log(`The addition is ${num1+num2}`);
console.log(`The difference is ${num1-num2}`);
console.log(`The product is ${num1*num2}`);
console.log(`The quotient is ${num1/num2}`);
/*
The addition is 15
The difference is 5
The product is 50
The quotient is 2
*/


// #2. What is the output of 5 ** 3? Write a script to verify.

console.log(5 ** 3); // 125


// #3. Write a program that uses the modulus operator % to determine if a number is even or odd.

let number = 7;
if (number % 2 === 0) {   // triple equals (===) is used to check both value and type equality, ensuring that the number is exactly equal to 0 when divided by 2.

    console.log(`${number} is even`);
} else {
    console.log(`${number} is odd`);
}
/*
7 is odd
*/


// #4. Let x = 10. What is the difference in output between console.log(x++) and console.log(++x)?

let x = 10;
console.log(x++); // Logs 10, then increments x to 11
console.log(++x); // Increments x to 12, then logs 12
/*
10
12
*/


// #5. Write an expression that uses the += operator to add 25 to a variable score.

let score = 50;
score += 25;
console.log(score); // 75


// #6. Write a program comparing 10 (Number) and "10" (String) using == and ===. Log both results.

let num = 10;
let str = "10";
console.log(num == str);  // true (loose equality)
console.log(num === str); // false (strict equality)
/*
true
false
*/


// #7. Write a script to check if a variable isLoggedIn is true AND hasPermission is true using logical operators.

let isLoggedIn = true;
let haspermission = true;
console.log(isLoggedIn && haspermission); // true
/*
true
*/


// #8. What is the result of ! (10 > 5)? Verify it with code.

console.log(!(10 > 5)); // ! negates the boolean value of the expression (10 > 5), which is true, so it returns false.
/*
false
*/


// #9. Write a multi-line comment explaining the difference between = and ==.

/*
"=" is the assignment operator, used to assign a value to a variable. For example, x = 5 assigns the value 5 to the variable x.

"==" is the equality operator, used to compare two values for equality, but it performs type coercion if the types are different. For example, 5 == "5" returns true because the string "5" is coerced to a number before comparison.

"===" is the strict equality operator, which checks for both value and type equality. For example, 5 === "5" returns false because the types are different (number vs string).
*/


// #10. Write an if statement that logs "Good Morning" if the variable time is less than 12.

let time = 10;
if (time < 12) {
    console.log("Good Morning");
}
/*
Good Morning
*/


// #11. Write an if...else statement that checks if a user's balance is greater than 500. If true, log "Purchase approved", else log "Insufficient funds".

let balance = 600;
if (balance > 500) {
    console.log("Purchase approved")
} else {
    console.log("Insufficient funds")
}
/*
Purchase approved
*/


// #12. Write an if...else if...else chain that logs "Child" (< 13), "Teenager" (13-19), or "Adult" (>= 20) based on an age variable.

let age = 34;
if (age < 13) {
    console.log("Child");
} else if (age >= 13 && age <= 19) {
    console.log("Teenager");
} else {
    console.log("Adult");
}
/*
Adult
*/


// #13. Convert the if...else statement from Question 11 into a single-line ternary operator expression.

let balance1 = 600;
let message = (balance1 > 500) ? "Purchase approved" : "Insufficient funds";
console.log(message);
/*
Purchase approved
*/

// #14. What does null === undefined evaluate to? Test it.

let nullValue = null;
let undefinedValue = undefined;
console.log(nullValue === undefinedValue); // false, because they are different types and values


// #15. What does null == undefined evaluate to? Test it and note why it differs from the previous question.

console.log(nullValue == undefinedValue); // true, because == performs type coercion and considers null and undefined to be equal in value, even though they are different types


// #16. Write a program using the logical OR || operator to grant website access if isAdmin is true OR isPremiumUser is true.

let isAdmin = false;
let isPremiumUser = true;

if (isAdmin || isPremiumUser) {
    console.log("Website access granted");
} else {
    console.log("Access denied");
}
/*
Website access granted
*/


// #17. Write a switch statement that takes a number (1-7) and logs the corresponding day of the week (1 = Monday, etc.).

let dayNumber = 3;
switch (dayNumber) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day number");
}

// #18. In a switch statement, what happens if you forget to include the break keyword? Write a script to demonstrate this "fall-through" behavior.

/*
In a switch statement, if you forget to include the break keyword, the program will continue to execute the subsequent cases until it encounters a break or reaches the end of the switch statement. This is known as "fall-through" behavior.
*/


// #19. Write a program that checks if a number is divisible by both 2 AND 3.

let num3 = 12;
if (num3 % 2 === 0 && num3 % 3 === 0) {
    console.log(`${num3} is divisible by both 2 and 3`);
}
/*
12 is divisible by both 2 and 3
*/


// #20. Write a program that checks if a number is divisible by 2 OR 3.

let num4 = 10;
if (num4 % 2 === 0 || num4 % 3 === 0) {
    console.log(`${num4} is divisible by either 2 or 3`);
}
/*
10 is divisible by either 2 or 3
*/


// #21. What does typeof (typeof 100) return? (Hint: Operators evaluate step-by-step).



// Let a = 5 and b = 10. Write a script to swap their values without using a third temporary variable. (Hint: arithmetic operators).
// Evaluate and log the result of "5" + 5. Does it add or concatenate?
// Evaluate and log the result of "5" - 2. Does it subtract or fail?
// Use a ternary operator to assign a variable discount to 20 if isMember is true, otherwise assign it 0.
// Write an if statement to check if a string variable password has a length greater than 8 characters (password.length > 8).
// Write a program that checks if a person's age is NOT between 13 and 19 using the logical NOT ! operator.
// Create a variable x = 5. Write an expression using assignment operators to multiply it by 3, then subtract 2, then divide by 2.
// What is the output of true + true in JavaScript? Write code to verify it.
// Write a nested if statement: check if a user is over 18. If true, check if they have a license. If they have a license, log "Can drive".