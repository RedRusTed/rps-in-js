//rock = 1
//paper = 2
//scissors = 3
let humanScore = 0
let computerScore = 0
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getComputerChoice(){
    let pcChoice = getRandomInt(3) + 1
    if (pcChoice == 1){
        return "rock"
    }else if(pcChoice == 2){
        return "paper"
    }else{
        return "scissors"
    }
}

function getUserChoice(){
    let userChoice = prompt("Choose Rock/Paper/Scissors: ").toLowerCase()
    while (userChoice != "rock" && userChoice != "paper" && userChoice != "scissors"){
        userChoice = prompt("Choose Rock/Paper/Scissors").toLowerCase()
    }

    return userChoice
}

function playRound(){
   let user = getUserChoice()
   let pc = getComputerChoice()
   
   if (user == "paper" && pc == "rock"){
    humanScore += 1
    console.log("Human Win Round")
   }else if( user == "rock" && pc == "scissors"){
    humanScore += 1
    console.log("Human Win Round")
   }else if ( user == "scissors" && pc == "paper"){
    humanScore += 1
    console.log("Human Win Round")
   }else if (user == pc){
    console.log("Draw")
   }else{
    computerScore += 1
    console.log("PC Win Round")
   }
}




