const containerNotas = document.querySelector(".notas-container");
const criarBtn = document.querySelector(".btn");
let notas = document.querySelectorAll(".input-box");

criarBtn.addEventListener("click", ()=>{
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "images/delete.png";
    containerNotas.appendChild(inputBox).appendChild(img);
    

})