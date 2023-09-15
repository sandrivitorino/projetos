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

let 


