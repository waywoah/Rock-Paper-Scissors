//Simple game of Rock, Paper, Scissors
// let playerSelection = prompt("Enter Rock, Paper, or Scissors");
// let computerSelection = getComputerChoice();

// function getComputerChoice() {
//     let computersChoice = Math.floor(Math.random() * 3) + 1;

//     if (computersChoice === 1) {
//         return "Rock";
//     }
//     if (computersChoice === 2) {
//         return "Paper";
//     }
//     if (computersChoice === 3) {
//         return "Scissors";
//     }
// }

// function playRound(playerSelection, computerSelection) {
//     let player = playerSelection.toLowerCase();
//     let computer = computerSelection.toLowerCase();

//     if (player === "rock" && computer === "paper") {
//         return "You lose! Paper beats rock!";
//     } else if (player === "paper" && computer === "scissors") {
//         return "You lose! Scissors beats paper!";
//     } else if (player === "scissors" && computer === "rock") {
//         return "You lose! Rock beats scissors!";
//     } else if (player === "rock" && computer === "scissors") {
//         return "You win! Rock beats scissors!";
//     } else if (player === "paper" && computer === "rock") {
//         return "You win! Paper beats rock!";
//     } else if (player === "scissors" && computer === "paper") {
//         return "You win! Scissors beats paper!";
//     } else {
//         return "It's a tie!"
//     }
// }

// function game() {
//     let playerScore = 0;
//     let computerScore = 0;

//     if (playRound(playerSelection, computerSelection).includes("win")) {
//         playerScore += 1;
//         // console.log(result);
//     }else if (playRound(playerSelection, computerSelection).includes("lose")) {
//         computerScore += 1;
//         // console.log(result);
//     }

//     console.log("Player: " + playerScore + "\tComputer: " + computerScore);
// }

// // if (playRound(playerSelection, computerSelection).includes("win")) {
// //     console.log(true);
// // } else if (playRound(playerSelection, computerSelection).includes("lose")) {
// //     console.log(false);
// // } else if (playRound(playerSelection, computerSelection).includes("tie")) {
// //     console.log(null);
// // }
// game();
// game();
// game();
// game();
// game();

//Couldn't get the logic to work, starting over