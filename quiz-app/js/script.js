const perguntas = [
    {
        pergunta: "Qual é o maior animal do mundo?",
        respostas: [
            { text: "Tubarão", correct: false},
            { text: "Baleia Azul", correct: true},
            { text: "Elefante", correct: false},
            { text: "Giraffa", correct: false},
        ]
    },
    {
        pergunta: "Qual é o menor País do mundo?",
        respostas: [
            { text: "Cidade do Vaticano", correct: true},
            { text: "Butão", correct: false},
            { text: "Nepal", correct: false},
            { text: "Sri Lanka", correct: false},
        ]  
    },
    {
        pergunta: "Qual é o maior deserto do mundo?",
        respostas: [
            { text: "Kalahari", correct: false},
            { text: "Gobi", correct: false},
            { text: "Sahara", correct: false},
            { text: "Antartica", correct: true},
        ]
    },
    {
        pergunta: "Qual é o menor continente do mundo?",
        respostas: [
            { text: "Asia", correct: false},
            { text: "Australia", correct: true},
            { text: "Artico", correct: false},
            { text: "Africa", correct: false},
        ]  
    }
];

const questElement = document.getElementById("pergunta");
const resButton = document.getElementById("res-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function comecarQuiz(){
    currentQuestionIndex= 0;
    score = 0;
    nextButton.innerHTML = "Next"
    showQuestion();


}

function showQuestion(){
    resetState();
    let currentQuestion = perguntas[currentQuestionIndex];
    let perguntaNo = currentQuestionIndex + 1;
    questElement.innerHTML = perguntaNo + ". " + currentQuestion.pergunta;

    currentQuestion.respostas.forEach(resposta => {
        const button = document.createElement("button");
        button.innerHTML = resposta.text;
        button.classList.add("btn");
        resButton.appendChild(button);
        if (resposta.correct){
            button.dataset.correct = resposta.correct;
        }
        button.addEventListener("click", selectResposta);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(resButton.firstChild){
        resButton.removeChild(resButton.firstChild);
    }
}

function selectResposta(e){
    const btnSelecionado = e.target;
    const eCorreto = btnSelecionado.dataset.correct === "true";
    if(eCorreto){
        btnSelecionado.classList.add("correct");
    }else{
        btnSelecionado.classList.add("incorrect");
    }
    Array.from(resButton.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";

}


comecarQuiz();


