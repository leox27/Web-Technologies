
// ###Looping Statements in JavaScript

/*
looping statements
    1. for loop
    2. while loop
    3. do while loop
*/

// 1. for loop
for(printedTimes = 1; printedTimes <= 10; printedTimes++){
    console.log("Guru is always Guru");
}
for(oddNumber = 0; oddNumber <= 10; oddNumber++){
    if(oddNumber%2 != 0){
        console.log(oddNumber);
    }
}
for(evenNumber = 0; evenNumber <= 10; evenNumber++){
    if(evenNumber%2 == 0){
        console.log(evenNumber);
    }
}

// 2. while loop
let password = "sai_12345";
while(password.length < 8){ // until the condition becomes false, the loop will continue to execute
    password = window.prompt("Re-enter password: ");
    if(password.length >= 8){
        console.log("Password generated successfully.");
    }
}

// 3. do while loop
let enteredPassword = window.prompt("Enter Password: ");
let passwordStatus = false;
do{
    if(enteredPassword.length >= 8){
        console.log("Password generated successfully.");
    }
    else{
        enteredPassword = window.prompt("Re-enter password: ");
    }
}while(!passwordStatus); //