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

// Function to get the human's choice
function getHumanChoice() {
  const humanChoice = prompt("Rock, Paper or Scissors?");
  if (humanChoice === null) {
      alert("You canceled the game.");
      return null;
  }
  
  const choice = humanChoice.toLowerCase();
  if (choice === "rock" || choice === "paper" || choice === "scissors") {
      alert(`You chose ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1).toLowerCase()}`);
      return humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1).toLowerCase();
  } else {
      alert("Invalid Choice! Please enter Rock, Paper, or Scissors.");
      return getHumanChoice(); // Recursive call to prompt the user again
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
//function for rock button click
function handleRockClick(){
  const computerChoice = getComputerChoice();
  const result = playRound("Rock", computerChoice);
  updateResults(`You chose Rock. Computer chose ${computerChoice}. ${result}`);
}
// function to handle paper choice
function handlePaperClick(){
  const computerChoice = getComputerChoice();
  const result = playRound("Paper", computerChoice);
  updateResults(`You chose Paper. Computer chose ${computerChoice}. ${result}`);
}

//function to handle Scissors choice
function handleScissorsClick(){
  const computerChoice = getComputerChoice();
  const result = playRound("Scissors", computerChoice);
  updateResults(`You chose Scissors. Computer chose ${computerChoice}. ${result}`);
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
  if (humanScore > computerScore) {
    updateResults("You are the overall winner!");
  } else if (humanScore < computerScore) {
    updateResults("The computer is the overall winner!");
  } else {
    updateResults("The game is a tie!");
  }




playGame();
