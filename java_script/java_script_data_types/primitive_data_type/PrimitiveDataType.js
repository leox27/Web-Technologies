// ### Non-primitive datatype

/*
non primitive datatype is represents fundamental or basic or primitive single value.
    1. Number
    2. String
    3. boolean 
    4. undefined
    5. null
    6. bigint
    7. symbol
*/

// 1. number
let registrationNumber = 103845397;
console.log(registrationNumber, typeof registrationNumber); // 103845397 number
let oilQuantity = 10.5;
console.log(oilQuantity,typeof oilQuantity); // 10.5 number

// 2. String 
let studentName="RahulGupta";
console.log(studentName,typeof studentName); // RahulGupta string
let courseName='WebDevelopment';
console.log(courseName,typeof courseName);

// 3. boolean
let isTrainerOnline = true;
console.log(isTrainerOnline, typeof isTrainerOnline); // true boolean
let isTrainerOffine = false;
console.log(isTrainerOffine, typeof isTrainerOffine); // false boolean

// 4. undefined
let laptopBrandName;
console.log(laptopBrandName, typeof laptopBrandName);
let mobileBrandName = undefined;
console.log(mobileBrandName,typeof mobileBrandName);

// 5. null
let username = null;
console.log(username,typeof username);

// 6. bigint
let PhonePayTransitionId = 9007199254740995n;
console.log(PhonePayTransitionId, typeof PhonePayTransitionId); // 9007199254740995n bigint

let GPayTransitionId = BigInt(9007199254740996n);
console.log(GPayTransitionId, typeof GPayTransitionId); // 9007199254740996n bigint


// 7. symbol
const EmployeeId = Symbol("EmployeeId");
let EmployeeDetails = {
    EmployeeId: 1701,
   [EmployeeId]: 1702
}
console.log(EmployeeDetails.EmployeeId); // 1701
console.log(EmployeeDetails[EmployeeId]); // 1702

// prmitive data-types clarity
console.log(10==10); // true
console.log(undefined==null); // false
console.log(Symbol("username")==Symbol("username")); // false
console.log('java'=='10'); // false
console.log("true"=="true"); // true
console.log(123343==123343n); // false










