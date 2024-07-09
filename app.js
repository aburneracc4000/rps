  console.log("hi :)");

  
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

         return "Rock";

       }else if (rps >= 34 && rps <= 66) {
          
         return "paper";

       }else if (rps >= 67 && rps <=100) {

        return "scissors";

       }
    } 

  // GET user input (rock, paper or scissors)
  //   IF user inputs rock THEN 
  //      DISPLAY you chose rock
  //   ELSE IF user inputs paper THEN
  //      DISPLAY you chose paper
  //   ELSE IF user inputs scissors THEN 
  //      DISPLAY you chose scissors
  //   END IF
  //   END ELSE IF 
  //   END ELSE IF
   function getUserInput() {

    let guess = prompt("R, P or S?");

    let choice = guess;

    if (guess === "Rock") {

        return("you have chosen Rock!");

    }else if (guess === "Paper") {

        return("you have chosen Paper!");

    }else if (guess === "Scissors") {

        return("you have chosen Scissors!");

    }else{

        return("thats not an answer LMAO!");

    }
   }
  