/*Write the logic to get the computer choice
1 = Rock
2 = Paper
3 = scissors
Random choice
 */

function getComputerChoice(){
   const number = Math.floor(Math.random() * 3 ) + 1

    if (number == 1) {
      return "Rock";
    }  else if (number == 2) {
      return "Paper";
     } else {
       return "Scissors";       ;
     }
    
}

console.log("The computer chose " + getComputerChoice())

/* Write the logic to get the human choice
 ask user to choice between rock paper and scissors*/

 
 function getHumanChoice(){
   const humanChoice = prompt("Rock, Paper or Scissors?");
   if (humanChoice === null){
      alert("You canceled the game.")
      return null;
   } else if (humanChoice.toLowerCase() ==="rock"){
   alert("You chose Rock");
   return "Rock";
 } else if (humanChoice.toLowerCase() ==="paper"){
   alert("You chose Paper");
   return "Paper";
 } else if (humanChoice.toLowerCase() === "scissors"){
   alert("You chose Scissors");
   return "Scissors";
 } else {
   alert("Invalid Choice!, check input.")
   return getHumanChoice();

 } 
}
console.log("You chose " + getHumanChoice())
 
 /*Write the logic to play the entire game
 5 rounds*/
 function playGame(){
 /*Declare the players score variables*/
 let humanScore = 0
 let computerScore = 0

 for (let i = 0; i < 5; i++){
   const humanChoice = getHumanChoice();
   const computerChoice = getComputerChoice();
   const result = playRound(humanChoice,computerChoice);
 }
 if (result.startsWith("You win")) {
   humanScore++;
} else if (result.startsWith("You lose")) {
   computerScore++;
}
console.log(`Round ${i + 1}: ${result}`);
console.log(`Current Score - You: ${humanScore}, Computer: ${computerScore}`);
 }

if (humanScore > computerScore) {
   console.log("You are the overall winner!");
} else if (humanScore < computerScore) {
   console.log("The computer is the overall winner!");
} else {
   console.log("The game is a tie!");
}

/*Write the logic to play a single round*/
function playRound(humanChoice, computerChoice){
   if (humanChoice.toLowerCase === computerChoice.toLowerCase){
     return "It's a tie!"
   } else if (
   humanChoice.toLowerCase() === "rock" && computerChoice.toLowerCase() === "scissors" ||
   humanChoice.toLowerCase() === "paper" && computerChoice.toLowerCase() === "rock" ||
   humanChoice.toLowerCase() === "scissors" && computerChoice.toLowerCase() === "paper"
   ){
      humanScore++;
      return "You win" + humanChoice + "beats" + computerChoice ;
   }else {
      computerScore++;
      return "You Lose " + computerChoice + " beats " + humanChoice;
   }
   }
   
    
   
    
    
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    console.log(playRound(humanSelection, computerSelection));
 }