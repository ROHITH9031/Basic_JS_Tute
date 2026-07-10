// EVENTS IN JAVASCRIPT
// ONCLICK, HOVER, SCROLL, INPUT FIELD....

// ADDING AN EVENT LISTNER TO THE BUTTON
// const button = document.getElementById('btn')
// button.addEventListener('click',function () {
//     alert('Button was clicked');
    
// });

// DOM METHOD
// document.getElementById('btn').onclick = function () {
//     alert("You clicked the button");
    
// }

// ADDING EVENT LISTENER USING DOM METHOD

// document.getElementById('btn').addEventListener('click',function () {
//     alert("Hello World");
    
// });

// EVENT REMOVE

const btn = document.getElementById('btn');
const removebtn = document.getElementById('removebtn');
function hello() {
    alert("hello rohith");
    
}

btn.addEventListener('click',hello);
removebtn.addEventListener('click',function () {
    btn.removeEventListener('click',hello);
    alert("event removed");
    
})
