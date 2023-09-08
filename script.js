//game of Rock, Paper, Scissors. Player inputs selection, computer is given random selection. Outputs who wins.

function playerSelection() { //working
    //returns 
    console.log("playerSelection called");

    let player = prompt("Rock, paper, or scissors?");
    player = player.toLowerCase();
    return player;
}

function computerSelection() { //working
    //returns number
    console.log("computerSelection called");

    return Math.floor(Math.random() * 3) + 1;
}

function playRound() { //working
    //returns string
    console.log("playRound called");

    let player = playerSelection();
    let computer = computerSelection();

    if ((player === "rock" && computer === 1) || (player === "paper" && computer === 2) || (player === "scissors" && computer === 3)) {
        return "You tied";
    } else if ((player === "rock" && computer === 3) || (player === "paper" && computer === 1) || (player === "scissors" && computer === 2)) {
        return "You won";
    } else {
        return "You lost";
    }
}

function play() {
    let counter = 0;
    let pScore = 0;
    let cScore = 0;

    while (counter < 5) {
        console.log("Loop #: " + (counter + 1));
        let game = playRound();

        if (game.includes("won")) {
            console.log("win");
            pScore++;
        } else if (game.includes("lost")) {
            console.log("loss");
            cScore++;
        } else {
            console.log("tie");
        }

        counter++;
    }

    console.log("Player: " + pScore + "\t" + "Computer: " + cScore);
}

play();