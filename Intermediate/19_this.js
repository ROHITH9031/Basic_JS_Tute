// THIS KEYWORD IN JAVASCRIPT
// this is keyword that  refers to the object that is execute the current function

//  console.log(this); //Window =>go to browser and select inspect then console it

// "use strict";
// function thisfun() {
//     console.log(this);


// }
// thisfun();

// const person = {
//     name: "rohith",
//     greet(){
//         console.log(this.name);   //try with only this.
        
//     }
// };
// person.greet();

// this keyword doesnt work in arrow function

const person = {
    name: "rohith",
    greet: function (){
        console.log(this.name);
        const arrow = ()=> {
            console.log(this.name);
               
        };
        arrow();

        
    }
};
person.greet();