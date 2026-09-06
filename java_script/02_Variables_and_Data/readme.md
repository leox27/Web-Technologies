# Chapter 1: Variables, Scopes, and Data Types


## Part 1: JavaScript Variables

Welcome to the notes for Video #2. This guide covers what variables are, how they work in JavaScript, and the core differences between dynamic and static typing.

### 1. What is a Variable?

Think of a variable as a **container**. Just like you use containers in your kitchen to store rice, lentils, or flour, in programming, we use variables to store **data**.

* **Purpose:** To hold data values that can be used or changed later in your program.
* **Storage Types:** A variable can store different types of data, such as:
  * `Strings` (Text)
  * `Numbers`
  * `Arrays` (Lists of data)
  * `Objects` (Complex data structures)

### 2. Dynamic Typing vs. Static Typing

One of the most important concepts to understand about JavaScript is how it handles data types.

#### Dynamic Typing (JavaScript)

JavaScript is a **Dynamically Typed Language**.

* **What it means:** You do not have to declare the type of data a variable will hold.
* **Flexibility:** A variable's data type can change during *runtime*. For example, a variable can hold a `String` at first, and later be reassigned to hold a `Number` or an `Array`.

```javascript
// Example of Dynamic Typing in JS
let myVariable = "Harry"; // Initially a String
myVariable = 100;         // Now it's a Number
myVariable = [1, 2, 3];   // Now it's an Array
```

#### Static Typing (e.g., C, C++, Java)

In contrast, languages like C or Java are **Statically Typed**.

* **What it means:** You *must* declare the data type (like `int`, `float`, `string`) when creating the variable.
* **Strictness:** You cannot assign a string to a variable that was declared as an integer. It will throw an error.

### 3. Creating Variables in VS Code

Here is how you can practice creating variables in your local environment.

1. Open your VS Code project folder.
2. Create a new file named `variables.js`.
3. Write the following code to see dynamic typing in action:

```javascript
// 1. Declaring a variable and assigning a string
let myData = "Learning JavaScript is fun!";
console.log("Current Value:", myData);
console.log("Current Type:", typeof myData); 

// 2. Changing the data type to a number (Dynamic Typing)
myData = 2026;
console.log("New Value:", myData);
console.log("New Type:", typeof myData);

// 3. Changing it again to an object/array
myData = ["Apples", "Bananas", "Oranges"];
console.log("Latest Value:", myData);
console.log("Latest Type:", typeof myData);
```

1. **Run it:** Open your VS Code terminal and run:

   ```bash
   node variables.js
   ```

### Key Takeaway

JavaScript gives you incredible flexibility by allowing you to change variable types on the fly. While this makes writing code faster, it also means you need to be careful about what data your variables are holding as your program grows!

---

## Part 2: JavaScript `var`, `let`, and `const`

This document covers Video #3, which focuses on the core differences between `var`, `let`, and `const` in JavaScript. Understanding this is crucial to writing clean and bug-free code.

### 1. Overview of Variable Declarations

Before ES6 (ECMAScript 2015), JavaScript only had one way to declare variables: `var`. As applications grew more complex, developers realized `var` caused scoping issues. This led to the introduction of `let` and `const`.

### 2. The `var` Keyword (Legacy)

* **What it is:** The oldest way to declare variables in JS.
* **Scope:** It is *Globally scoped* or *Function scoped*.
* **Why avoid it:** `var` does not have block scope (meaning it ignores `{ }` brackets like loops or `if` statements). It can easily be accidentally reassigned or redeclared globally, leading to unexpected bugs.
* **Best Practice:** Do not use `var` in modern JavaScript.

### 3. The `let` Keyword (Modern)

* **What it is:** The modern alternative to `var` for variables that will change.
* **Scope:** It is *Block scoped*. It only exists within the block `{ }` it was defined in.
* **Redeclaration:** You cannot redeclare the same variable in the same scope. However, you can update (reassign) its value.
* **When to use:** Use `let` when you know the value of the variable will change over time (e.g., in a loop counter).

### 4. The `const` Keyword (Constant)

* **What it is:** Used to define variables that should never change.
* **Scope:** It is *Block scoped* (just like `let`).
* **Redeclaration & Reassignment:** You cannot redeclare it, and you cannot reassign it a new value.
* **Initialization:** A `const` variable must be initialized with a value at the exact time it is declared.
* **When to use:** Use `const` by default for all variables unless you explicitly know the value needs to change.

### 5. Practical Code Example

Create a file named `scopes.js` in VS Code and run the following code to see the differences in action:

```javascript
// 1. Using let (Block Scope)
let x = 10;
if (true) {
  let x = 20; // This is a different 'x' scoped only to this if block
  console.log("Inside block (let):", x); // Output: 20
}
console.log("Outside block (let):", x); // Output: 10

// 2. Using const (Constant Value)
const author = "Harry";
// author = "Rohan"; // ERROR! You cannot reassign a constant

// 3. Using var (Why it causes bugs)
var y = 50;
if (true) {
  var y = 100; // This overwrites the global 'y'
}
console.log("Value of y (var):", y); // Output: 100 (The original 50 was destroyed)
```

---

### ❓ Cross Questions & Answers (Mastery Section)

* **Q1: Can I declare a `const` variable without assigning a value immediately?**
  * **Answer:** No. If you write `const myName;`, JavaScript will throw a syntax error (`Missing initializer in const declaration`). You must initialize it immediately: `const myName = "John";`.
* **Q2: Since `const` cannot be updated, can I push new items into a `const` Array?**
  * **Answer:** Yes! `const` prevents *reassignment* of the variable itself, but it does not make the content immutable. You can modify the properties of a `const` object or push items to a `const` array. You just can't assign a completely new array/object to that variable.
* **Q3: What exactly does "Block Scope" mean for `let` and `const`?**
  * **Answer:** A block is any code enclosed within curly braces `{ }` (like an `if` statement, `for` loop, or a simple block). Variables declared with `let` or `const` inside those braces cannot be accessed from outside those braces.
* **Q4: Can I use `let` and `var` with the exact same variable name in the same scope?**
  * **Answer:** No. Doing so will result in a SyntaxError. Once a variable is declared with `let` in a scope, you cannot re-declare it with `var` or `let` again in that same scope.
* **Q5: If `var` is bad, why does it still exist?**
  * **Answer:** Backwards compatibility. If JavaScript removed `var`, millions of older websites built before 2015 would instantly break.
* **Q6: What is the golden rule for choosing between `var`, `let`, and `const`?**
  * **Answer:** Never use `var`. Always use `const` by default. Only switch to `let` if you find that the variable's value needs to change later in the code.

---

## Part 3: JavaScript Primitives and Objects

This document covers the core concepts from Video #4, focusing on the differences between Primitive Data Types and Non-Primitive Data Types (Objects) in JavaScript.

### 1. What are Data Types?

A data type specifies what kind of data can be stored and manipulated within a program. It acts as a set of rules that tells the JavaScript engine how to interpret the value inside a variable.

In JavaScript, data types are broadly classified into two categories:

1. **Primitive Data Types**
2. **Non-Primitive Data Types (Objects)**

### 2. Primitive Data Types

Primitives are the fundamental, built-in data types in JavaScript. They represent a single value and are not objects.

There are **7 Primitive Data Types** in JavaScript. A great trick to remember them is the mnemonic: **NN BB SS U**

* **`N` - Null:** Represents the intentional absence of any object value. It means "nothing" or "empty".
* **`N` - Number:** Represents both integer and floating-point numbers (e.g., `10`, `3.14`).
* **`B` - Boolean:** Represents a logical entity and can have only two values: `true` or `false`.
* **`B` - BigInt:** Used for numbers that are too large to be represented by the standard `Number` type.
* **`S` - String:** Represents a sequence of characters, used for text (e.g., `"Hello World"`).
* **`S` - Symbol:** A unique and immutable data type, often used as unique identifiers for object properties.
* **`U` - Undefined:** A variable that has been declared but has not yet been assigned a value.

#### Code Example: Primitives

```javascript
let a = null;                // Null
let b = 345;                 // Number
let c = true;                // Boolean
let d = BigInt("567") + 3n;  // BigInt
let e = "Harry";             // String
let f = Symbol("I am a nice symbol"); // Symbol
let g;                       // Undefined (value not assigned)

console.log(a, b, c, d, e, f, g);
```

### 3. Non-Primitive Data Types (Objects)

Unlike primitives, which hold a single value, Non-Primitive data types are used to store collections of data or more complex entities. In JavaScript, the primary non-primitive type is the **Object**.

* **What is an Object?** An object is a collection of **Key-Value pairs**.
* **Analogy:** Think of an object like a real-world dictionary. The word you look up is the "Key", and the definition of the word is the "Value".
* **Keys:** Keys are usually Strings (or Symbols).
* **Values:** Values can be *any* data type, including strings, numbers, booleans, or even other objects.

#### Why use Objects?

Objects are incredibly useful for mapping data and creating lookups. For example, you can map a student's name to their marks, an item's name to its price, or a word to its definition.

#### Code Example: Objects

```javascript
// Creating an Object
const studentMarks = {
  "Harry": 98,
  "Rohan": 70,
  "Aakash": 7,
  "Shubh": false // A boolean value instead of a number
};

// Accessing values inside an object
console.log(studentMarks["Harry"]); // Outputs: 98
console.log(studentMarks["Aakash"]); // Outputs: 7

// If you try to access a key that doesn't exist, it returns undefined
console.log(studentMarks["Rahul"]); // Outputs: undefined
```

---

### ❓ Cross Questions & Answers (Mastery Section: Primitives & Objects)

* **Q1: What is the primary difference between a Primitive and a Non-Primitive data type?**
  * **Answer:** Primitives are basic data types that hold a single, simple value (like a number or a string). Non-primitives (Objects) hold complex collections of data in the form of key-value pairs.
* **Q2: If I declare a variable `let user;`, what is its data type and its value?**
  * **Answer:** Both its data type and its value are `undefined`. It exists in memory but has no assigned value.
* **Q3: How do I check the data type of a variable in JavaScript?**
  * **Answer:** You use the `typeof` operator. For example, `typeof "Hello"` will return `"string"`.
* **Q4: I want to create a variable that represents a completely empty value on purpose. Should I use `undefined` or `null`?**
  * **Answer:** You should use `null`. `null` is an explicit assignment meaning "no value". `undefined` implies a variable was declared but forgotten or not yet assigned.
* **Q5: What happens if I try to access an object key that does not exist? Will it throw an error?**
  * **Answer:** No, it will not throw an error. It will simply return `undefined`. (e.g., `studentMarks["NonExistent"]` returns `undefined`).
* **Q6: Can the values inside an Object be different data types?**
  * **Answer:** Yes! An object can hold numbers, strings, booleans, and even other arrays or objects all at the same time. The keys, however, are usually strings.
* **Q7: Is `Array` a primitive data type?**
  * **Answer:** No, Arrays in JavaScript are a special type of Object (Non-Primitive) used to store ordered collections.

---

## Part 4: 30 Coding Questions for JavaScript Mastery

1. Write a script to declare three variables using `var`, `let`, and `const` with different data types. Print them to the console.
2. What will be the output of `typeof null`? Write code to verify it.
3. Create an object `car` with keys: `brand`, `model`, and `year`. Access the `model` using both dot notation and bracket notation.
4. Try to reassign a `const` variable holding a string. Observe and write down the exact error message.
5. Create a `const` array with three numbers. Push a fourth number to the array. Print the array to prove it works.
6. Write a program to dynamically change a variable from a `Number` to a `String` to a `Boolean`, logging the `typeof` at each step.
7. Declare an uninitialized variable using `let`. Log it to the console. What is its value?
8. Write a function that accepts an object and attempts to access a key that does not exist. Log the result.
9. Create two variables: `val1 = undefined` and `val2 = null`. Compare them using `==` and `===`. Note the results.
10. Use `BigInt` to store a number larger than `Number.MAX_SAFE_INTEGER` and add `10n` to it.
11. Declare a variable using `let` inside an `if (true) { }` block. Try to `console.log` it outside the block. What happens?
12. Declare a variable using `var` inside an `if (true) { }` block. Try to `console.log` it outside the block. What happens?
13. Create a unique `Symbol` and use it as a key inside an object. Access that specific key.
14. Write a script that concatenates a `String` and a `Number`. Log the result and its `typeof`.
15. Create an object containing another nested object (e.g., a `user` with an `address` object). Access a property deep inside the nested object.
16. Write a program that redeclares a `var` variable twice in the same scope. Does it throw an error?
17. Attempt to redeclare a `let` variable twice in the same scope. Does it throw an error?
18. Initialize a string variable using double quotes, single quotes, and backticks. Print all three.
19. Create an object with a key named with a space (e.g., `"first name"`). Access it using the correct notation.
20. Perform a mathematical subtraction between a `String` containing a number (e.g., `"10"`) and a regular `Number` (e.g., `5`). Log the result.
21. Perform a mathematical addition between a `String` containing a number and a regular `Number`. Log the result and compare it to the subtraction behavior.
22. Log the output of `typeof NaN`. What data type does JavaScript consider it?
23. Create a `let` variable holding an array. Reassign the entire variable to an object.
24. Declare a `const` object representing a `book`. Add a new property `pages` to it after it has been created.
25. Try assigning `BigInt` using both the `n` suffix (e.g., `100n`) and the `BigInt()` function. Add them together.
26. Write a program demonstrating the Temporal Dead Zone (TDZ) by trying to log a `let` variable before its declaration line.
27. Create an object where one of the values is a Boolean and another is a Number. Log both values.
28. Assign `undefined` explicitly to a variable (though bad practice) and check its type.
29. Declare a `const` variable but do not assign it a value on the same line. Note the compilation error.
30. Write a script that checks if an object has a specific property using the `in` operator (e.g., `"price" in item`).
