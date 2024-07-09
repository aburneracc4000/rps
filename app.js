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