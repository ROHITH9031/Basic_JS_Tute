// TIMER FUNCTION IN JAVASCRIPT
// setTimeout
// console.log("Start");
// setTimeout(()=>{
// console.log("Execute code after 2 seconds");

// },2000); //milli seconds
// console.log("End");


//setInterval

// console.log("start");
// console.log("End");


// setInterval(()=>{
// console.log("Repeat code after every 1 second");

// },1000);
// console.log("End");

// clearInterval
// let count = 0;
// const intervalId = setInterval(()=>{
//     count++;
//     console.log("Repeat code every 1sec");
//     if(count === 5){
//         clearInterval(intervalId);
//         console.log("Interval Cleared");
        
//     }
    
// },1000)

// clearTimeout

// let timeoutid = setTimeout(()=>{
//     console.log("This will not execute");
    

// },5000)
// clearTimeout(timeoutid);
// console.log("Timeout cleared");
console.log("start");

let i = 0;
let countdown = setInterval(()=>{
    alert("Timeout",i)
    i++;
    if(i == 5){
        clearInterval(countdown);
        console.log("End");
        
    }

},2000)
// console.log("End");


