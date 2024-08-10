// Function to get the computer's choice
function getComputerChoice() {
  const number = Math.floor(Math.random() * 3) + 1; // Generate number between 1 and 3
  // Return corresponding choice based on the number
  if (number === 1) {
      return "Rock";
  } else if (number === 2) {
      return "Paper";
  } else {
      return "Scissors";
  }
}


// Function to play a single round of the game
function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
      return "It's a tie!";
  } else if (
      (humanChoice === "Rock" && computerChoice === "Scissors") ||
      (humanChoice === "Paper" && computerChoice === "Rock") ||
      (humanChoice === "Scissors" && computerChoice === "Paper")
  ) {
      return `You win! ${humanChoice} beats ${computerChoice}.`;
  } else {
      return `You lose! ${computerChoice} beats ${humanChoice}.`;
  }
}
  // Variables to track the scores
let humanScore = 0;
let computerScore = 0;


//function for rock button click
function handleRockClick(){
  const computerChoice = getComputerChoice();
  const result = playRound("Rock", computerChoice);
  updateScores(result);
  updateResults(`You chose Rock. Computer chose ${computerChoice}. ${result}`);
}
// function to handle paper choice
function handlePaperClick(){
  const computerChoice = getComputerChoice();
  const result = playRound("Paper", computerChoice);
  updateScores(result);
  updateResults(`You chose Paper. Computer chose ${computerChoice}. ${result}`);
}

//function to handle Scissors choice
function handleScissorsClick(){
  const computerChoice = getComputerChoice();
  const result = playRound("Scissors", computerChoice);
  updateScores(result);
  updateResults(`You chose Scissors. Computer chose ${computerChoice}. ${result}`);
}

// Function to update the scores based on the result
function updateScores(result) {
  if (result.includes("You win")) {
    humanScore++;
  } else if (result.includes("You lose")) {
    computerScore++;
  }
    // Display current scores
    updateResults(`Current Score - You: ${humanScore}, Computer: ${computerScore}`);

    // Check for winner
    if (humanScore >= 5) {
      updateResults("You are the winner!");
    } else if (computerScore >= 5) {
      updateResults("The computer is the winner!");
    }
  }

const rockButton = document.createElement("button");
rockButton.textContent = "Rock";
rockButton.addEventListener("click", handleRockClick)

const paperButton = document.createElement("button");
paperButton.textContent = "Paper";
paperButton.addEventListener("click", handlePaperClick);

const scissorButton = document.createElement("button");
scissorButton.textContent = "Scissors";
scissorButton.addEventListener("click", handleScissorsClick);

const results = document.createElement("div");
results.id = "results" // Assign an ID for easy access later
document.body.appendChild(results);

document.body.appendChild(rockButton);
document.body.appendChild(paperButton);
document.body.appendChild(scissorButton);

function updateResults(resultText){
  const resultDiv = document.getElementById('results');
  const resultElement = document.createElement ("p");
  resultElement.textContent = resultText;
  resultDiv.appendChild(resultElement);
}


      // Log round result and current score
      updateResults(`Round ${i + 1}: ${result}`);
      updateResults(`Current Score - You: ${humanScore}, Computer: ${computerScore}`);

  // Log final results
  if (humanScore >= 5) {
          updateResults("You are the  winner!");}

  





