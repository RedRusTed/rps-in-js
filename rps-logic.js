let humanScore = 0
let computerScore = 0
const buttonStart = document.querySelector("#button-start")
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
    console.log("User: " + value)
}

buttonStart.addEventListener('click', () =>{
    console.log(getComputerChoice())
})