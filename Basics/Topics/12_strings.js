// STRINGS IN JAVASCRIPT

// COLLECTION / SEQUENCE OF CHARACTER IS CALLED STRINGS

// let name = "rohith $24"
// console.log(name);
// for(let letters of name){
//     console.log(letters,end="\n");
    
// }
//  we can declare a string by using " ",' ',` `;

// let firstName = prompt("Enter 1st name: ");
// let lastName = prompt("Enter last name: ");
// let fullName = firstName + lastName;
// console.log(fullName);

// ESCAPE CHARACTERS ==> \n, \', \\;

//  STRING METHODS
// //String Length
// let str = "rohith";
// console.log(str.length); // 6

// //String to Lower Case and Upper Case
// let str1 = "yashith";
// console.log(str1.toLowerCase()); // 
// console.log(str1.toUpperCase()); // 

// //charAt() method
// let str2 = "atyam";
// console.log(str2.charAt(3));

// //indexOf() method
// let str3 = "rohith";
// console.log(str3.indexOf("h"));

// //includes() method
// let str4 = "atyam rohith";
// console.log(str4.includes("rohith")); // T/F

//slice() vs substring()
// let str5 = "atyam rohith";
// console.log(str5.slice(-5)); 
// console.log(str5.substring(-5)); //0

// //replace() method
let str6 = "atyam rohith";
console.log(str6.replace("rohith", "yashith")); // 

// //split() method
let str7 = "HTML,CSS,JS";
console.log(str7.split(",")); 

// //trim() method
let str8 = "   rohith    ";
console.log(str8.trim()); // 

// //String Concatenation
let str9 = "rohith";
let str10 = " atyam";
console.log(str9.concat(str10)); // 