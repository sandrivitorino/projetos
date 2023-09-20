const senhaBox = document.getElementById("senha");
const tamanho = 12;

const maiusculo = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const minusculo = "abcdefghijklmnopqrstuvwxyz";
const numero = "0123456789";
const simbolos = "@#$%^&*()_+~|{[]></-=";

const todosCaracteres = maiusculo + minusculo + numero + simbolos;


function criarSenha(){
    let senha = "";
    senha += maiusculo[Math.floor(Math.random() * maiusculo.length)];
    senha += minusculo[Math.floor(Math.random() * minusculo.length)];
    senha += numero[Math.floor(Math.random() * numero.length)];
    senha += simbolos[Math.floor(Math.random() * simbolos.length)];

        while(tamanho > senha.length ){
            senha += todosCaracteres[Math.floor(Math.random() * todosCaracteres.length)];
        }
        senhaBox.value = senha;

}

function copiarSenha(){
    senhaBox.select();
    navigator.clipboard.writeText(senhaBox.value);
}

