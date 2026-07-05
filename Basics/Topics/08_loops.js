// LOOPS IN JAVASCRIPT

// 1. for loop

// let i = 1;
// for(i = 1;i<=5;i++){
//     console.log(i);
    
// }
// for(i=5;i>=0;i--){
//     console.log(i);
    
// }

// 2. for-in loop

// let person = {
//     name: "atyamrohith",
//     age: 20,

// }
// for(let key in person){
//     console.log(key,":",person[key]);
    
// }

// 3. for-of loop

// let fruits = ["apple","banana","mango"];
// for(let fruit of fruits){
//     console.log(fruit);
    
// }
// for(let fruit in fruits){
//     console.log(fruit);
    
// }

// Real-Example

// const students = [
//     {name: "rohith",age: 20},
//     {name: "yashith",age:19},
//     {name: "rocky",age:15},
// ];
// for(let student of students){
//     console.log(student.name,"is",student.age,"years old.");
    
// }
// let i = 0;              initialize
// while(i<=10){           condition
//     console.log(i);
//     i++;                increment
// }
// let i = 0;
// do{
//     console.log(i);
//     i++;
// }while(i<=5)

// Real Examples
// let password = "";
// let correctPassword = "admin";
// do{
//     password = prompt("Enter your password: ");

// }while(password!==correctPassword);
// console.log("Access Granted");
