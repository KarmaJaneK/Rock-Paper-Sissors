/*Step 2: Write the logic to get the computer choice
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
        return "Scissors";
     }
    
}

console.log(getComputerChoice())