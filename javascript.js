function getComputerChoice() {
    let computerChoice = ['Rock', 'Paper', 'Scissors']
    let random = computerChoice[Math.floor(Math.random() * computerChoice.length)]
    return random
}


let playerSelection =  prompt('Please enter a choice of rock, paper, or scissors.').toLowerCase();

let computerSelection = getComputerChoice();

function playRound(playerSelection, computerSelection) {

    switch(true) {
        case (playerSelection == 'rock' && computerSelection == 'Rock'):
            return 'Tie! Rock VS Rock'
            break;
        case (playerSelection == 'scissors' && computerSelection == 'Scissors'):
            return 'Tie! Scissors VS Scissors'
            break;            
        case (playerSelection == 'paper' && computerSelection == 'Paper'):
            return 'Tie! Paper VS Paper'
            break;
        case (playerSelection == 'rock' && computerSelection == 'Paper'):
            return 'You Lose! Paper beats Rock'
            break;               
        case (playerSelection == 'rock' && computerSelection == 'Scissors'):
            return 'You Win! Rock beats Scissors'
            break;
        case (playerSelection == 'paper' && computerSelection == 'Rock'):
            return 'You Win! Paper beats Rock'
            break;       
        case (playerSelection == 'paper' && computerSelection == 'Scissors'):
            return 'You Lose! Scissors beats Paper'
            break;
        case (playerSelection == 'scissors' && computerSelection == 'Rock'):
            return 'You Lose! Rock beats Scissors'
            break;            
        case (playerSelection == 'scissors' && computerSelection == 'Paper'):
            return 'You Win! Scissors beats Paper'
            break;      
    }

}

console.log(playRound(playerSelection, computerSelection))

function game() {
    

}



