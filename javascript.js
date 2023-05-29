const btn = document.querySelectorAll('.choice');
const choices = ["rock", "paper", "scissor"];

btn.forEach((button) => {
    button.addEventListener('click', () => {
        playerSelection = button.id;
        computerSelection = choices[Math.floor(Math.random()*choices.length)];
        playRound(playerSelection, computerSelection);
        console.log("computer = "+computerSelection);
    })
})

function playRound (playerSelection, computerSelection) {
    const output = document.querySelector('#output');
    const content = document.createElement('div');
    content.classList.add('content');
    if ((playerSelection == choices[0] && computerSelection == choices[1]) || 
        (playerSelection == choices[1] && computerSelection == choices[2]) ||
        (playerSelection == choices[2] && computerSelection == choices[0])) {
        content.textContent = ("winner");
        output.appendChild(content);
    }
    if ((playerSelection == choices[0] && computerSelection == choices[2]) ||
        (playerSelection == choices[1] && computerSelection == choices[0]) ||
        (playerSelection == choices[2] && computerSelection == choices[1])) {
        console.log("Winner");
        return;
    }
    else {
        console.log("Tie");
        return;
    }
}