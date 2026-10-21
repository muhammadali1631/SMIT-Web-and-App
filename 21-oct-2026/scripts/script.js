let arr1 = ["apple", "banana", "pineapple"];

// let arr2 = new Array(10).fill(1);
// let arr2 = new Array(10, 12,12,12);
// console.log("Contructor Method Array",arr2);

// let student = new Array(100);

// let updatedStudent = student;
// updatedStudent.fill(1)

// console.log(student)


// let multipleValues = [1, "string", true];
// console.log(typeof multipleValues); //Object
// console.log(typeof multipleValues[1])
// console.log(typeof multipleValues[2])

// let students = ["raja", "muhammad", "ehsan"];
// console.log(students);
// students[1] = "hunzala";
// console.log(students);
// console.log(students.length);

// let studentNames = ["Raja", "Hanzala", "Farooq"];
// let studentAges = [27,34, 45];

// An object in JS is a combination of key:value pairs
// let student1 = {
//     name: "Raja",
//     age: 27,
//     fName: "Ehsan",
//     class: 12
// };

// console.log(student1);
// console.log(student1.name);
// console.log(student1.fName);
// console.log(student1.age);
// console.log(student1.class);

// let student2 = {
//     name: "Raja",
//     age: 27,
//     fName: "Ehsan",
//     class: 12
// };
// let student3 = {
//     name: "Raja",
//     age: 27,
//     fName: "Ehsan",
//     class: 12
// };

// let students = [student1, student2, student3];

// console.log(students[1].name)

let students = [
    {
        name: "Student 1",
        age: 27,
        class: 12
    },
    {
        name: "Student 2",
        age: 27,
        class: 12
    },
    {
        name: "Student 3",
        age: 27,
        class: 12
    },
    {
        name: "Student 4",
        age: 27,
        class: 12
    },
]

// let stud = students[0];
// console.log(stud.name, typeof stud)

// Destructuring
// let {name, ...all} = students[0];
// console.log(name, all)

//Structuring
// let student = {
//     name: "New",
//     age: 24,
//     isAlive: true
// }

// // Destructuring
// // LHS = RHS
// let {name, age, isAlive} = student
// name = "ehsan"
// student.name = "ABC"
// console.log(name, age, isAlive)
// console.log(student)

// let student = {};
// console.log(student);
// student["name"] = "Raja"
// student["age"] = 27
// student.name = "Ehsan"
// console.log(student);

let student = {
    name: "Raja",
    age: 12,
    isAlive: true
}

student.name = "New"
console.log(student)
