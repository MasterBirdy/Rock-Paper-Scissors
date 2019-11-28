function computerPlay(){
     let selection = Math.floor(Math.random() * 3);
     switch(selection){
          case 0:
               return 'rock';
               break;
          case 1:
               return 'scissors';
               break;
          case 2:
               return 'paper';
               break;
     }

}

function playSingleRound(playerSelection, computerSelection){
     if (playerSelection === 'rock')
     {
          if (computerSelection === 'rock')
          {
               whoWon = "tie";
          }
          else if (computerSelection === 'scissors')
          {
              whoWins(playerSelection, computerSelection, true);
          }
          else if (computerSelection === 'paper')
          {
               whoWins(playerSelection, computerSelection, false);
          }
     }
     else if (playerSelection === 'scissors')
     {
          if (computerSelection === 'rock')
          {
               whoWins(playerSelection, computerSelection, false);
          }
          else if (computerSelection === 'scissors')
          {
               whoWon = "tie";
          }
          else if (computerSelection === 'paper')
          {
               whoWins(playerSelection, computerSelection, true);
          }
     }
     else if (playerSelection === 'paper')
     {
          if (computerSelection === 'rock')
          {
               whoWins(playerSelection, computerSelection, true);
          }
          else if (computerSelection === 'scissors')
          {
               whoWins(playerSelection, computerSelection, false);
          }
          else if (computerSelection === 'paper')
          {
               whoWon = "tie";
          }
     }
     else
     {
          console.log("Something wrong happened!");
     }
     updateImages(playerSelection, computerSelection)
}

function whoWins(playerSelection, computerSelection, didPlayerWin)
{
     if (didPlayerWin)
     {
          whoWon = "player";
          playerScore++;
     }
     else
     {
          whoWon = "computer";
          computerScore++;
     }
}

function game()
{
     for (i = 0; i < 5; i++) 
     {
          let isValid = false;
          let tempVar = prompt("Please enter rock, paper, or scissors");
          if (tempVar != null)
               tempVar = tempVar.toLowerCase();
          while (!isValid)
          {
               switch (tempVar)
               {
                    case "rock":
                         isValid = true;
                         break;
                    case "scissors":
                         isValid = true;
                         break;
                    case "paper":
                         isValid = true;
                         break;
                    default:
                         tempVar = prompt("Try again! Enter either rock, paper, or scissors!");
                         if (tempVar != null)
                              tempVar = tempVar.toLowerCase();
               }
          }
          playSingleRound(tempVar, computerPlay());
     }
     if (playerScore > computerScore)
     {
          console.log("Player wins! Player beat Computer " + playerScore + " to " + computerScore + "!");
     }
     else if (computerScore > playerScore)
     {
          console.log("Computer wins! Computer beat Player " + computerScore + " to " + playerScore + "!");
     }
     else
     {
          console.log("It's a tie! Score is " + computerScore + " to " + playerScore);
     }
}

function updateImages(playerSelection, computerSelection){
     imageholders[0].setAttribute("src", playerSelection + ".png");
     imageholders[1].setAttribute("src", computerSelection + ".png");
     scores[0].textContent = playerScore;
     scores[1].textContent = computerScore;
     youBox.classList.remove("won", "lost", "tie");
     opponentBox.classList.remove("won", "lost", "tie");
     if(whoWon === "player")
     {
          youBox.classList.add("won");
          opponentBox.classList.add("lost");
     }
     else if (whoWon === "computer")
     {
          youBox.classList.add("lost");
          opponentBox.classList.add("won");
     }
     else if (whoWon === "tie")
     {
          youBox.classList.add("tie");
          opponentBox.classList.add("tie");
     }
}


let playerScore = 0;
let computerScore = 0;
let whoWon = "";

const imageholders = [].slice.call(document.querySelectorAll("img"));
const rockButton = document.getElementById('rockbutton');
const scissorsButton = document.getElementById('scissorsbutton');
const paperButton = document.getElementById('paperbutton');
const youBox = document.getElementById('youBox');
const opponentBox = document.getElementById('opponentBox');
const scores = [].slice.call(document.querySelectorAll("td"));
rockButton.addEventListener("click", function(){
     playSingleRound("rock", computerPlay());
});
scissorsButton.addEventListener("click", function(){
     playSingleRound("scissors", computerPlay());
});
paperButton.addEventListener("click", function(){
     playSingleRound("paper", computerPlay());
});


