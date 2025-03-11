function getComputerChoice() {
    let number = Math.floor(Math.random() * (4 - 1) + 1);
    let computerChoice = ''
    if (number === 1) {
        computerChoice = 'rock'
    } else if (number === 2) {
        computerChoice = 'paper'
    } else {
        computerChoice = 'scissors'
    }
    console.log(`Computer has chosed ${computerChoice}`);
    return computerChoice
}

function getHumanChoice() {
    let humanChoice = prompt('To choose, type "rock", "paper" or "scissors"').toLowerCase()
    console.log(`You chosed ${humanChoice}`);
    return humanChoice
}

let humanScore = 0
let computerScore = 0

function playRound(computerChoice, humanChoice) {
    if (humanChoice == 'paper' && computerChoice == 'rock') {
        console.log('You win!');
        humanScore++
        console.log(`You: ${humanScore}\n Computer: ${computerScore}`);
    } else if (humanChoice == 'rock' && computerChoice == 'scissors'){
        console.log('You win!');
        humanScore++
        console.log(`You: ${humanScore}\n Computer: ${computerScore}`);
    } else if (humanChoice == 'scissors' && computerChoice == 'paper'){
        console.log('You win!');
        humanScore++
        console.log(`You: ${humanScore}\n Computer: ${computerScore}`);
    } else if (computerChoice == humanChoice){
        console.log("It's a draw!");
        console.log(`You: ${humanScore}\n Computer: ${computerScore}`);
    } else {
        console.log('You lose!');
        computerScore++
        console.log(`You: ${humanScore}\n Computer: ${computerScore}`);
    }
}

function playGame() {
    const humanSelection = getHumanChoice()
    const computerSelection = getComputerChoice()
    playRound(computerSelection, humanSelection)
    if (humanScore < 5 && computerScore < 5) {
        playGame();
   } else {
       console.log("Juego terminado!");
       if(humanScore > computerScore){
           console.log("¡Ganaste el juego!")
       } else if (computerScore > humanScore){
           console.log("¡Perdiste el juego!")
       } else {
           console.log("¡El juego terminó en empate!")
       }
   }
}

playGame()
