const containerNotas = document.querySelector(".notas-container");
const criarBtn = document.querySelector(".btn");
let notas = document.querySelectorAll(".input-box");

function mostrarNotas(){
    containerNotas.innerHTML = localStorage.getItem("notas");
}

mostrarNotas();

function updateStorage(){
    localStorage.setItem("notas", containerNotas.innerHTML);
}

criarBtn.addEventListener("click", ()=>{
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "images/delete.png";
    containerNotas.appendChild(inputBox).appendChild(img);


})

containerNotas.addEventListener("click", function(e){
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        updateStorage();
    } 
    else if(e.target.tagName === "P"){
        notas = document.querySelectorAll(".input-box");
        notas.forEach(nt => {
            nt.onkeyup = function(){
                updateStorage();
            }
        })
    }
})

document.addEventListener("keydown", event =>{
    if(event.key === "Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})