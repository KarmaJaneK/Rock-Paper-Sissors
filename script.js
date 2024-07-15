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

 
 let HumanChoice = prompt("Rock, Paper or Scissors?");
 if (HumanChoice.toLowerCase()==="rock"){
   alert("You chose Rock");
 } else if (HumanChoice.toLowerCase()==="paper"){
   alert("You chose Paper");
 } else if (HumanChoice.toLowerCase() === "scissors"){
   alert("You chose Scissors")
 } else {
   alert("Invalid Choice!, check input.")
 }
 console.log(HumanChoice)

 