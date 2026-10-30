// ### Java Script Strings

/*
java script strings
    1.string literals[" " |' ']:string
    2.String(anyData):string
    3.new String(anyData): StringObject
    4.template literals[` `]:string
*/

// 1. string literals[" " |' ']

let courseName="Web'D'evelopment"; // Valid
// let courseName="Web"D"evelopment"; // Invalid
console.log(courseName,typeof courseName); // WebDevelopment string
let currentTechnology='Java"S"cript'; // Valid
// let currentTechnology='Java'S'cript'; // Invalid
console.log(currentTechnology,typeof currentTechnology);// Java"S"cript string

// 2. String(anyData):string

let mobileNumber=9597170631;
let mobileNumberString=String(mobileNumber);
console.log(mobileNumberString,typeof mobileNumberString); // 9597170631 string

// 3. new String(anyData):StringObject

let stringObject=new String("JavaScript");
console.dir(stringObject);

// 4. template literals[` `]:string
let webDevelopmentPurpose=`The process of
designing and developing front-end of the
web-pages by using HTML, CSS, JavaScript and React-JavaScript`;
console.log(webDevelopmentPurpose,typeof webDevelopmentPurpose);
/*
The process of
designing and developing front-end of the
web-pages by using HTML, CSS, JavaScript and React-JavaScript
*/


/*
string in-terpolation
${varialbleName | functionName | objectReferenceVariableName | ConstructorName}
*/

let getSquaredNumber = number=> `The Squared Number of ${number} is <b>${number ** 2}</b>`;
document.getElementById("squared_number_value").innerHTML = getSquaredNumber(25);
/*
The Squared Number of 25 is 625
*/

let colorName = window.prompt("Enter ColorName");
let carName = window.prompt("Enter CarName");
document.getElementById("lovable_statement").innerHTML = `I love <span style="color:${colorName};">${colorName}</span> color <b><span style="color:${colorName};">${carName}</span></b> car`;
/*
I love blue color Bugatti car  // 'blue' and 'Bugatti' will be displayed in blue color
*/


// ##Que. how many ways we can access string elements?
// there are three ways we can access string characters

// 1. for loop: index
let speakerBrandName = "JBL";
for (let speakerBrandNameIndex = 0; speakerBrandNameIndex <= speakerBrandName.length-1; speakerBrandNameIndex++){
    console.log(speakerBrandName.at(speakerBrandNameIndex));
}
/*
J
B
L
*/

// 2. for of loop: values
for (let speakerBrandNameElement of speakerBrandName){
    console.log(speakerBrandNameElement);
}
/*
J
B
L
*/

// 3. for in loop: keys:index
for (let element in speakerBrandName){
    // console.log(speakerBrandName[element]);
    console.log(speakerBrandName.at(element));
}
/*
J
B
L
*/

// ## Mutability of string-objects
/*
String objects are "Immutable".
We cannot perform modifications or we cannot change the original state of the string.
If we do, it create a new object on the existing string.
*/