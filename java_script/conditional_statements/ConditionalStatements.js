/*
### Conditional Staements

    1. if statement
    2. if-else statement
    3. else-if ladder statement
    4. switch case statement
*/

// 1. if statement
let number = 10;
if (number > 0) {
    console.log("The given number " + number + " +ve");
}

// 2. if-else statement
let givenNumber = -27;
if (givenNumber > 0) {
    console.log("The given number " + number + " +ve");
}
else if (givenNumber < 0) {
    console.log("The given number " + givenNumber + " -ve");
}

// 3. else-if ladder statement
let weatherStatus = "Sunny";
if (weatherStatus == "Sunny") {
    console.log("Weather status is Sunny, roam outside");   
}
else if (weatherStatus == "ThunderStorm") {
    console.log("Weather status is ThunderStorm, go on the long-drive");   
}
else if (weatherStatus == "Haze") {
    console.log("Weather status is Haze, wear sweaters if planning to go outside");
}

// 4. switch-case statement
var weekNumber = 1;
switch (weekNumber) {
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday");
        break;

    default: // We can place the default case anywhere in the switch block.
        console.log("Please enter a valid number between 1-7");
        break;
}

var monthNumber = 10;
switch (monthNumber) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;
    case 6:
        console.log("June");
        break;
    case 7:
        console.log("July");
        break;
    case 8:
        console.log("August");
        break;
    case 9:
        console.log("September");
        break;
    case 10:
        console.log("October");
        break;
    case 11:
        console.log("November");
        break;
    case 12:
        console.log("December");
        break;

    default: // We can place the default case anywhere in the switch block.
        console.log("Please enter a valid number between 1-12");
        break;
}
