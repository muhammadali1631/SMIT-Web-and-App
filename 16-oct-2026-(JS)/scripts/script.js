// 1. Swap Program
// 2. Table Program
// 3. Array
// 4. Array Method
// 5. Sorting approaches
// 6. Bubble sort  (Array, Conditional if-else, Nested loop)


// Swaping a variable
// let a = 5;
// let b = 10;

// // 1. By using a temp variable
// let temp = a + b;
// a = temp - a;
// b = temp - b;

// console.log("a ==>",a)
// console.log("b ==>",b)


// let a = "A"
// let b = "B"

// let temp = a;
// a = b;
// b = temp;

// console.log("a ==>", a)
// console.log("b ==>", b)

// Without temp variable
// can hold N number of values

// let num1 = 1;
// let num2 = 2;
// let num3 = 3;

// let numbers = [num1, num2, num3]

// let numbersLength = numbers.length

// console.log("Numbers Length ==>", numbersLength)
// console.log(numbers) 
// console.log(numbers[2])


// Write a progrom in which you need to multiple array each element by factor of 2.

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// console.log(numbers[0] * 2)

let lengthOfNumbers = 10;
let numbers = [];


for(let i = 1; i <= 10; i++){
    numbers[i-1] = i
}
console.log(numbers)

for(let j = 0; j< numbers.length; j++){
    if(j <= 4){
        numbers[j] = numbers[j] *2
    }else{
        break;
    }
    console.log(j)
}
console.log(numbers)

// let arr = [1, "a", true, null]

// 2D Array
// let arr = [
//     [1, 2, 3, 4, 5],
//     [1, 2, 3, 4, 5],
//     [1, 2, 3, 4, 5],
//     [1, 2, 3, 4, 5],
// ];

// for(let i = 1; i <= arr.length; i++){
//     for(let ni = 1; ni <= arr[i-1].length; ni++){
//         arr[i-1][ni-1] = arr[i-1][ni-1] *2
//     }
// }
// console.log(arr)