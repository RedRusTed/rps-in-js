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

buttonRock.addEventListener("click", () => {handleUserClick("rock")})
buttonPaper.addEventListener("click", () => {handleUserClick("paper")})
buttonScissors.addEventListener("click", () => {handleUserClick("scissors")})

function handleUserClick(value){
    if (humanScore != 5 && pcScore != 5){
        oneRoundPlay(value)
    }else{
        showWinner(humanScore,computerScore)
    }
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

    updateScore(userValue)
    showWinner()
}

function updateScore(userValue){
    playerScore.textContent = humanScore
    pcScore.textContent = computerScore
}

function showWinner(){
    if (humanScore === 5 && computerScore < 5){
        evaluation.textContent = "YOU ALREADY WON!!!!"
        evaluation.style.color = "green"
    }else if (computerScore === 5 && humanScore < 5){
        evaluation.textContent = "YOU ALREADY LOST!!!!"
        evaluation.style.color = "red"
    }
}

buttonReset.addEventListener("click", () => {
    humanScore = 0
    computerScore = 0
    playerScore.textContent = 0
    computerScore.textContent = 0
    evaluation.textContent = ""
    evaluation.style.color = "black"
})