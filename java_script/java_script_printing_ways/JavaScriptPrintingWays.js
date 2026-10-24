
// ### JavaScript Printing Ways

/*
java script printing ways
    1. console object
    2. document object
    3. window object
    4. innerHTML java script property
    5. innerText java script property
    6. textContent java script property
*/

// 1. console object
console.log("Java","Library","JavaScript");
console.warn("Warning Message");
console.error("ErrorMessage");
console.log(console);
console.dir(console);
console.dir(document);
console.dir(window);
/*
How it works?
    1. console.log() is used to print the message in the console.
    2. console.warn() is used to print the warning message in the console.
    3. console.error() is used to print the error message in the console.
    4. console.dir() is used to display an interactive list of the properties of the specified JavaScript object.
*/


// 2. document object
document.write("<b>FirstTextContent</b><br/>");
document.write("<b>SecondTextContent</b><br/>");
document.writeln("<span style='color: navy;font-weight:bold;'>ThirdTextContent</span><br/>");
document.writeln("FourthTextContent<br/>");
document.writeln("<b>FifthTextContent</b>");
/*
How it works?
    1. document.write() is used to write HTML content to the document.
    2. document.writeln() is used to write HTML content to the document followed by a newline character.
*/


// 3. window object
window.document.write();
window.document.writeln();
window.console.log();
/* How it works?
    1. window.document.write() is used to write HTML content to the document.
    2. window.document.writeln() is used to write HTML content to the document followed by a newline character.
    3. window.console.log() is used to print the message in the console.
*/


// 4. innerHTML java script property
document.getElementById("block_one").innerHTML="<div style='width: 75px;height: 75px;background-color: lightgray;border-radius: 15px;'>innerHTML</div>";
/*
How it works?
    1. innerHTML is a property of the document object that allows you to get or set the HTML content of an element.
    2. In this example, we are using innerHTML to set the content of the element with the id "block_one" to a div element with specific styles.
*/


// 5. innerText java script property
document.getElementById("block_two").innerText = "<div style='width: 75px;height: 75px;background-color: lightgray;border-radius: 15px;'>innerText</div>";
/*
How it works?
    1. innerText is a property of the document object that allows you to get or set the text content of an element.
    2. In this example, we are using innerText to set the content of the element with the id "block_two" to a string that represents a div element with specific styles.
*/


// 6. textContent java script property
document.getElementById("block_three").textContent = "<div style='width: 75px;height: 75px;background-color: lightgray;border-radius: 15px;'>TextContent</div>";
/*
How it works?
    1. textContent is a property of the document object that allows you to get or set the text content of an element.
    2. In this example, we are using textContent to set the content of the element with the id "block_three" to a string that represents a div element with specific styles.
*/
