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
}
// function to handle paper choice
function handlePaperClick(){
  const computerChoice = getComputerChoice();
  const result = playRound("Paper", computerChoice);
}

//function to handle Scissors choice
function handleScissorsClick(){
  const computerChoice = getComputerChoice();
  const result = playRound("Scissors", computerChoice);
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



}

      // Log round result and current score
      console.log(`Round ${i + 1}: ${result}`);
      console.log(`Current Score - You: ${humanScore}, Computer: ${computerScore}`);
  }

  // Log final results
  if (humanScore > computerScore) {
      console.log("You are the overall winner!");
  } else if (humanScore < computerScore) {
      console.log("The computer is the overall winner!");
  } else {
      console.log("The game is a tie!");
  }
}

playGame();
