const questions = [
  {
    question: "Qual é a capital do Brasil?",
    choices: ["Brasília", "Rio de Janeiro", "São Paulo", "Salvador"],
    answer: "Brasília",
  },
  {
    question: "Qual é a capital da Argentina?",
    choices: ["Buenos Aires", "Brasília", "Lisboa", "Paris"],
    answer: "Buenos Aires",
  },
  {
    question: "Qual é a capital da França?",
    choices: ["Roma", "Madri", "Paris", "Londres"],
    answer: "Paris",
  },
  {
    question: "Qual é a capital da Espanha?",
    choices: ["Lisboa", "Madri", "Barcelona", "Valência"],
    answer: "Madri",
  },
  {
    question: "Qual é a capital da Itália?",
    choices: ["Veneza", "Milão", "Roma", "Nápoles"],
    answer: "Roma",
  },
  {
    question: "Qual é a capital do Canadá?",
    choices: ["Toronto", "Vancouver", "Ottawa", "Montreal"],
    answer: "Ottawa",
  },
  {
    question: "Qual é a capital dos Estados Unidos?",
    choices: ["Nova York", "Los Angeles", "Chicago", "Washington D.C."],
    answer: "Washington D.C.",
  },
  {
    question: "Qual é a capital do Reino Unido?",
    choices: ["Liverpool", "Manchester", "Edimburgo", "Londres"],
    answer: "Londres",
  },
];

//variaveis
const ElmentoPontuacao = document.querySelector("#pontuacao")
const ElementoErro = document.querySelector("#erros")
const ElementoOpcoes = document.querySelectorAll(".opcao")
const ElementoQuestao = document.querySelector("#questao")
const BotaoNext = document.querySelector("#next")

let QuestaoAtual = 0
let Pontuacao = 0
let Erros = 0
let RespostaEscolhida = false

//funções
function CarregarPergunta(){
    const currentQuestData = questions[QuestaoAtual]
    ElementoQuestao.innerHTML = currentQuestData.question

    const choices = shuffleArray(currentQuestData.choices)
    for(let i=0;i<ElementoOpcoes.length;i++){
        ElementoOpcoes[i].innerHTML = choices[i]
    }

    RespostaEscolhida = false //para que não prejudique a próxima pergunta
}

function shuffleArray(array){//aleatoriedade das opções
    let cuurentIndex = array.length
    let temporaryValue
    let randomIndex

    while(0 !== cuurentIndex){

        randomIndex=Math.floor(Math.random()*cuurentIndex)
        cuurentIndex-=1

        temporaryValue=array[cuurentIndex]
        array[cuurentIndex]=array[randomIndex]
        array[randomIndex]=temporaryValue
    }
    return array
}

function CheckAnswer(evento){

    if(RespostaEscolhida){
        return
    }
    RespostaEscolhida = true

    if(evento.target.innerText === questions[QuestaoAtual].answer){
        Pontuacao++
        ElmentoPontuacao.innerText = `PONTUAÇÃO: ${Pontuacao} `
        alert("Correto!")
    }
    else{
        Erros++
        ElementoErro.innerText = `ERROS: ${Erros}`
        alert("Você errou, a resposta correta é: "+ questions[QuestaoAtual].answer)
    }


}
ElementoOpcoes.forEach((btn)=>{
    btn.addEventListener("click",CheckAnswer)
})

BotaoNext.addEventListener("click", ()=>{
    if(!RespostaEscolhida){
        alert("Responda a pergunta antes de proseguir")
    }
    QuestaoAtual++
    if(QuestaoAtual<questions.length){
        CarregarPergunta()
    }
    else{
        alert(`FIM DE JOGO!, Você acertou ${Pontuacao} de ${questions.length} perguntas`)
        resetarQuiz()
    }
    
})

function resetarQuiz(){
    QuestaoAtual=0
    Pontuacao=0
    Erros=0
    ElmentoPontuacao.innerText = `PONTUAÇÃO: 0 `
    ElementoErro.innerText = `ERROS: 0`
    CarregarPergunta()
}
CarregarPergunta()