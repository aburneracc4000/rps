  console.log("hi :)");

  let counter = 0;
  
  // SET rps to 1 out of 100
  //   IF rps is 1 to 33 THEN
  //      DISPLAY Rock
  //   ELSE IF rps is 34 to 66 THEN
  //      DISPLAY Paper
  //   ELSE IF rps is 67 to 100 THEN 
  //   DISPLAY Scissors
  //   END IF
  //   END ELSE IF
  //   END ELSE IF
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

  // GET user input (rock, paper or scissors)
  // SET choice to user input and convert it to lower case
  // IF user inputs rock THEN 
  //    GET you chose rock
  //      ELSE IF user inputs paper THEN
  //        GET you chose paper
  //          ELSE IF user inputs scissors THEN 
  //            GET you chose scissors
  //          END ELSE IF
  //      END ELSE IF 
  // END if
   function getUserInput() {

    let guess = prompt("R, P or S?");

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

   //GET playRound value
   //  REPEAT playRound function UNTIL
   //    userScore or compScore is equal to 3
   //  DISPLAY the winner of the game 
   function playGame() {

      let userScore = 0;

      let compScore = 0;

   // GET humanChoice & compChoice values
   // DETERMINE the winner from humanChoice & compChoice
   //   IF humanChoice wins THEN
   //     DISPLAY winner message
   //     INCREMENT userScore by 1
   //       ELSE humanChoice loses THEN
   //         DISPLAY loser message 
   //         INCREMENT compScore by 1
   //           ELSE the humanChoice value is not rock paper or scissors THEN
   //             DISPLAY invalid choice, try again
   //           END ELSE
   //       END ELSE
   //   END IF
   function playRound(humanChoice, compChoice) {

      if (humanChoice === "rock" && compChoice === "paper") { 
  
        ++compScore;
     
        console.log("they have chosen Paper, you lose!");
     
     }else if (humanChoice === "rock" && compChoice === "scissors") {
  
        ++userScore;
  
        console.log("they have chosen Scissors, you win!");
  
     }else if (humanChoice === "paper" && compChoice === "scissors") {
  
        ++compScore;
  
        console.log("they chose Scissors, you lose!");
  
     }else if (humanChoice === "paper" && compChoice === "rock") {
  
        ++userScore;
  
        console.log("they chose Rock, you win!");
  
     }else if (humanChoice === "scissors" && compChoice === "rock") {
  
        ++compScore;
  
        console.log("they chose Rock, you lose!");
  
     }else if (humanChoice === "scissors" && compChoice === "paper") {
  
        ++userScore;
  
        console.log("they chose Paper, you win!");
  
     }else if (humanChoice === compChoice) {
  
        console.log("its a tie!");
  
     }else if (humanChoice === "invalid") {
  
        console.log("thats not an answer!");
  
     }

     
   
   }

   do {

      playRound(getUserInput(), getComputerChoice());

    } while (userScore < 3 && compScore < 3)
   
     //const userSelection = getUserInput();
  
     //const compSelection = getComputerChoice();

     //return(playRound(userSelection, compSelection));

   if (userScore >= 3) {

      console.log("You have won!")

      return

   }else if (compScore >= 3) {

      console.log("You have lost!")

      return

   }
 
   
   }


   console.log(playGame());

