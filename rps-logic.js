let humanScore = 0
let computerScore = 0

const evaluation = document.querySelector("#win-loss")
const buttonReset = document.querySelector("#button-reset")
const buttonRock = document.querySelector("#rock")
const buttonPaper = document.querySelector("#paper")
const buttonScissors = document.querySelector("#scissors")

const playerScore = document.querySelector("#player-score")
const pcScore = document.querySelector("#pc-score")

function getComputerChoice(){
    let int = Math.floor(Math.random() * 3)
    switch (int){
        case 0:
            return "rock"
        case 1:
            return "paper"
        case 2:
            return "scissors"
    }
}

buttonRock.addEventListener("click", () => {getUserChoice("rock")})
buttonPaper.addEventListener("click", () => {getUserChoice("paper")})
buttonScissors.addEventListener("click", () => {getUserChoice("scissors")})

function getUserChoice(value){
    oneRoundPlay(value)
}


function oneRoundPlay(userValue){
    let pcValue = getComputerChoice()

    console.log(userValue)
    console.log(pcValue)
    if (userValue === pcValue){
        evaluation.textContent = "DRAW!"
    }else if(userValue === "rock" && pcValue === "scissors"){
        humanScore++
        evaluation.textContent = "You win a round!"
    }else if(userValue === "paper" && pcValue === "rock"){
        humanScore++
        evaluation.textContent = "You win a round!"
    
    }else if(userValue === "scissors" && pcValue === "paper"){
        humanScore++
        evaluation.textContent = "You win a round!"
    }else{
        computerScore++
        evaluation.textContent = "You loose a round!"
    }
}