// CLOSURES AND LEXICAL SCOPE

function outer() {
    let name = "atyam rohith";
    function inner() {
        console.log(name);
        
        
    }
    inner();
// console.log(name);

}
outer();

// CLOSURE
// A closure is created when:

// A function is inside another function.
// The inner function uses variables from the outer function.
// The inner function continues to access those variables even after the outer function has finished executing.
function greet(name) {
    return function msg(message) {
        console.log(message,name);
        
        
    };
    
}
const greetRohith = greet("rohith");
greetRohith("Hello");