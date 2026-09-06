# JavaScript Introduction & Setup

JavaScript is a powerful programming language used to build interactive and scalable web applications. This guide covers the basics of programming, what JavaScript is, and how to set up your local development environment using VS Code and Node.js.

## 1. What is Programming?

* **Definition:** Programming is a way to communicate with computers by giving them explicit, step-by-step instructions to perform specific tasks.
* **Why it's needed:** Computers are literal machines; they only do exactly what they are told using specific syntax.

## 2. What is JavaScript?

* **Role:** Originally designed to make web pages interactive (Client-side), JavaScript is now heavily used for backend server development as well (Server-side) via Node.js.
* **ECMAScript (ES):** This is the standard specification that JavaScript follows, ensuring the language behaves consistently across different environments.

## 3. Environment Setup (VS Code & Node.js)

To write and run JavaScript locally on your machine, follow these steps:

1. **Install VS Code:** Download and install the Visual Studio Code editor from [code.visualstudio.com](https://code.visualstudio.com/).
2. **Install Node.js:** Download and install the LTS version from [nodejs.org](https://nodejs.org/). Node.js is the runtime environment that allows you to execute JavaScript outside of a web browser.
3. **Verify Installation:** Open your terminal in VS Code (`Ctrl + \``) and type the following command to verify Node.js is installed:

   ```bash
   node --version
   ```

## 4. Writing Your First JavaScript Code

1. Open VS Code and create a new folder for your learning repository.
2. Inside the folder, create a new file named `index.js`.
3. Add the following fundamental code structure to test your environment:

```javascript
// Outputting a standard greeting
console.log("Hello, World! Ready to learn JavaScript.");

// A simple program to add three numbers
let num1 = 8;
let num2 = 12;
let num3 = 40;
let sum = num1 + num2 + num3;

console.log("The sum of the three numbers is:", sum);
```

1. **Run Your Code:** In the VS Code terminal, ensure you are in the correct directory, then execute the script by typing:

   ```bash
   node index.js
   ```
