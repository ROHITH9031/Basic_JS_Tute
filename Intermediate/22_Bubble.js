// EVENT BUBBLING IN JAVASCRIPT

// const parentdiv = document.getElementById('parent--div');
// const childbtn = document.getElementById('child-btn');

// parentdiv.addEventListener('click',function () {
//     console.log('Parent Div clicked');
    
    
// });

// childbtn.addEventListener('click',function () {
//     console.log('Child Button Clicked');
    
// });


// EVENT DELIGATION

const parentdiv = document.getElementById('parent-div');
parentdiv.addEventListener('click',function name(event) {
    if(event.target.tagName === 'LI'){
        console.log('List Item Clicked: ',event.target.textContent);
        
    }    
});

const todo = document.getElementById("todo");

todo.addEventListener("click", function(event){

    if(event.target.tagName === "LI"){
        event.target.style.color = "red";
    }

});
