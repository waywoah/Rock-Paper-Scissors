//Simple game of Rock, Paper, Scissors
const playerSelection = "Rock";
const computerSelection = getComputerChoice();

function getComputerChoice() {
    let computersChoice = Math.floor(Math.random() * 3) + 1;

    if (computersChoice === 1) {
        return "Rock";
    }
    if (computersChoice === 2) {
        return "Paper";
    }
    if (computersChoice === 3) {
        return "Scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    let player = playerSelection.toLowerCase();
    let computer = computerSelection.toLowerCase();

    if (player === "rock" && computer === "paper") {
        return "You lose! Paper beats rock!";
    } else if (player === "paper" && computer === "scissors") {
        return "You lose! Scissors beats paper!";
    } else if (player === "scissors" && computer === "rock") {
        return "You lose! Rock beats scissors!";
    } else if (player === "rock" && computer === "scissors") {
        return "You win! Rock beats scissors!";
    } else if (player === "paper" && computer === "rock") {
        return "You win! Paper beats rock!";
    } else if (player === "scissors" && computer === "paper") {
        return "You win! Scissors beats paper!";
    } else {
        return "It's a tie!"
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;

    while (playerScore <= 5 || computerScore <= 5) {
        let result = playRound(playerSelection, computerSelection);

        if (result.includes("win")) {
            playerScore += 1;
            console.log(result + "\nPlayer Score: " + playerScore + "\tComputer Score: " + computerScore);
        } 
        if (result.includes("lose")) {
            computerScore += 1;
            console.log(result + "\nPlayer Score: " + playerScore + "\tComputer Score: " + computerScore);
        }
        if (result.includes("tie")) {
            console.log(result + "\nPlayer Score: " + playerScore + "\tComputer Score: " + computerScore);
        }
    }
}

game();