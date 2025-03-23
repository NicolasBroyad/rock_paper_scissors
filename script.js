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
    choicesContainer.textContent = `Human choice: ${humanChoice}, Computer choice: ${computerChoice}`;
    if(humanChoice == "Rock" && computerChoice == "Paper"){
        winner = "Computer";
        roundResultsContainer.textContent = "You lose! Paper beats Rock. ";
    } else if(humanChoice == "Rock" && computerChoice == "Scissors"){
        winner = "Human";
        roundResultsContainer.textContent = ("You won! Rock beats Scissors. ");
    } else if(humanChoice == "Paper" && computerChoice == "Rock"){
        winner = "Human";
        roundResultsContainer.textContent = "You won! Paper beats Rock. ";
    } else if(humanChoice == "Paper" && computerChoice == "Scissors") {
        winner = "Computer";
        roundResultsContainer.textContent = "You lose! Scissors beats Paper. ";
    } else if(humanChoice == "Scissors" && computerChoice == "Rock") {
        winner = "Computer";
        roundResultsContainer.textContent = "You lose! Rock beats Scissors. ";
    } else if(humanChoice == "Scissors" && computerChoice == "Paper"){
        winner = "Human";
        roundResultsContainer.textContent = "You won! Scissors beats Paper. ";
    } else {
        roundResultsContainer.textContent = "There was a tie. ";
    }

    if(winner != "No winner") {
        roundResultsContainer.textContent += winner + " wins this round!";
    } else {
        roundResultsContainer.textContent += "No winner this round";
    }

    updateScore(winner);
    if(humanScore >= 5 || computerScore >= 5){
        matchWinner = getMatchWinner();
        gameResultContainer.textContent = `${matchWinner} wins the game! Restart to play again.`;
    }

    return winner;
}

function updateScore(roundWinner) {
    if(roundWinner == "Human"){
        humanScore += 1;
    } else if(roundWinner == "Computer"){
        computerScore += 1;
    }
    scoreContainer.textContent = "Human score: " + humanScore + " // Computer score: " + computerScore;
}

function getMatchWinner() {
    let matchWinner;
    if(humanScore > computerScore){
        matchWinner = "Human";
    } else {
        matchWinner = "Computer";
    }

    return matchWinner;
}

function restartGame() {
    humanScore = 0;
    computerScore = 0;
    scoreContainer.textContent = "Human score: " + humanScore + " // Computer score: " + computerScore;
    gameResultContainer.textContent = "";
    roundResultsContainer.textContent = "";
    choicesContainer.textContent = "";
}

let body = document.querySelector("body");
body.addEventListener("click", function(event){
    if(event.target.textContent === "Restart Game"){
        restartGame();
    } else if(humanScore < 5 && computerScore < 5){
        playRound(getHumanChoice(event), getComputerChoice());
    } else {
        alert("The match has ended. Press `Restart Game` to play again.");
    }
    
});

let choicesContainer = document.querySelector("#choices_container");
let roundResultsContainer = document.querySelector("#round_results_container");
let gameResultContainer = document.querySelector("#game_result_container");
let scoreContainer = document.querySelector("#score_container");


// const humanSelection = getHumanChoice();
// const computerSelection = getHumanChoice();

let humanScore = 0;
let computerScore = 0;
let round = 0;
// playGame();