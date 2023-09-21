const frase = document.getElementById("frase");
const autor = document.getElementById("autor");
const api_url = "https://api.quotable.io/random";

async function getfrase(url){
    const res = await fetch(url);
    var data = await res.json();
    console.log(data);
    frase.innerHTML = data.content;
    autor.innerHTML = data.author;
}

getfrase(api_url);

function tweet(){
    window.open("https://twitter.com/intent/tweet?text=" + frase.innerHTML + "-- by " + autor.innerHTML, "Tweet Window", "width=600, height=300")
}