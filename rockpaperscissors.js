"use strict";

const prompt = require('readline-sync');

let play;

while(play === true || play === undefined) {
  let userChoice = prompt.question(`Rock Paper Scissors? `).toLowerCase();

  while (userChoice !== 'rock' && userChoice !== 'paper' && userChoice !== 'scissors' && userChoice !== 'r' && userChoice !== 'p' && userChoice !== 's') {
    userChoice = prompt.question(`Rock Paper Scissors? `).toLowerCase()
  }

  if(userChoice === 'r') {
    userChoice = 'rock';
  } else if(userChoice === 'p') {
    userChoice = 'paper';
  } else if(userChoice === 's') {
    userChoice = 'scissors';
  }

  let computerChoice = Math.random();
  let computer;
  if(computerChoice>=0&&computerChoice<=0.33){
  	computer = "rock";
  } else if(computerChoice>=0.34&&computerChoice<=0.66){
  	computer = "paper";
  }else{
  	computer = "scissors";
  };

  console.log("User chose:: ", userChoice)
  console.log("Computer chose:: ", computer)

  //RoShamBo!
  const compare = (choice1, choice2) => {
    let result;
  	if(choice1 === choice2){
  		result = "It's a tie!";
  	} else if (choice1==="rock"){
  		if(choice2==="scissors"){
  			result = "You win!";
  		} else {
  			result = "Computer wins!";
  		}
  	} else if(choice1==="paper"){
  		if(choice2==="rock"){
  			result = "You win!";
  		} else{
  			result = "Computer wins!";
  		}
  	} else if(choice1==="scissors"){
  		if(choice2==="paper"){
  			result = "You win!";
  		} else{
  			result = "Computer wins!";
  		}
  	}
    console.log(result);
    return result;
  };

  //RoShamBo go!
  compare(userChoice, computer);
  let playAgain = prompt.question('Play again? y/n ');

  if(playAgain === 'y') {
    play = true;
  } else if(playAgain === 'n'){
    play = false;
  }
}

console.log('Bye-bye!')
