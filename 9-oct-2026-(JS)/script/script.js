// statement terminator
// ;

// Camel Case
var firstName = "Ali"
var lastName = " Last"

// Snake Case
// var last_name = "Ali"

console.log("Hello World")
console.log(firstName)
console.log(lastName)
console.log(firstName+" "+lastName)

// Math expression
// +, -, /, *

var num1 = 10
var num2 = 20

var sum = num1 + num2
var mult = num1 * num2
var div = num2 / num1
var sub = num2 - num1

console.log("Addition of num1 and num2 is " + num1 + num2)
console.log("Addition of num1 and num2 is ", + sum)
console.log("Subtraction of num1 and num2 is ", + sub)
console.log("Multiplication of num1 and num2 is ", + mult)
console.log("Division of num1 and num2 is ", + div)


// Modulus (Remainder)
var num3 = 13 % 4
console.log(num3)

var num4 = 0
// Increment - Decrement
// num4 = num4 + 1
// num4 = num4 + 1

// Post Inc
// Pre Inc
// ++num4

num4 = ++num4
console.log("Pre Inc ", num4)
num4 = num4++
console.log("Post Inc ", num4)

var factor = 0;
                // 0 + 2 + 3 + 3
var newfactor = factor++ + ++factor + ++factor + factor++
console.log(newfactor)


var dec = 10;

console.log(--dec)

// Loop
// Type 1 : for loop

// 100 Print
// Initialization, condition, inc/dec
for(var i = 1; i <= 100; i++){
    console.log("HBD ", i)
}
