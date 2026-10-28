//You are given with the list of items and each item may be repeated
//Your task is to degredate the item into their respective 

let dataSet = [1,2,3,4,1,2,3,4];

let sortedArray = dataSet.sort();
//[1,1,2,2,3,3,4,4]

let segregated = [];
let start = 0;


// for(let end = 1; end <= sortedArray.length; end++){

//     console.log(end)
    
//     if(sortedArray[start] !== sortedArray[end] || sortedArray.length === end){
//         console.log("DATA " , sortedArray[start], sortedArray[end]);
//         console.log(sortedArray.slice(start, end))
//         let slice = sortedArray.slice(start, end)
//     l    segregated.push(slice)
//         start = end
//     }
// }

// console.log(segregated);



// [1,2,3,4] -> 6
// [1,2,3,4] -> 5
// [1,2,3,4,6,7] -> 5
// You are given wit the list of numbers, The list length can be N numbers.

// You need to insert a new number following the sequence

// let dataSet2 = [1,3,4,5,7];

// for(let i = 0; i < dataSet2.length; i++){
//     let value = 2;
//     if(dataSet2[i] >= value){
//         dataSet2.splice(i, 0, value);
//         break
//     }
//     console.log(dataSet2[i])
// }
// console.log(dataSet2)


// no. of stairs koi bhi N number eg 10
// given the fact that i can only cross max 3 stairs

let stairs = [1,2,3,4,5,6,7,8,9,10];

let combination = [];

for(let i = 0; i < stairs.length; i++){
    
    
}