# JavaScript Variables: The Ultimate Guide

Welcome to the notes for Video #2. This guide covers what variables are, how they work in JavaScript, and the core differences between dynamic and static typing.

---

## 📦 1. What is a Variable?

Think of a variable as a **container**. Just like you use containers in your kitchen to store rice, lentils, or flour, in programming, we use variables to store **data**.

* **Purpose:** To hold data values that can be used or changed later in your program.
* **Storage Types:** A variable can store different types of data, such as:
  * `Strings` (Text)
  * `Numbers`
  * `Arrays` (Lists of data)
  * `Objects` (Complex data structures)

---

## 🔄 2. Dynamic Typing vs. Static Typing

One of the most important concepts to understand about JavaScript is how it handles data types.

### ✨ Dynamic Typing (JavaScript)

JavaScript is a **Dynamically Typed Language**.

* **What it means:** You do not have to declare the type of data a variable will hold.
* **Flexibility:** A variable's data type can change during *runtime*. For example, a variable can hold a `String` at first, and later be reassigned to hold a `Number` or an `Array`.

```javascript
// Example of Dynamic Typing in JS
let myVariable = "Harry"; // Initially a String
myVariable = 100;         // Now it's a Number
myVariable = [1, 2, 3];   // Now it's an Array
```

### 🔒 Static Typing (e.g., C, C++, Java)

In contrast, languages like C or Java are **Statically Typed**.

* **What it means:** You *must* declare the data type (like `int`, `float`, `string`) when creating the variable.
* **Strictness:** You cannot assign a string to a variable that was declared as an integer. It will throw an error.

---

## 💻 3. Creating Variables in VS Code

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

---

## 💡 Key Takeaway

JavaScript gives you incredible flexibility by allowing you to change variable types on the fly. While this makes writing code faster, it also means you need to be careful about what data your variables are holding as your program grows!
