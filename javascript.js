



function getComputerChoice() {
    let computerChoice = ['Rock', 'Paper', 'Scissors']
    let random = computerChoice[Math.floor(Math.random() * computerChoice.length)]
    return random

}

console.log(getComputerChoice())