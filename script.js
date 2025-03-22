// console.log(Math.random());

function getComputerChoice() {
    let randomInt = Math.random();
    let computerChoice = "";

    if(randomInt <= 0.333333) {
        computerChoice = "Rock";
    } else if(randomInt > 0.333333 && randomInt <= 0.666666) {
        computerChoice = "Paper";
    } else if(randomInt > 0.6666666) {
        computerChoice = "Scissors";
    }

    return computerChoice;
}

function getHumanChoice(event) {
    return event.target.textContent;
}

function playRound(humanChoice, computerChoice) {
    let winner = "No winner";
    console.log(`Human choice: ${humanChoice}, Computer choice: ${computerChoice}`);
    if(humanChoice == "Rock" && computerChoice == "Paper"){
        winner = "Computer";
        console.log("You lose! Paper beats Rock");
    } else if(humanChoice == "Rock" && computerChoice == "Scissors"){
        winner = "Human";
        console.log("You won! Rock beats Scissors");
    } else if(humanChoice == "Paper" && computerChoice == "Rock"){
        winner = "Human";
        console.log("You won! Paper beats Rock");
    } else if(humanChoice == "Paper" && computerChoice == "Scissors") {
        winner = "Computer";
        console.log("You lose! Scissors beats Paper");
    } else if(humanChoice == "Scissors" && computerChoice == "Rock") {
        winner = "Computer";
        console.log("You lose! Rock beats Scissors");
    } else if(humanChoice == "Scissors" && computerChoice == "Paper"){
        winner = "Human";
        console.log("You won! Scissors beats Paper");
    } else {
        console.log("There was a tie ");
    }

    if(winner != "No winner") {
        console.log(winner + " wins this round!");
    } else {
        console.log("No winner this round");
    }

    return winner;
}

function playGame() {
    let roundWinner;
    for(i=0; i < 5; i++){
        console.log("Round " + parseInt(i+1) + " out of 5");
        roundWinner = playRound(getHumanChoice(),getComputerChoice());

        if(roundWinner == "Human"){
            humanScore++;
        } else if(roundWinner == "Computer"){
            computerScore++;
        }
        console.log("Human score: " + humanScore + " // Computer score: " + computerScore);
    }

    if(humanScore > computerScore){
        console.log("Human wins the game");
    } else if(computerScore > humanScore){
        console.log("Computer wins the game");
    } else {
        console.log("The match ended with a tie");
    }
}

let body = document.querySelector("body");
body.addEventListener("click", function(event){
    playRound(getHumanChoice(event), getComputerChoice());
});

// const humanSelection = getHumanChoice();
// const computerSelection = getHumanChoice();

let humanScore = 0;
let computerScore = 0;
// playGame();