/*                                     Algorithm

1. CREATE a function named computerChoice 
   a) GENERATE a random number  between 1 and 3 .
   b) Assign each number with some value like 1 for Rock , 2 for Paper and 3 for Scissor
   c) Return one of these Rock , Paper or Scissor

2. CREATE a function named userChoice
   a) CREATE a variable named UserInput
   b) Ask the user to enter of these Rock , Paper or Scissor (Case insensitive)
   c) Make the string in this particular format first letter capital others samll like Rock and store it in userInput
   d) CHECK IF userInput is one of these Rock , Paper or Scissor Return that ELSE print invalid input


3. CREATE two counters named userWins and computerWins tob keep track of the winners in differentr rounds , INITIALIZE both with Zero

4. Logic for deciding the winnner
   a) IF both userSelection and computerSelection is Rock print draw round , IF userSelction is Rock and computerSelection 
      is Paper print computer wins the round ELSE user wins the round

   b) IF both userSelection and computerSelection is paper print draw round , IF userSelction is paper and computerSelection 
      is Scissor print computer wins the round ELSE user wins the round

   c) IF both userSelection and computerSelection is Scissor print draw round , IF userSelction is Scissor and computerSelection 
      is Rock print computer wins the round ELSE user wins the round

   d) Increase the userWins by 1 each time user wins , Increase computerWins by 1 each time Computer wins in STEP - 4 a , b , c

5. Create a function named playRound 
   a) Call userChoice() and store it's value in userSelection , Call computerChoice() and store it's value in computerSelection
   b) Implement  STEP 4 within it

6. Create a function named playGame

   a) Call userSelection() first then computerSelection()
   b) Call playRound()
   c) Reapeat STEP -6  a,b for 5 times
   d) After STEP 6 c , compare userWins and computerWins and print the winner (depending upon which one is greator)
      ELSE print Game draw

                                                                      */



let computerChoice = function () {
   let computerInput = Math.floor(Math.random()*3) + 1 ;
   if(computerInput === 1) {
      return "Rock" ;
   }
   else if (computerInput === 2) {
      return "Paper" ;
   }

   else if (computerInput === 3) {
      return "Scissor" ;
   }
}

let userChoice = function () {
   let userInput = prompt("Enter Rock , Paper or Scissor");
   userInput = (userInput.slice(0,1)).toUpperCase() + (userInput.slice(1,userInput.length)).toLowerCase() ;

   if ((userInput === "Rock") || (userInput === "Paper") || (userInput === "Scissor")) {
      return  userInput;
   }

   else {
      return console.log(userInput + " is not a valid input") ;
   } 
}

let userWins = 0 ;
let computerWins = 0 ;

function playRound() {
  
 let computerSelection = computerChoice();
 let userSelction =  userChoice();

   if( userSelction === computerSelection ) {
      console.log("Both choose " + userSelction + " draw round");
   }
   else if (userSelction === "Rock" && computerSelection === "Paper") {
      console.log("Computer wins the round" + " Computer selects " + computerSelection + " and user selects " + userSelction);
      computerWins += 1 ;
   }
   else if (userSelction === "Rock" && computerSelection === "Scissor") {
      console.log("User wins the round" + " Computer selects " + computerSelection + " and user selects " + userSelction) ;
      userWins += 1;
   }
   else if (userSelction === "Paper" && computerSelection === "Rock") {
      console.log("Users wins the round" + " Computer selects " + computerSelection + " and user selects " + userSelction) ;
      userWins += 1;
   }
   else if (userSelction === "Paper" && computerSelection === "Scissor") {
      console.log("Computer wins the round" + " Computer selects " + computerSelection + " and user selects " + userSelction);
      computerWins += 1 ;
   }
   else if (userSelction === "Scissor" && computerSelection === "Rock") {
      console.log("Computer wins the round" + " Computer selects " + computerSelection + " and user selects " + userSelction);
      computerWins += 1;
   }
   else if (userSelction === "Scissor" && computerSelection === "Paper") {
      console.log("Users wins the round" + " Computer selects " + computerSelection + " and user selects " + userSelction) ;
      userWins += 1;
   }
   



}

function playGame() {
   for(let i = 0 ; i < 5 ; i++) {
      playRound();
   }

   if( userWins > computerWins) {
      console.log("User wins the game by winning " + userWins + " rounds");
   }

   else if( userWins < computerWins) {
      console.log("computer wins the game by winning " + computerWins + " rounds");

   }
   else if ( userWins === computerWins) {
      console.log("Math draw both user and computer wins " + userWins + " rounds each");
   }
}

playGame();