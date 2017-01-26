var prompt = require('readline-sync');

var userChoice = prompt.question(`Rock Paper Scissors?`);
var computerChoice = Math.random(); //Math.random() selects a random number from 0 to 1
var computer;
if(computerChoice>=0&&computerChoice<=0.33){
	computer = "rock";
} else if(computerChoice>=0.34&&computerChoice<=0.66){
	computer = "paper";
}else{
	computer = "scissors";
};

console.log("User chose:: ", userChoice)
console.log("Computer chose:: ", computer)

var compare = function(choice1, choice2){
  var result;
	if(choice1 === choice2){
		result = "Tie!";
		//if i tie, how do i make the game run again?
	} else if (choice1==="rock"){
		if(choice2==="scissors"){
			result = "User wins!";
		} else {
			result = "Computer wins!";
		}
	} else if(choice1==="paper"){
		if(choice2==="rock"){
			result = "User wins!";
		} else{
			result = "Computer wins!";
		}
	} else if(choice1==="scissors"){
		if(choice2==="paper"){
			result = "User wins!";
		} else{
			result = "Computer wins!";
		}
	}
  console.log(result);
  return result;
};

compare(userChoice, computer);
