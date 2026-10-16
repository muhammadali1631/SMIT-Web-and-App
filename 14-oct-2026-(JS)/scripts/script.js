// var firstName = "Ali";
// console.log(firstName)

// console.log("Check bool", 1==1)
// console.log("Check bool", 1==2)
// console.log("Check bool", 1>2)
// console.log("Check bool", 1<2)

// const price = 100;

// if(true){
//     console.log("Yes", firstName)
//     console.log(price)
// }

// String
let firstName = "Ali";
let lastName = "Ali";
// let firstName2 = 'Ali';
// let firstName3 = `Ali`;

// let fullName = firstName+lastName;
let fullName = `${firstName} ${lastName}`;

// console.log(typeof firstName, typeof firstName2, typeof firstName3);

console.log(fullName)

// Number
let age = 19; //Integer 
let price = 110.01 // Decimal

console.log(age, price)
console.log(typeof age, typeof price)


// Boolean (Bool) True / False

// yes - no
// 0 - 1
// on - off

// let willISleep = false;
let isDeleted = true;


// Symbol
let str1 = Symbol("ABC")
let str2 = Symbol("ABC")

console.log("String equal", str1 == str2)


// Undefined
let Name = null;

console.log(Name)


// let fName1 = undefined;
// let lName1;
// console.log(fName1 === lName1)
let fName1 = undefined;
let lName1 = null;
console.log(fName1 === lName1)


// typeof
let var1 = 1;
let var2 = "dfhh";

var type1 = typeof var1
var type2 = typeof(var2)

console.log(type1, type2)

let bool = true;
console.log(typeof bool)

let symbol1 = Symbol("Ali");
let symbol2 = Symbol(0);
console.log(typeof symbol1)
console.log(typeof symbol2)

let anyone;
console.log(typeof anyone)

let noOne = null;
console.log(typeof noOne)

let nr1 = 2;
let nr2 = "2";

let isNumber = Number(nr2)

if (isNumber) {
    console.log("Yes a Number")
} else {
    console.log("Not a Number")
}

// console.log(isNumber ? "yes" : "no")
console.log(nr1 * nr2)

let message = isNumber ? "yes a number" : "not a number"

console.log(message)


let str = 6;
let strConverted = String(str)
console.log(typeof strConverted)

let boolean = "";
// let boolean = false;
// let boolean = 0;
// let boolean = 1;

console.log(Boolean(boolean))

let num = 0;

for(num; num<=10; num++){
    if(num === 10){
        alert(num)
    }else{
        console.log(num)
    }
}

