# Complete JavaScript Chapter 2: Operators & Conditional Expressions

## Part 1: JavaScript Operators & Expressions (Video #6)

In JavaScript, any valid block of code that resolves to a value is called an **Expression**. To perform computations within these expressions, we use **Operators**.

### 1. Expressions

An expression is a piece of code that evaluates to a value.

* E.g., `!true` is an expression that evaluates to `false`.
* E.g., `7 + 5` is an expression that evaluates to `12`.
* Even a simple literal like `7` or `"Harry"` is a valid expression.

### 2. Operators

When we write `7 + 5 = 12`:

* `7` and `5` are **Operands**.
* `+` is the **Operator**.
* `12` is the result.

JavaScript has several types of operators:

#### Arithmetic Operators

Used for mathematical calculations.

* `+` Addition
* `-` Subtraction
* `*` Multiplication
* `/` Division
* `**` Exponentiation (e.g., `2 ** 3` is 2 to the power of 3, which is 8)
* `%` Modulus (Returns the remainder, e.g., `10 % 3` is 1)
* `++` Increment (Adds 1 to a variable)
* `--` Decrement (Subtracts 1 from a variable)

#### Assignment Operators

Used to assign values to variables.

* `=` (Assigns value)
* `+=` (e.g., `x += 5` is the same as `x = x + 5`)
* `-=` (e.g., `x -= 5` is the same as `x = x - 5`)
* `*=` (e.g., `x *= 5` is the same as `x = x * 5`)

#### Comparison Operators

Used to compare two values. They return a boolean (`true` or `false`).

* `==` Equal to (Checks value, not type)
* `!=` Not equal to
* `===` Equal value and equal type (Strict equality)
* `!==` Not equal value or not equal type (Strict inequality)
* `>` Greater than
* `<` Less than
* `>=` Greater than or equal to
* `<=` Less than or equal to

#### Logical Operators

Used to determine the logic between variables or values.

* `&&` Logical AND (Returns true if BOTH conditions are true)
* `||` Logical OR (Returns true if AT LEAST ONE condition is true)
* `!` Logical NOT (Reverses the boolean result. e.g., `!true` becomes `false`)

### Comments in JavaScript

Comments are used to prevent execution of certain code blocks (for testing) or to write notes for other developers.

* **Single-line comment:** Use `//`
* **Multi-line comment:** Use `/* ... */`

---

## Part 2: Conditional Expressions (Video #7)

Conditional expressions allow your program to make decisions based on certain conditions. Depending on whether a condition is true or false, a different block of code will execute.

### 1. `if` Statement

Executes a block of code if the specified condition is true.

```javascript
let age = 19;
if (age > 18) {
  console.log("You can drive.");
}
```

### 2. `if...else` Statement

Executes one block of code if the condition is true, and another block if it is false.

```javascript
let age = 15;
if (age >= 18) {
  console.log("You are eligible for a driver's license.");
} else {
  console.log("You cannot drive yet.");
}
```

### 3. `if...else if...else` Statement

Used to specify a new condition to test if the first condition is false. You can chain as many `else if` statements as needed.

```javascript
let marks = 85;

if (marks >= 90) {
  console.log("Grade: A");
} else if (marks >= 80) {
  console.log("Grade: B");
} else if (marks >= 70) {
  console.log("Grade: C");
} else {
  console.log("Grade: Fail");
}
```

### 4. The Ternary Operator

This is a shorthand way to write an `if...else` statement in a single line. It uses a `?` and a `:`.

**Syntax:** `condition ? expressionIfTrue : expressionIfFalse`

```javascript
let age = 20;
let status = (age >= 18) ? "You can drive" : "You cannot drive";
console.log(status); // Output: You can drive
```

*Note on the `prompt()` function:* The video uses `prompt("What is your age?")`. This function pops up an input box in the browser. It *will not work* directly in the standard VS Code terminal using pure Node.js without additional packages. You must run `prompt` inside an HTML file opened in a web browser.

---

## Part 3: Chapter 2 Practice Set (Video #8)

This video applies the concepts of operators and conditionals to solve practical problems.

### Problem 1: Logical Operators

**Task:** Use logical operators to find out if the age of a person lies between 10 and 20.

```javascript
let age = 15; // Simulating a prompt input

if (age > 10 && age < 20) {
  console.log("Your age lies between 10 and 20");
} else {
  console.log("Your age does not lie between 10 and 20");
}
```

### Problem 2: Switch Case Statement

While the video explicitly mentioned a switch case problem, we primarily focus on conditional routing. A `switch` statement is an alternative to chaining many `else if` statements.

```javascript
let fruit = "Apple";

switch (fruit) {
  case "Banana":
    console.log("Bananas are 50 Rs.");
    break;
  case "Apple":
    console.log("Apples are 120 Rs.");
    break;
  default:
    console.log("Fruit is not available.");
}
// Output: Apples are 120 Rs.
```

### Problem 3: Ternary Operator Practice

**Task:** Print "You can drive" or "You cannot drive" based on age being greater than 18 using the ternary operator.

```javascript
let userAge = 19;
let drivingStatus = userAge > 18 ? "You can drive" : "You cannot drive";
console.log(drivingStatus);
```

---

## 🚀 30 Coding Questions for JavaScript Mastery (Chapter 2)

1. Write a program that takes two numbers and logs their sum, difference, product, and quotient.
2. What is the output of `5 ** 3`? Write a script to verify.
3. Write a program that uses the modulus operator `%` to determine if a number is even or odd.
4. Let `x = 10`. What is the difference in output between `console.log(x++)` and `console.log(++x)`?
5. Write an expression that uses the `+=` operator to add 25 to a variable `score`.
6. Write a program comparing `10` (Number) and `"10"` (String) using `==` and `===`. Log both results.
7. Write a script to check if a variable `isLoggedIn` is true AND `hasPermission` is true using logical operators.
8. What is the result of `! (10 > 5)`? Verify it with code.
9. Write a multi-line comment explaining the difference between `=` and `==`.
10. Write an `if` statement that logs "Good Morning" if the variable `time` is less than 12.
11. Write an `if...else` statement that checks if a user's `balance` is greater than 500. If true, log "Purchase approved", else log "Insufficient funds".
12. Write an `if...else if...else` chain that logs "Child" (< 13), "Teenager" (13-19), or "Adult" (>= 20) based on an `age` variable.
13. Convert the `if...else` statement from Question 11 into a single-line ternary operator expression.
14. What does `null === undefined` evaluate to? Test it.
15. What does `null == undefined` evaluate to? Test it and note why it differs from the previous question.
16. Write a program using the logical OR `||` operator to grant website access if `isAdmin` is true OR `isPremiumUser` is true.
17. Write a `switch` statement that takes a number (1-7) and logs the corresponding day of the week (1 = Monday, etc.).
18. In a `switch` statement, what happens if you forget to include the `break` keyword? Write a script to demonstrate this "fall-through" behavior.
19. Write a program that checks if a number is divisible by both 2 AND 3.
20. Write a program that checks if a number is divisible by 2 OR 3.
21. What does `typeof (typeof 100)` return? (Hint: Operators evaluate step-by-step).
22. Let `a = 5` and `b = 10`. Write a script to swap their values *without* using a third temporary variable. (Hint: arithmetic operators).
23. Evaluate and log the result of `"5" + 5`. Does it add or concatenate?
24. Evaluate and log the result of `"5" - 2`. Does it subtract or fail?
25. Use a ternary operator to assign a variable `discount` to `20` if `isMember` is true, otherwise assign it `0`.
26. Write an `if` statement to check if a string variable `password` has a length greater than 8 characters (`password.length > 8`).
27. Write a program that checks if a person's age is NOT between 13 and 19 using the logical NOT `!` operator.
28. Create a variable `x = 5`. Write an expression using assignment operators to multiply it by 3, then subtract 2, then divide by 2.
29. What is the output of `true + true` in JavaScript? Write code to verify it.
30. Write a nested `if` statement: check if a user is over 18. If true, check if they have a license. If they have a license, log "Can drive".
