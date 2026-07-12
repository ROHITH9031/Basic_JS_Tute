// PROMISES IN JAVASCRIPT

// PROMISE => either SUCCESS(resolve) OR FAILURE(reject)

// let mypromise = new Promise((resolve, reject) => {
    // synchronous data....
    // let success = false;
    // if (success) {
    //     resolve("promise is  resolved successfully");
    // }
    // else {
    //     reject("promise is rejected");
    // }
    // asynchronous data..
    // setTimeout(()=>{
    //     resolve("promise is resolved")
    // },5000)

// })

// mypromise
//     .then((message)=>{
//         console.log(message);
        
//     })
//     .catch((error)=>{
//         console.error(error);
        
//     })

// Async/Await

async function fetchData() {
    try{
        let response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        let data = await response.json();
        console.log(data);
        
    }
    catch (error){
        console.error("Error fetching data: ",error);

    }
    finally {
        console.log("Fetch Operation completed");
        
    }
    
}
fetchData();