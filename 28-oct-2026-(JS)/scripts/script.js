// let bucket = [1,2,3,4,5];

// Remove 5
// bucket.pop();

// Remove 2
// delete bucket[1]

// remove 2
// bucket.splice(1,1)

// find element 5 in this bucket

// let elementToFind = 1;

// for(let i = 0; i < bucket.length; i++){
//     let element = bucket[i];
//     console.log(element)
//     if(element === elementToFind){
//         console.log(`true, ${elementToFind} Found at index, ${i}`)
//         break
//     }
// }

// let bucket = [1,2,3,4,5];
// // find
// let toFind = 10;
// let isFound = bucket.find(element => element == toFind);

// if(isFound == undefined){
//     console.log("Not Found");
// }else{
//     console.log("Found")
// }

// filter
// Find those elements in array which are equal to 5
// let students = [10, 11, 12, 11, 12, 8];
// // let classToFind = 13;

// let aboveTen = 10
// // let result = students.find(student => student == classToFind);
// let result = students.filter((student) => student > aboveTen);
// console.log(result)

// indexOf

// let numbers = [9,1,2,3,4,5,6,7,8,9,10];
// let index = numbers.indexOf(2)
// console.log(index)

// Problem Statement
// You are given with the list of numbers that can be of any length given that each number in this array is a one digit number. Another variable is there of total of that will be a number. What you will need to do is find the elements in list whose indexes sum is equal to the total.

let list = [1,2,3,4];
let total = 3;


// for(let start = 0; start < list.length; start++){
//     for(let inner = start+1; inner < list.length; inner++){
//         if()
//     }
// }