var sen = document.getElementById("password");
var msg = document.getElementById("messege");
var tam = document.getElementById("tamanho");

sen.addEventListener('input', () => {
    if(sen.value.length > 0){
        msg.style.display = "block";
    }
    else{
        msg.style.display = "none";
    }
})