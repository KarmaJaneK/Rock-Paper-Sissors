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
        return "The computer chose rock";
    }  else if (number == 2) {
        return "The computer chose paper";
     } else {
        return "The computer chose scissors";
     }
    
}

console.log(getComputerChoice())

/* Write the logic to get the human choice
 ask user to choice between rock paper and scissors*/

 
 let getHumanChoice = prompt("Rock, Paper or Scissors?");
 if (HumanChoice.toLowerCase()==="rock"){
   alert("You chose Rock");
 } else if (getHumanChoice.toLowerCase()==="paper"){
   alert("You chose Paper");
 } else if (getHumanChoice.toLowerCase() === "scissors"){
   alert("You chose Scissors")
 } else {
   alert("Invalid Choice!, check input.")
 }
 console.log(getHumanChoice)

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
   return "You Lose" + computerChoice + "beats" + "HumanChoice";
}

}
 
 const humanSelection = getHumanChoice();
 const computerSelection = getComputerChoice();

 playRound(humanSelection, computerSelection);