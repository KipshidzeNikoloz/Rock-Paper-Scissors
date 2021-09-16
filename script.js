let playerScore = 0;
let computerScore = 0;



function computerPlay() {
    let random =  Math.floor(Math.random()*(3-1+1))+1; 

    if (random == 1) {
        return 'ROCK'
    } else if (random == 2) {
        return 'PAPER'
    } else {
        return 'SCISSORS'
    }
}



function playRound(playerSelection, computerSelection) {

    playerSelection = playerSelection.toUpperCase();

if (playerSelection === computerSelection) {
    return 'Its a Draw!';
}  else if  (
    (playerSelection === 'PAPER' && computerSelection === 'SCISSORS') ||
    (playerSelection === 'ROCK' && computerSelection === 'PAPER') ||
    (playerSelection === 'SCISSORS' && computerSelection === 'ROCK')
) {
    computerScore = ++computerScore;
    return 'You lose! ' + playerSelection + ' loses against ' + computerSelection; 
} else {
    playerScore = ++playerScore;
    return 'You Win! ' + playerSelection + ' wins against ' + computerSelection;
    }      

}

function game(){
    for (let i = 0; i < 5; i++){
        playerSelection = prompt();
        playerSelection = playerSelection.toUpperCase();
        computerSelection = computerPlay();
        console.log(playerSelection);
        console.log(computerSelection);
        console.log(playerScore);
        console.log(computerScore);
        playRound(playerSelection, computerSelection)
    }

}

function gameWin(){
    if (playerScore > computerScore) {
    return 'Congratulations, You won the game!'
} else if (playerScore < computerScore) {
    return 'The Machines have won, better luck next time.'
} else {
    return 'Its a tie'
}
}

function gameReset() {
    var reset = prompt('Do you Want to play again?')
    switch(reset) {
        case "yes":
            game();
        case "no":
           alert("Hope you had fun!");              
    }
    let playerScore = 0;
    let computerScore = 0; 
    
}


console.log(game());
console.log(playerScore);
console.log(computerScore);
console.log(gameWin());
console.log(gameReset());
