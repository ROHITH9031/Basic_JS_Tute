// FETCH API IN JAVASCRIPT
// GET FETCH API
// fetch("https://jsonplaceholder.typicode.com/posts")
//     .then(response => response.json())  //to get the data into json format
//     .then(data => console.log(data))    // to print the json data.
//     .catch(error => console.error("Error Fetching data: ",error));

// POST FETCH API

// fetch("https://jsonplaceholder.typicode.com/posts", {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json"
//     },
//     body: JSON.stringify({
//         title: "foo",
//         body: "bar",
//         userId: 101
//     })

// }).then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.error("Error posting data:", error))

// ERROR HANDLING
fetch("https://jsonplaceholder.typicode.com/posts111")
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP ERROR! status: ${response.status}`);

        }
        return response.json();
    })
    .then(data => console.log(data))
    .catch(error => console.error('Error fetching data: ', error));
