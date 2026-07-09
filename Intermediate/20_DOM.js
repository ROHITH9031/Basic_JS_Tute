// DOM => DOCUMENT OBJECT MODEL

// console.log("DOM body",document.body);

// TO ACCESS

// document.getElementById("demo")
// console.log(document.getElementById("demo"));
// document.getElementsByClassName("demo");
// document.getElementsByTagName("h1");
// document.querySelector("#demo");
// document.querySelectorAll(".demo");

// MANIPULATION THE DOM
// document.getElementById("logo").innerText = "New Text";
// document.getElementById("content").innerHTML="<b>BOLD TEXT</b>";   // old text -> BOLD TEXT


// ADDING AND REMOVING
function addButton() {
    const box = document.createElement("div");
    box.innerText = "New Box";
    box.id = "box";
    document.getElementById("container").appendChild(box);
    
}

function removeButton() {
    const box = document.getElementById("box");
    if(box){
        box.remove();
    }
    
}

// DOM EVENTS => ONCLICK FUNCTION CHANGES
