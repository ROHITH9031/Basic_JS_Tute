// GLOBAL SCOPE => ASSIGNING THE VALUE IN GLOBAL SPACE / GLOBALLY OUTSIDE THE FUNCTION.
// let name = "rohith";
// function greet() {
//     console.log("Hello:",name);


// }greet();

// LOCAL SCOPE => ASSIGNING THE VARIABLE INSIDE THE FUNCTION.

// function greet2() {
//     let name = "rohith";
//     console.log("Hello:",name);


// }greet2();
// console.log("Hello:",name);  => ERROR

//  BLOCK SCOPE => ASSIGNING THE VARIABLE INSIDE THE BLOCK AND ITS IS NOT APPILICABLE FOR VAR 

// {
//     let name = "atyamrohith";
//     console.log("hello:", name);

// }
// console.log("hello:", name);   => ERROR


// HOISTING => DECLARING THE VARIABLES / FUNCTIONS AT THE TOP OF THE CODE

var a = 10;
console.log(a);

var a;
console.log(a);
a = 10; 
