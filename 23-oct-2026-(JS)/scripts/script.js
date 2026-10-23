// let array = [
//   {
//     name: "Raja",
//     age: 24,
//   },
//   {
//     name: "Ehsan",
//     age: 24,
//   },
// ];

// explicitly at that index
// array[2] = {
//     name: "Farrukh",
//     age: 43
// }

// Push
// array.push({
//     name: "Farrukh",
//     age: 43
// })

// Insert at 1 index
// array.splice(
//   1,
//   0,
//   {
//     name: "Farrukh",
//     age: 43,
//   },
//   {
//     name: "Sufiyan",
//     age: 18,
//   },
// );

// console.log(array);


// let arr1 = [1,2,3,4,5,]
// let arr2 = [6,7,8,9,10]

// let newBasketCount = arr1.length + arr2.length;
// let newBucket = new Array(10);

// for(let i = 0; i < arr1.length; i++){
//     // newBucket.splice(i, 1, arr1[i])
//     newBucket[i] = arr1[i]
// }
// for(let i = 0; i < arr2.length; i++){
//     // newBucket.splice(i+5, 1, arr2[i])
//     newBucket[i+arr1.length] = arr2[i]

// }

// Array Concatenation
// let newBucket = arr1.concat(arr2)

// Using spread operator
// let newBucket = [...arr1, ...arr2];


// let newBucket = arr1.concat(2, 3, 5)
// console.log(newBucket)

// arr1.pop()
// arr1.shift()

// let arr1 = [1,2,3,4,5];
// arr1.splice(2,1)
// arr1.splice(2,1)

// delete arr1[2]

// console.log(arr1)


let dataSet = [
    {
        name: "raja1",
        age: 27,
        class: 12
    },
    {
        name: "raja1",
        age: 27,
        class: 11
    },
    {
        name: "raja3",
        age: 27,
        class: 10
    },
    {
        name: "raja4",
        age: 27,
        class: 9
    },
    {
        name: "raja5",
        age: 27,
        class: 10
    },
];

// let class10Studs = [];

// for(let i = 0; i < dataSet.length; i++){
//     let data = dataSet[i];
//     if(data.class === 10){
//         class10Studs.push(data)
//     }
// }

// console.log(class10Studs);

