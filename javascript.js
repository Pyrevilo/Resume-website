function playRound (playerSelection, computerSelection) {
    const choices = ["rock", "paper", "scissors"];
    playerSelecton = prompt("what would you like to play?");
    var lose = "You Lose!";
    var win = "You Win!";
    var draw = "You Draw!";
    computerSelection = choices[Math.floor(Math.random()*choices.length)];
    if (playerSelection == choices[0] && computerSelection == choices[1]) {
        return lose;
    }
    //run all conditional statements to achieve result. Inefficient but gets the job done.
    //consider a better way to solve it later

}

const playerSelection = "rock";
const computerSelection = getCompChoice();
console.log(playRound(playerSelection, computerSelection));