# JavaScript — Lexical Tokens

## 1. Introduction & Definition

A **Lexical Token** is the smallest meaningful unit of a JavaScript program that can be understood by the JavaScript engine. It is a sequence of characters that has a specific meaning in JavaScript. JavaScript source code is divided into different tokens during the **lexical analysis** phase.

```javascript
let age = 25;
// Identified Tokens: let, age, =, 25, ;
```

### Token Breakdown Example

```javascript
let studentName = "Tony";
```

| Token | Type |
| :--- | :--- |
| `let` | Keyword |
| `studentName` | Identifier |
| `=` | Operator |
| `"Tony"` | String Literal |
| `;` | Punctuator |

---

## 2. Lexical Analysis

Before JavaScript executes a program, the source code is processed and divided into meaningful units. This process is called **Lexical Analysis**.

**Execution Flow:**
`JavaScript Source Code (Characters)` ➔ `Lexical Analysis` ➔ `Lexical Tokens` ➔ `Parsing` ➔ `Execution`

```javascript
let marks = 90; 
// Divided into: let | marks | = | 90 | ;
```

---

## 3. Types of Lexical Tokens

JavaScript lexical elements are broadly classified into 7 categories:

1. Keywords
2. Identifiers
3. Literals
4. Operators
5. Punctuators
6. Comments
7. Whitespace and Line Terminators

---

## 4. Keywords

A **keyword** is a reserved word that has a predefined meaning in JavaScript. Keywords cannot normally be used as identifiers.

* **Common Examples:** `let`, `const`, `var`, `if`, `else`, `for`, `while`, `function`, `return`, `class`, `new`, `this`, `typeof`, `instanceof`
* **Usage:** In `let age = 25;`, `let` is the **Keyword**.

---

## 5. Identifiers

An **identifier** is the name given to programming elements such as Variables, Functions, Classes, Objects, and Parameters.

```javascript
let studentName = "Tony"; // let → Keyword | studentName → Identifier
```

### 5.1 Identifier Naming Rules

* **Allowed characters:** Letters, Digits, Underscore (`_`), Dollar sign (`$`).
* **Restriction:** Cannot start with a digit, cannot contain hyphens (`-`) or spaces.
* **Valid Examples:** `name`, `studentName`, `student_name`, `student123`, `$name`, `_name`
* **Invalid Examples:** `123student`, `student-name`, `student name`

### 5.2 Case-Sensitivity

JavaScript identifiers are strictly case-sensitive. `name`, `Name`, and `NAME` are treated as three distinct identifiers:

```javascript
let name = "Tony";
let Name = "John";
let NAME = "David";
```

---

## 6. Literals

A **literal** is a fixed value written directly in JavaScript source code (e.g., `25` in `let age = 25;`).

### 6.1 Number Literals

Numbers written directly in source code (`10`, `25`, `100`, `3.14`, `-50`). JavaScript supports multiple representations:

```javascript
let decimal = 100;     // Decimal
let binary  = 0b1010;  // Binary
let octal   = 0o12;    // Octal
let hex     = 0xFF;    // Hexadecimal
```

### 6.2 String & Template Literals

A sequence of characters enclosed inside single quotes (`'...'`), double quotes (`"..."`), or backticks (`` `...` ``).

```javascript
let singleQuote = 'JavaScript';
let doubleQuote = "Hello World";
let name        = "Tony";
let template    = `Hello ${name}`; // Output: Hello Tony (Supports embedded expressions)
```

### 6.3 Boolean Literals

Represents logical truth values: `true` and `false`.

```javascript
let isLoggedIn = true;
let isAdmin    = false;
```

### 6.4 Null Literal

Represents an intentional absence of a value.

```javascript
let data = null; // null → Null Literal
```

### 6.5 BigInt Literals

Used to represent integers larger than the safe range of the standard `Number` type. Created by appending `n` to the end of an integer.

```javascript
let bigNumber = 12345678901234567890n;
```

### 6.6 Object Literals

An object created directly using curly braces `{}`.

```javascript
let student = { name: "Tony", age: 25 };
```

### 6.7 Array Literals

An array created directly using square brackets `[]`.

```javascript
let numbers = [10, 20, 30, 40];
```

### 6.8 Regular Expression Literals

Patterns written directly between forward slashes `/.../`.

```javascript
let pattern = /javascript/i;
```

---

## 7. Operators-

An **operator** is a symbol or keyword used to perform an operation on values (e.g., `let sum = 10 + 20;`).

| Category | Operators | Meaning / Example |
| :--- | :--- | :--- |
| **Arithmetic** | `+`, `-`, `*`, `/`, `%`, `**` | Addition, Subtraction, Multiplication, Division, Modulus, Exponentiation (`let result = 10 + 5;`) |
| **Assignment** | `=`, `+=`, `-=`, `*=`, `/=`, `%=`, `**=` | Assigns values to variables (`let age = 25;`) |
| **Comparison** | `==`, `===`, `!=`, `!==`, `>`, `<`, `>=`, `<=` | Compares values (`age >= 18`) |
| **Logical** | `&&` (AND), `\|\|` (OR), `!` (NOT) | Combines or reverses conditions (`age >= 18 && age <= 60`) |

---

## 8. Punctuators

**Punctuators** are symbols used to structure JavaScript code. Context determines their exact role.

* **Common Punctuators:** `( )`, `{ }`, `[ ]`, `;`, `,`, `.`, `:`, `?`

### 8.1 Parentheses `()`

Used in function calls, function declarations, conditions, and grouping expressions.

```javascript
console.log("Hello");
if (age >= 18) { console.log("Adult"); }
```

### 8.2 Curly Braces `{}`

Used to define blocks of code and object literals.

```javascript
if (age >= 18) { console.log("Adult"); } // Code Block
let student = { name: "Tony", age: 25 }; // Object Literal
```

### 8.3 Square Brackets `[]`

Used for array literals, array indexing, and computed property access.

```javascript
let numbers = [10, 20, 30];
console.log(numbers[0]); // Array Access
```

### 8.4 Semicolon `;`

Used to terminate a JavaScript statement. While JavaScript features **Automatic Semicolon Insertion (ASI)** making them often optional, consistent usage improves readability and prevents edge cases.

```javascript
let age = 25;
let name = "Tony";
```

### 8.5 Comma `,`

Used to separate variable declarations, expressions, or array elements.

```javascript
let name = "Tony", age = 25;
let numbers = [10, 20, 30];
```

### 8.6 Dot `.`

Used as property access syntax to access object properties and methods.

```javascript
console.log("Hello");
```

---

## 9. Comments, Whitespace & Line Terminators

### 9.1 Comments

Ignored by the JavaScript engine during normal execution; used to document code.

```javascript
// This is a single-line comment (starts with //)
let age = 25;

/*
   This is a multi-line comment
   (starts with /* and ends with * /)
*/
```

### 9.2 Whitespace

Includes spaces, tabs, and formatting characters. Improves readability and separates tokens where necessary.

```javascript
let age = 25;
let     age     =     25; // Represents the same program structure
```

### 9.3 Line Terminators

Represents the end of a line. Separates statements across lines and interacts with **Automatic Semicolon Insertion (ASI)**.

```javascript
let name = "Tony";
let age = 25;
