
function game() {

    let computerScore = 0;
    let playerScore = 0;

    for (let i = 0; i < 5; i++) {

        const computerSelection = getComputerChoice()
        const playerSelection = prompt('Please enter a choice of rock, paper, or scissors.').toLowerCase();

        function getComputerChoice() {
            let computerChoice = ['Rock', 'Paper', 'Scissors']
            let random = computerChoice[Math.floor(Math.random() * computerChoice.length)]
            return random
        }

        function playRound(playerSelection, computerSelection) {
        
            if (playerSelection == 'rock' && computerSelection == 'Rock') {
                return 'Tie! Rock VS Rock';
            } else if (playerSelection == 'paper' && computerSelection == 'Paper') {
                return 'Tie! Paper VS Paper';
            } else if (playerSelection == 'scissors' && computerSelection == 'Scissors') {
                return 'Tie! Scissors VS Scissors';
        
            } else if (playerSelection == 'rock' && computerSelection == 'Scissors') {
                return 'You Win! Rock beats scissors.';
            } else if (playerSelection == 'paper' && computerSelection == 'Rock') {
                return 'You Win! Paper beats rock';
            } else if (playerSelection == 'scissors' && computerSelection == 'Paper') {
                return 'You Win! Scissors beat paper';
        
            } else if (playerSelection == 'scissors' && computerSelection == 'Rock') {
                return 'You Lose! Rock beats scissors';
            } else if (playerSelection == 'paper' && computerSelection == 'Scissors') {
                return 'You Lose! Scissors beats paper';
            } else if (playerSelection == 'rock' && computerSelection == 'Paper') {
                return 'You Lose! Paper beats rock';
            }   
        
        }

        switch(true) {
            case (playerSelection == 'rock' && computerSelection == 'Paper'):
            case (playerSelection == 'paper' && computerSelection == 'Scissors'):
            case (playerSelection == 'scissors' && computerSelection == 'Rock'):
                ++computerScore 
                break;
            case (playerSelection == 'rock' && computerSelection == 'Scissors'):
            case (playerSelection == 'paper' && computerSelection == 'Rock'):
            case (playerSelection == 'scissors' && computerSelection == 'Paper'):
                ++playerScore 
                break;
  
        }
        
        console.log(playRound(playerSelection, computerSelection));
        console.log(playerScore, computerScore);
    }


    if (playerScore > computerScore) {
        console.log(`Your total score is ${playerScore}, and the computer's score is ${computerScore}, therefore you have won the game!`);
    } else if (playerScore < computerScore) {
        console.log(`Your total score is ${playerScore}, and the computer's score is ${computerScore}, therefore you have lost the game!`);
    } else {
        console.log(`Your total score is ${playerScore}, and the computer's score is ${computerScore}, therefore the game is tied!`);
    }
    
}

game()







/* OLD CODE

function getComputerChoice() {
    let computerChoice = ['Rock', 'Paper', 'Scissors']
    let random = computerChoice[Math.floor(Math.random() * computerChoice.length)]
    return random
}


let playerSelection = 'paper'

// prompt('Please enter a choice of rock, paper, or scissors.').toLowerCase();

let computerSelection = getComputerChoice();

let playerScore = 0;

let computerScore = 0;

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
            return ['You Lose! Paper beats Rock', ++computerScore]
            break;               
        case (playerSelection == 'rock' && computerSelection == 'Scissors'):
            return ['You Win! Rock beats Scissors', ++playerScore]
            break;
        case (playerSelection == 'paper' && computerSelection == 'Rock'):
            return ['You Win! Paper beats Rock', ++playerScore]
            break;       
        case (playerSelection == 'paper' && computerSelection == 'Scissors'):
            return ['You Lose! Scissors beats Paper', ++computerScore]
            break;
        case (playerSelection == 'scissors' && computerSelection == 'Rock'):
            return ['You Lose! Rock beats Scissors', ++computerScore]
            break;            
        case (playerSelection == 'scissors' && computerSelection == 'Paper'):
            return ['You Win! Scissors beats Paper', ++playerScore]
            break;      
    }

}

console.log(playRound(playerSelection, computerSelection))




// switch(true) {
//     case (playerSelection == 'rock' && computerSelection == 'Paper'):
//     case (playerSelection == 'paper' && computerSelection == 'Scissors'):
//     case (playerSelection == 'scissors' && computerSelection == 'Rock'):
//         computerScore++
//         break;
//     case (playerSelection == 'rock' && computerSelection == 'Scissors'):
//     case (playerSelection == 'paper' && computerSelection == 'Rock'):
//     case (playerSelection == 'scissors' && computerSelection == 'Paper'):
//         playerScore++
//         break;
    

// }


function game() {
    for (let i = 0; i < 5; i++) {
        console.log(playRound(playerSelection, computerSelection))
    }

    switch(true) {
        case (playerSelection == 'rock' && computerSelection == 'Paper'):
        case (playerSelection == 'paper' && computerSelection == 'Scissors'):
        case (playerSelection == 'scissors' && computerSelection == 'Rock'):
            computerScore++
            break;
        case (playerSelection == 'rock' && computerSelection == 'Scissors'):
        case (playerSelection == 'paper' && computerSelection == 'Rock'):
        case (playerSelection == 'scissors' && computerSelection == 'Paper'):
            playerScore++
            break;
    
    }

}

if (playerScore > computerScore) {
    console.log(playerScore && computerScore && 'you won the game!')
} else {
    console.group(playerScore && computerScore && 'computer wins the game!')
}

    
    



// }




*/