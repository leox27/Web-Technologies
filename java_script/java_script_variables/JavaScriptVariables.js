// ### JavaScript Variables

/*
#syntax: 

variable-declaration-keywords identifier=literals;
de-coded syntax: var let const variableName=data | value;
*/

// ## differences between - var | let | const

// 1. case-study-one: declaration and initialization[var | let | const]
var studentRollNumber = 101;
let projectBrandName = "EPSON";
const employeeID = "TYP1701";

console.log(studentRollNumber);
console.log(projectBrandName);
console.log(employeeID);


// 2. case-study-two: re-initialization[var | let]
studentRollNumber = 105; // re-initialization
projectBrandName = "SONY"; // re-initialization

console.log(studentRollNumber); 
console.log(projectBrandName);
console.log(projectBrandName);

// employeeID = "TYP1710"; // re-initialization
// console.log(employeeID);
// employeeID = "TYP1710";
// console.log(employeeID);


// 3. case-study-three: only-declaration[var | let]
var bagBrandName;
console.log(bagBrandName);
let classRoomNumber;
console.log(classRoomNumber);
const earthPosition = 3;
console.log(earthPosition);


// 4. case-study-four: re-declaration[var]
var bagBrandName = "WILDCRAFT"; // re-declaration

console.log(bagBrandName);
// let classRoomNumber = "ROOM.NO.08";
console.log(classRoomNumber);
// const earthPosition=7;
console.log(earthPosition);


// 5. case-study-five: block-scoped-variables[let | const]
{
    var mobileBrandName = "SAMSUNG";

    let mobilePrice = 21000; // block-scoped variable
    console.log(mobilePrice);
    const mobileType = "SmartMobile"; // block-scoped variable
    console.log(mobileType);
}
console.log(mobileBrandName);


// 6. case-study-six: function-scoped-variables[var | let | const]
function toCheckFunctionScopedVariables(){
    var trainerName = "Y";
    let trainerSubject = "WD | CJ";
    const trainerID = "TYP1701";

    console.log(trainerName);
    console.log(trainerSubject);
    console.log(trainerID);
}
toCheckFunctionScopedVariables();


// 7. case-study-seven: variable-hoisting[]
console.log(speakerBrandName);  // utilization
var speakerBrandName = "JBL"; // declaration and initialization

// console.log(speakerPrice);   // utilization
let speakerPrice = 35000; // declaration and initialization

console.log(speakerModelID);    // utilization
const speakerModelID = "MODEL101";    // declaration and initialization

