// ARRAYS => COLLECTION OF ITEMS THAT STORE IN SINGLE VARIABLE.

// let arr1 = ["atyam rohith",24,true,[2,3,4]];
// console.log(arr1);
// console.log(arr1[0]);
// console.log(arr1[1]);
// console.log(arr1[2]);
// console.log(arr1[3]);

// arr1[4] = "yashith";
// console.log(arr1);

// arr1[1] = 25;
// console.log(arr1);
// console.log(arr1[1]);
// console.log(arr1.length);

// BASIC ARRAY METHODS

// 1. PUSH

// let fruits = ["apple","orange","banana"]
// fruits.push("mango");
// console.log(fruits);
// console.log(fruits.length);

// // 2. POP
// console.log(fruits.pop());
// console.log(fruits);

// 3. SHIFT

// let firstFruit = fruits.shift();
// console.log(firstFruit);
// console.log(fruits);
// console.log(fruits.length);
// fruits.unshift("kiwi","grapes");
// console.log(fruits);
// console.log(fruits.length);


// ARRAY ITERATION SEARCHING AND TRANSFORMATION.

// let fruits = ["apple","banana","kiwi"];

// forEach

// fruits.forEach((item,index)=> {
//     console.log("Item: ",item,"Index: ",index);
    
// });

// fruits.forEach(function fruit(item) {
    

//     console.log("Item: ",item);
    
// });

// 2.MAP

// let numbers = [1,2,3,4];
// let double = numbers.map((num)=> num*2);
// console.log(double);

// let num1 = [];
// for(let num of numbers){
//     num1.push(num);
    
       
// }
// console.log(num1);



// FILTER
// let numbers = [1,2,3,5,4];
// let evenNumbers = numbers.map((num)=>{
//     return num%2==0;
// });
// console.log(evenNumbers);

// FIND 

// let largeNumbers = numbers.find((num) =>{
//     return num > 3;  // returns 1st large number
// });
// console.log(largeNumbers);

//  INDEXOF

// let fruits = ["apple","banana","kiwi"];
// let index = fruits.indexOf(("kiwi"));
// console.log(index);
// console.log(fruits.indexOf("kiwi"));


//  sort

// let numbers = [10,5,1,7,,3,9];
// // console.log(numbers.sort());
// numbers.sort((a,b)=>a-b);
// console.log(numbers);

//  Real example

const students = [
    {name: "rohith",score: 90},
    {name: "yashith",score: 95},
    {name: "rocky",score: 80},

];

const passStudents = students.filter((student)=>student.score>=81)
console.log(passStudents);
console.log(passStudents.map(s=>s.name));


