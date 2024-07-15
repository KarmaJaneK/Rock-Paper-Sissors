/*Write the logic to get the computer choice
1 = Rock
2 = Paper
3 = scissors
Random choice
 */
console.log("Hello World")

function getComputerChoice(){
   const number = Math.floor(Math.random() * 3 ) + 1

    if (number == 1) {
      return "rock";
    }  else if (number == 2) {
      return "paper";
     } else {
       return "Scissors";       ;
     }
    
}

console.log("The computer chose " + getComputerChoice())

/* Write the logic to get the human choice
 ask user to choice between rock paper and scissors*/

 
 function getHumanChoice(){
   let getHumanChoice = prompt("Rock, Paper or Scissors?");
 if (getHumanChoice.toLowerCase()==="rock"){
   alert("You chose Rock");
   return "Rock";
 } else if (getHumanChoice.toLowerCase()==="paper"){
   alert("You chose Paper");
   return "Paper";
 } else if (getHumanChoice.toLowerCase() === "scissors"){
   alert("You chose Scissors");
   return "Scissors";
 } else {
   alert("Invalid Choice!, check input.")

 }}
 console.log("You chose " + getHumanChoice())

 /*Declare the players score variables*/
 let humanScore = 0
 let computerScore = 0

 /*Write the logic to play a single round*/
 function playRound(humanChoice, computerChoice){
if (humanChoice === computerChoice){
  return "It's a tie!"
} else if (
humanChoice === "rock" && computerChoice === "scissors" ||
humanChoice === "paper" && computerChoice === "rock" ||
humanChoice === "scissors" && computerChoice === "paper"
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