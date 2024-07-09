  console.log("hi :)");

  

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