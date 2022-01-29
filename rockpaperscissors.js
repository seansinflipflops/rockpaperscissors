"use strict";

const prompt = require('readline-sync');

let play;

const rockPaperScissors = (choice1, choice2) => {
  let youWin = false;
  let result = "You lose!"

  if(choice1 === choice2) {
    youWin = null;
  } else if ((choice1==="rock" && choice2==="scissors") ||
    (choice1==="paper" && choice2==="rock") ||
    (choice1==="scissors" && choice2==="paper")
  ) {
    youWin = true;
  }

  if (youWin) {
    result = "You win!"
  } else if (youWin === null){
    result = "It's a draw!"
  }
  
  console.log(result);
};

const computerChoice = () => {
  const computer = Math.random();
  let result = "scissors";

  if(computer>=0&&computer<=0.33){
  	result = "rock";
  } else if(computer>=0.34&&computer<=0.66){
  	result = "paper";
  }

  return result;
}

while(play === true || play === undefined) {
  let userChoice = prompt.keyIn("Rock Paper Scissors! press (r, p, s) ").toLowerCase();

  while (userChoice !== 'rock' && 
    userChoice !== 'paper' &&
    userChoice !== 'scissors' &&
    userChoice !== 'r' &&
    userChoice !== 'p' &&
    userChoice !== 's'
  ) {
    userChoice = prompt.keyIn("Rock Paper Scissors! press (r, p, s) ").toLowerCase();
  }

  if(userChoice === 'r') {
    userChoice = 'rock';
  } else if(userChoice === 'p') {
    userChoice = 'paper';
  } else if(userChoice === 's') {
    userChoice = 'scissors';
  }
  
  const computer = computerChoice();

  console.log("User chose:: ", userChoice)
  console.log("Computer chose:: ", computer)

  rockPaperScissors(userChoice, computer);

  const playAgain = prompt.keyIn('Press (Y) to play again ').toLowerCase();

  if(playAgain === 'y' || playAgain === 'yes') {
    play = true;
  } else {
    play = false;
  }
}

console.log('Bye-bye!')
