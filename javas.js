let message 
let playerSelection
let computerSelection 

// make two variables to store the comp and player score and set them to zero.
let compScore = 0
let playerScore = 0
let tie 
    
    
    //make a function that defines the computer choice
    function getComputerChoice(){
        let randomN = Math.floor(Math.random()*3)+1;
        // console.log(randomN)
          if (randomN===1){
              return "rock";
          } else if (randomN===2) {
           return "scissors";
          } else {
              return "paper";
          }
      }
//make a function for the player selection, make it case sensitive. make sure that the user puts only paper, rock, scissors. 
function getPlayerSelection(){
    playerSelection = (prompt("what do you choose?")).toLowerCase();
    console.log(playerSelection)
    if(!(playerSelection === "rock" || playerSelection === "scissors" || playerSelection === "paper")) {
        alert("choose one!");
         return getPlayerSelection();
    } else {
        return playerSelection;
    }
}
// make a function of a game round     
function playRound() {
    // prompt user fpr selection and make it case sensitive
   playerSelection =  getPlayerSelection();
    //call the get computer selection function and store it in a variable
    computerSelection = getComputerChoice();
    //make an if statment that states which is the winner of the round
    if ((computerSelection === "paper" && playerSelection === "rock") || (computerSelection === "scissors" && playerSelection === "paper") || (computerSelection === "rock" && playerSelection === "scissors")) {
        compScore++;
        return `computer wins`;

    } else if (computerSelection === playerSelection){
           return
    } else {
        playerScore++
        return `you win`;
    };
    
    }



// make a function that calls playround 5 times and keeps score of the winner/loser
function game(){
    for(let index = 1; index < 6; index++){
        playRound();
    }
    //define which is the winner
    if (playerScore>compScore){
        console.log("you wone!")
    } else if (compScore>playerScore){
        console.log("you've been beet by a computer!")
    } else {
        console.log("its a tie!")
    }
    console.log(compScore,playerScore)
}

game();




