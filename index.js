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
   a) IF both userSelection and computerSelection is Rock print draw round , IF userSelection is Rock and computerSelection 
      is Paper print computer wins the round ELSE user wins the round

   b) IF both userSelection and computerSelection is paper print draw round , IF userSelection is paper and computerSelection 
      is Scissor print computer wins the round ELSE user wins the round

   c) IF both userSelection and computerSelection is Scissor print draw round , IF userSelection is Scissor and computerSelection 
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

// Rework start
const container = document.querySelector("#container") ;

const result = document.querySelector("#result") ;



container.addEventListener('click' , (e) => {
  let  target = e.target ; 
  
  let userSelection = target.id.charAt(0).toUpperCase() + target.id.slice(1).toLowerCase();
        playRound(userSelection);

} )




let userWins = 0 ;
let computerWins = 0 ;

function playRound(userSelection) {
  
 let computerSelection = computerChoice();
 

   if( userSelection === computerSelection ) {
      result.textContent =("Both choose " + userSelection + " draw round");
   }
   else if (userSelection === "Rock" && computerSelection === "Paper") {
      result.textContent =("Computer wins the round" + " Computer selects " + computerSelection + " and user selects " + userSelection);
      computerWins += 1 ;
   }
   else if (userSelection === "Rock" && computerSelection === "Scissor") {
      result.textContent =("User wins the round" + " Computer selects " + computerSelection + " and user selects " + userSelection) ;
      userWins += 1;
   }
   else if (userSelection === "Paper" && computerSelection === "Rock") {
      result.textContent =("Users wins the round" + " Computer selects " + computerSelection + " and user selects " + userSelection) ;
      userWins += 1;
   }
   else if (userSelection === "Paper" && computerSelection === "Scissor") {
      result.textContent =("Computer wins the round" + " Computer selects " + computerSelection + " and user selects " + userSelection);
      computerWins += 1 ;
   }
   else if (userSelection === "Scissor" && computerSelection === "Rock") {
      result.textContent =("Computer wins the round" + " Computer selects " + computerSelection + " and user selects " + userSelection);
      computerWins += 1;
   }
   else if (userSelection === "Scissor" && computerSelection === "Paper") {
      result.textContent =("Users wins the round" + " Computer selects " + computerSelection + " and user selects " + userSelection) ;
      userWins += 1;
   }
   

}





// function playGame() {
//    for(let i = 0 ; i < 5 ; i++) {
//       playRound();
//    }

//    if( userWins > computerWins) {
//        alert("User wins the game by winning " + userWins + " rounds");
//    }

//    else if( userWins < computerWins) {
//       alert("computer wins the game by winning " + computerWins + " rounds");

//    }
//    else if ( userWins === computerWins) {
//       alert("Math draw both user and computer wins " + userWins + " rounds each");
//    }
// }

// playGame();