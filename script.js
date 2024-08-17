let notesContainer = document.querySelector(".notes-container");
let createBtn= document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");

function showNotes(){
    notesContainer.innerHTML = localStorage.getItem("notes")
}
showNotes();

function updateStorage(){
    localStorage.setItem("notes", notesContainer.innerHTML); 
}

createBtn.addEventListener("click", ()=>{
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "images/delete.png";
    img.setAttribute("contenteditable", "false");
    notesContainer.appendChild(inputBox).appendChild(img);
    updateStorage();
});

notesContainer.addEventListener("click", function(e){
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        updateStorage();
    }
    // if(e.target === "P")
    
    else{
        notes = document.querySelectorAll(".input-box")
        notes.forEach(nt =>{
            nt.onkeyup = function(){
                updateStorage();
            }
        });
        notes.forEach(nt => {
        nt.addEventListener("keyup", updateStorage);
        });
    };
    document.querySelectorAll(".input-box").getElementsById("image").setAttribute("contenteditable", "false");
});

document.addEventListener("keydown", event =>{
   if ( event.key === "Enter"){
       document.execCommand("insertlinebreak");
        event.preventDefault();
    }
})