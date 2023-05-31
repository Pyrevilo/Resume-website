//queryselector for all button selection choices
const btn = document.querySelectorAll('.choice');
const choices = ["rock", "paper", "scissors"];

//for each button run function adding event listener. On click set playerselection to the button ID.
//Computer choice is randomized from choices[]. Then run playround function.
btn.forEach((button) => {
    button.addEventListener('click', () => {
        playerSelection = button.id;
        computerSelection = choices[Math.floor(Math.random()*choices.length)];
        playRound(playerSelection, computerSelection);
    })
})

//counters to track amount of wins, losses, ties.
var lostCounter = 0;
var winCounter = 0;
var tieCounter = 0;

//function checks player selection and computer choice to return output. Then display outcome and win/loss/tie total.
function playRound (playerSelection, computerSelection) {

    if ((playerSelection == choices[0] && computerSelection == choices[1]) || 
        (playerSelection == choices[1] && computerSelection == choices[2]) ||
        (playerSelection == choices[2] && computerSelection == choices[0])) {
        lostCounter++;
        //finds element in html with ID == lost to return counter total. ID with output return outcome of match.
        document.getElementById('lost').innerHTML = "Lose Score: " + lostCounter;
        document.getElementById('output').innerHTML = "You LOST!";
        document.getElementById('output2').innerHTML = "The computer chose " + computerSelection;
        return;
    }
    if ((playerSelection == choices[0] && computerSelection == choices[2]) ||
        (playerSelection == choices[1] && computerSelection == choices[0]) ||
        (playerSelection == choices[2] && computerSelection == choices[1])) {
        winCounter++;
        document.getElementById('win').innerHTML = "Win Score: " + winCounter;
        document.getElementById('output').innerHTML = "You WON!";
        document.getElementById('output2').innerHTML = "The computer chose " + computerSelection;
        return;
    }
    else {
        tieCounter++;
        document.getElementById('tie').innerHTML = "Tie Score: " + tieCounter;
        document.getElementById('output').innerHTML = "You TIED!";
        document.getElementById('output2').innerHTML = "The computer chose " + computerSelection;
        return;
    }
}

