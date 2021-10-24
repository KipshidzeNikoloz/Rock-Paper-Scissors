const scoreRow = document.querySelector('.scoreRow');
const scoreCard2 = document.querySelector('.scoreCard2');
const computerChoice = document.createElement('div');
const gameResult = document.createElement('div');
const rockBtn = document.getElementById('rock')
const paperBtn = document.getElementById('paper')
const scissorsBtn = document.getElementById('scissors')
const score1 = document.querySelector('.score1');
const score2 = document.querySelector('.score2');

//const choiceCard = document.querySelectorAll('.choiceCard');

//set starting points

let playerScore = 0; 
let computerScore = 0;
let roundWin = '';

function computerPlay() {
    let random =  Math.floor(Math.random()*(3-1+1))+1; 
    if (random == 1) {
        return 'ROCK'
    } else if (random == 2) {
        return 'PAPER'
    } else {
        return 'SCISSORS'
    }
};

function playRound(playerSelection, computerSelection) {
if (playerSelection === computerSelection) {
    roundWin = 'tie';
}  else if  (
    (playerSelection === 'PAPER' && computerSelection === 'SCISSORS') ||
    (playerSelection === 'ROCK' && computerSelection === 'PAPER') ||
    (playerSelection === 'SCISSORS' && computerSelection === 'ROCK')
    ) {
    computerScore = ++computerScore;
    roundWin = 'computerWin'; 
} else {
    playerScore = ++playerScore;
    roundWin = 'playerWin';
}};

function gameOver() {
    return playerScore === 5 || computerScore === 5;
}

function endScoreCard() {
    
}

function gameReset() {
   
}
//Events 


rockBtn.addEventListener('click', () => btnClick('ROCK'));
paperBtn.addEventListener('click', () => btnClick('PAPER'));
scissorsBtn.addEventListener('click', () => btnClick('SCISSORS'));


function btnClick(playerSelection) {
    if (gameOver()) {
        gameReset()
        return;
    }
    
    const computerSelection = computerPlay();

    function computerSelectionCapitalized(string){
        string = computerSelection.toLowerCase();
        return string.charAt(0).toUpperCase() + string.slice(1);
    };
    computerChoice.textContent = 'The Machines Chose ' + computerSelectionCapitalized();
    
    playRound(playerSelection, computerSelection);
    updateScore();
    updateChoice();

    if (gameOver()) {
        gameReset()
    }
}

function updateScore() {
    if (roundWin === 'tie') {
        gameResult.textContent = "You tied!";
    } else if (roundWin === 'playerWin') {
        gameResult.textContent = 'You won!';
    } else if (roundWin === 'computerWin') {
        gameResult.textContent = 'You lost :(';
    }

    score1.textContent = `${playerScore}`
    score2.textContent = `${computerScore}`

}

function updateChoice() {
    computerChoice.appendChild(gameResult);
}



computerChoice.classList.add('scoreCardChoice');
gameResult.classList.add('gameResult');
computerChoice.textContent = 'May God Have Mercy On You...'
scoreRow.insertBefore(computerChoice, scoreCard2);