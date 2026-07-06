// OBJECTS IN JAVASCRIPT => {key: "value_pair"}

// const person = {
//     name: "rohith",
//     age: 20,
//     branch: "cse",
//     isStudent: true
// };

// console.log(person.branch);
// console.log(person.age);
// // Object Adding
// person.location = "Tanuku";
// person.college = "srkr";
// console.log(person);

// // Object Update
// person.location = "Andhra Pradesh";
// console.log(person);

// // Object Delete
// delete person.isStudent;
// console.log(person);


//  Nested Objects

let student = {
    name: "rohith",
    age: 20,
    place: {
        city: "Tanuku",
        state: "Andhra Pradesh",
    }
    
};
// console.log(student);

// LOOPS IN OBJECTS

// for(let key in student){
//     console.log(key,student[key]);
    
// }
// ACCESSING KEYS,VALUES AND ENTRIES;
// console.log(Object.keys(student));

// console.log(Object.values(student));

// console.log(Object.entries(student));

// OBJECT DESTRUCTURING;

// const {name,age,} = student
// console.log(name,age);

// OPERATION CHAINING(?.)**

// console.log(student.place?.city);
// console.log(student.place?.country);
