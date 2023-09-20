const senhaBox = document.getElementById("senha");
const tamanho = 8;

const maiusculo = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const minusculo = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const simbolos = "@#$%^&*()_+~|{[]></-=";


function criarSenha(){
    let senha = "";
    senha += maiusculo[Math.floor(Math.random() * maiusculo.length)];
    senha += minusculo[Math.floor(Math.random() * minusculo.length)];
    senha += number[Math.floor(Math.random() * number.length)];
    senha += simbolos[Math.floor(Math.random() * simbolos.length)];

        while(tamanho > senha.length ){
            
        }

}

