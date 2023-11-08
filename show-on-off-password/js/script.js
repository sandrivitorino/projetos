var sen = document.getElementById("password");
var msg = document.getElementById("message");
var str = document.getElementById("strenght");

sen.addEventListener('input', () => {
    if(sen.value.length > 0){
        msg.style.display = "block";
    }
    else{
        msg.style.display = "none";
    }
    if(sen.value.length < 4){
        str.innerHTML = "fraca";
        sen.style.borderColor = "#ff5925";
        msg.style.color = "#ff5925";
    }
    else if(sen.value.length >= 4 && sen.value.length < 8){
        str.innerHTML = "media";
        sen.style.borderColor = "yellow";
        msg.style.color = "yellow";
    }
    else if (sen.value.length > 8){
        str.innerHTML = "forte";
        sen.style.borderColor = "#26d730";
        msg.style.color = "#26d730";
    }
})