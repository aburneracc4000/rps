  console.log("hi :)");

  let counter = 0;
  
  
   function getComputerChoice() {
    let rps = Math.floor(Math.random() * 100) +1;

       if (rps >= 0 && rps <= 33) {

         return "rock";

       }else if (rps >= 34 && rps <= 66) {
          
         return "paper";

       }else if (rps >= 67 && rps <=100) {

        return "scissors";

       }
      }

 
   function getUserInput(userInput) {

    let guess = userInput;

    let choice = guess.toLowerCase();

    if (choice === "rock") {

        return(choice);

    }else if (choice === "paper") {

        return(choice);

    }else if (choice === "scissors") {

        return(choice);

    }else{

        return("invalid");

    }
   }


  


    
   function playGame() {
   
   }

   let userScore = 0;

   let compScore = 0;

   function playRound(humanChoice, compChoice) {

      if (humanChoice === "rock" && compChoice === "paper") { 
  
        ++compScore;

        setScore();
     
        showLossMessage();
     
     }else if (humanChoice === "rock" && compChoice === "scissors") {
  
        ++userScore;

        setScore();
  
        showWinMessage();
  
     }else if (humanChoice === "paper" && compChoice === "scissors") {
  
        ++compScore;

        setScore();
  
        showLossMessage();
  
     }else if (humanChoice === "paper" && compChoice === "rock") {
  
        ++userScore;

        setScore();
  
        showWinMessage();
  
     }else if (humanChoice === "scissors" && compChoice === "rock") {
  
        ++compScore;

        setScore();
  
        showLossMessage();
  
     }else if (humanChoice === "scissors" && compChoice === "paper") {
  
        ++userScore;

        setScore();
  
        showWinMessage();
  
     }else if (humanChoice === compChoice) {
  
      showTieMessage(); 
  
     }

     function showLossMessage() {
      resultMessage.textContent = `They have chose ${compChoice},
   you have lost this round!`;
   container.insertBefore(resultMessage, rockButton);
   }

   

   function showWinMessage() {
      const winMessage = `They have chose ${compChoice},
   you have won this round!`;

      resultMessage.textContent = `${winMessage}`;
      container.insertBefore(resultMessage, rockButton);
   }

   function showTieMessage() {
      const tieMessage = `They have also chose ${compChoice},
      this round is a tie!`;

      resultMessage.textContent = `${tieMessage}`;
      container.insertBefore(resultMessage, rockButton);
   }

   function gameWin() {
      const gameWinMessage = `They have chose ${compChoice},
      you have reached 3 wins and have won the game!`;

      for (let i = 0; i < buttons.length; i++) {
         container.removeChild(buttons[i]);
      };

      resultMessage.textContent = `${gameWinMessage}`;
      container.appendChild(resultMessage);
   }
   
   function gameLose() {
      const gameLoseMessage = `They have chose ${compChoice},
      the opponent has reached 3 wins and has won the game!`;

      for (let i = 0; i < buttons.length; i++) {
         container.removeChild(buttons[i]);
      };

      resultMessage.textContent = `${gameLoseMessage}`;
      container.appendChild(resultMessage);
   }

   if (userScore >= 3) {

      gameWin();

     return;

   }else if (compScore >= 3) {

      gameLose();

      return;

   }
   }

   function setScore() {

      scores.textContent = `Your score: ${userScore}. Opponent score: ${compScore}.`;
      container.insertBefore(scores, resultMessage);
   }

   

   

   
   
   const container = document.querySelector("#container");

   const rules = document.createElement("p");
   rules.textContent = "Rock, paper or scissors? First to three wins!";
   container.appendChild(rules);

   const rockButton = document.createElement("button");
   rockButton.classList.add("rockButton");
   rockButton.textContent = "Rock";
   container.appendChild(rockButton);

   const paperButton = document.createElement("button");
   paperButton.classList.add("paperButton");
   paperButton.textContent = "Paper";
   container.appendChild(paperButton);

   const scissorButton = document.createElement("button");
   scissorButton.classList.add("scissorButton");
   scissorButton.textContent = "Scissors";
   container.appendChild(scissorButton);

   const resultMessage = document.createElement("p");
   resultMessage.textContent = `You havent chose anything yet.`;
   container.insertBefore(resultMessage, rockButton);

   const scores = document.createElement("p");
   scores.textContent = `Your score: ${userScore}. Opponent score: ${compScore}.`;
   container.insertBefore(scores, resultMessage);

   const buttons = document.querySelectorAll("button");

   for (let i = 0; i < buttons.length; i++) {
      buttons[i].setAttribute("class", "highlight");
   }

   buttons.forEach((button) => {

    button.addEventListener("click", () => {

       playRound(getUserInput(button.textContent), getComputerChoice())
    });
});



 

