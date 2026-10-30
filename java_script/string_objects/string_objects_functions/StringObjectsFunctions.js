
// ###string object functions

// 1.length(property):number
let waterBottleBrandName = "MILTON";
console.log(`The characters count present in the string '${waterBottleBrandName}' : '${waterBottleBrandName.length}' characters.`); // The characters count present in the string 'MILTON' : '6' characters.

// 2.charAt(index):character:string
for (let waterBottleBrandNameIndex = 0; waterBottleBrandNameIndex <= waterBottleBrandName.length-1; waterBottleBrandNameIndex++){
    console.log(waterBottleBrandName.charAt(waterBottleBrandNameIndex));
}
/*
M
I
L
T
O
N
*/

// 3.charCodeAt(index):asciiValue
let metroStationGate = "A";
console.log(metroStationGate.charCodeAt(0));  // 65

// 4.indexOf(searchString):firstOccurredStringIndex
// 5.indexOf(searchString,fromIndex):firstOccurredStringIndex
let language = "malayalam";
console.log(language.indexOf("m"));  // 0
console.log(language.indexOf("a",2));  // 3

// 6.lastIndexOf(searchString):firstOccurredStringIndex
// 7.lastIndexOf(searchString,fromIndex):firstOccurredStringIndex
console.log(language.lastIndexOf("m"));  // 8

// ##substring functions
// 8.slice(startIndex,endIndex):subString
let acBrandName="BlueStar";
console.log(acBrandName.slice(0,4));  // Blue
console.log(acBrandName.slice(4));  // Star
console.log(acBrandName.slice(-8,-4));  // Blue
console.log(acBrandName.slice(-4));  // Star

// 9.substring(startIndex,endIndex):subString
console.log(acBrandName.substring(0,4));  // Blue
console.log(acBrandName.substring(4));  // Star
console.log(acBrandName.substring(-8,5));  // BlueS
console.log(acBrandName.substring(5,-5));  // BlueS

// 10.substr(startIndex,length):subString(deprecated)
console.log(acBrandName.substr(0,8)); // BlueStar
console.log(acBrandName.substr(0,4));  // Blue
console.log(acBrandName.substr(4));  // Star
console.log(acBrandName.substr(0));  // BlueStar

// ##string concatenation functions
// 11.concat(string):concatenatedString
let firstName = "Mayur";
let lastName = "Mane";
console.log(firstName.concat(lastName));  // MayurMane

// 12.padStart(maximumLength,fillString):concatenatedString
let courseName = "Java";
console.log(courseName.padStart(8,"Core"));  // CoreJava

// 13.padEnd(maximumLength,fillString):concatenatedString
let wish = "Good";
console.log(wish.padEnd(14,"-AfterNoon"));  // Good-Afternoon

// ##whitespaces removing functions
// 14.trimStart():whiteSpaceRemovedString
let username = " vinay ";
console.log(username.trimStart());  // vinay-

// 15.trimEnd():whiteSpaceRemovedString
console.log(username.trimEnd());  // -vinay

// 16.trim():whiteSpaceRemovedString
console.log(username.trim());  // vinay

// ##replacing functions
// 17.replace(oldString,newString):replacedString
let movieReview = "He is an legendary actor and He proves in his movies that, Gravity does not exists.";
console.log(movieReview.replace("He", "Mithun"));
/*
Mithun is an legendary actor and He proves in his movies that, Gravity does not exists.
*/

// 18.replaceAll(oldString,newString):replacedString
console.log(movieReview.replaceAll("He", "Mithun"));
/*
Mithun is an legendary actor and Mithun proves in his movies that, Gravity does not exists.
*/
let fruitName = " a p p l e ";
console.log(fruitName.trim().replaceAll(" ", ""));  // apple

// ##validation functions:boolean
// 19.includes(searchString):boolean

// 20.includes(searchString,fromIndex):boolean
function getAccountName(enteredAccountName){
    let accountName = "Sai Pawan Teja";
    if(accountName.includes(enteredAccountName)){
        return accountName;
    }
    return "No Accounts are matching.";
}
console.log(`Fetched Account Name : ${getAccountName("Sai")}`);
/*
Fetched Account Name : Sai Pawan Teja
*/

// 21.startsWith(searchString):boolean
// 22.startsWith(searchString,fromIndex):boolean
function validateGmailUsername(gmailUsername){
    let firstCharacterASCIIValue = gmailUsername.charCodeAt(0);
    if(firstCharacterASCIIValue >= 48 && firstCharacterASCIIValue <= 57){
        return "please generate valid email username, usernames usually will not start with numbers.";
    }
    return `${gmailUsername} is valid.`;
}
console.log(validateGmailUsername("mayur_mane@gmail.com"));  // mayur_mane@gmail.com is valid.
let instagramUsername = "ayur_mane";
function getInstagramAccounts(instagramUsername){
    if(instagramUsername.startsWith("mayur")){
        return instagramUsername;
    }
    return "No instagram accounts matched.";
}
console.log(getInstagramAccounts(instagramUsername));  // No instagram accounts matched.

// 23.endsWith(searchString):boolean
// 24.endsWith(searchString,fromIndex):boolean
function validateEmailUsername(emailUsername){
    if(emailUsername.endsWith("@gmail.com") || emailUsername.endsWith("@outlook.com") || emailUsername.endsWith("@hotmail.com")){
        return `${emailUsername} is valid.`;
    }
    return `entered username '${emailUsername}' is missing @domain.`;
}
console.log(validateEmailUsername("yash@yahoo.co.in"));  // entered username 'yash@yahoo.co.in' is missing @domain.

// case changing functions
// 25.toLowerCase():lowerCasedString
let weatherStatus = "Thunderstrom".toLowerCase();
if(weatherStatus == "sunny"){
    console.log("Apply Sunscreen");
}
else if(weatherStatus == "rainy"){
    console.log("Carry Umbrella");
}
else if(weatherStatus == "cloudy"){
    console.log("Wear Helmet and Drive.");
}
else if(weatherStatus == "thunderstrom"){
    console.log("Stay Home.");  // Stay Home.
}
else{
    console.log("Commands will be given only for rainy, sunny and cloudy.");
}

// 26.toUpperCase():upperCasedString
let subjectName = "css".toUpperCase();//key[userInput]
switch(subjectName){
    default:console.log("Provide only WebTechnologies.");
    break;
    case "HTML":console.log("HyperText Markup Language");
    break;
    case "CSS":console.log("Cascading Style Sheets");  // Cascading Style Sheets
    break;
    case "JS":console.log("Java Script");
}

// 27.split():arrayObject
// 27.split(splitter):arrayObject
let frontEndTechnology = "Web Development";
console.dir(frontEndTechnology.split());
/*
Array(1)
    0: "Web Development"
    length: 1
    [[Prototype]]: Array(0)
*/
let fullName = "Vinay Kashinath Lakade";
console.dir(`The word count of '${fullName}' : ${fullName.split(" ").length}`);
/*
The word count of 'Vinay Kashinath Lakade' : 3
*/
let airConditionerBrandName = "Blue Star";
console.dir(airConditionerBrandName.split(" "));
/*
Array(2)
    0: "Blue"
    1: "Star"
    length: 2
    [[Prototype]]: Array(0)
*/

// 28.italics():<i>returnedString</i>
function validateNumberPositiveOrNegative(number){
    if(number > 0){
        return `'${number}' is positive number.`.italics();
    }
    return `'${number}' is negative number.`.italics();
}
document.getElementById("validative_statement").innerHTML = `${validateNumberPositiveOrNegative(11)}`;

// 29.at(index):character:string
console.log(waterBottleBrandName.at(3));  // T
