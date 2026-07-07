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