
// ### Non-primitive data type of java Script

/*
 non primitive data type represents non-fundamental,user-defined,collection of values and propeties.
    1. new Number(): NumberObject
    2. new String(): StringObject
    3. new Boolean(): BooleanObject
    4. Java Script Object
    5. Array Object
    6. functions
*/

// 1. new Number(): NumberObject
let number = 10;
let NumberObject = new Number(number); // boxing {non primitive value}
console.dir(NumberObject); // dir will print in  object form  and typeOf fucntion is not work

let numberPrimiveValue = NumberObject.valueOf(); // unboxing [primitive value]
console.log(numberPrimiveValue, typeof numberPrimiveValue); // 10 number

// 2. new String(): StringObject
let string = "ExampleWord";
let StringObject= new String(string); // boxing {non primitive value}
console.log(StringObject, typeof StringObject); // log is used println in normal form

let StringPrimiveValue= StringObject.valueOf(); // unboxing [primitive value]
console.log(StringPrimiveValue, typeof StringPrimiveValue); // ExampleWord string

// 3. new Boolean(): BooleanObject
let boolean = "ExampleWord";
let BooleanObject = new Boolean(boolean); // boxing {non primitive value}
console.dir(BooleanObject); // dir will return object  and typeOf fucntion is not work

let BooleanPrimiveValue = BooleanObject.valueOf(); // unboxing [primitive value]
console.log(BooleanPrimiveValue, typeof BooleanPrimiveValue); // true boolean

// 4. Java Script Object
let ShoeProduct = {
    modelNumber:"SM6556",
    brandName:"SparX",
    price:"₹2000.00"
};
console.dir(ShoeProduct);

let TShirtProduct = {
    modelNumber:"6556",
    brandName:"Jockey",
    price:"₹50.00"
};
console.dir(TShirtProduct);

// 5. Array Object
let amazonCart = [ShoeProduct,TShirtProduct];
console.dir(amazonCart);

// 6. functions
let greet = function(){
    console.log("Hello, World!");
}
greet(); // Hello, World!
