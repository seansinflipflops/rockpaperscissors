var prompt = require('readline-sync');
var userChoice = prompt.question(`Rock Paper Scissors? `);

//Computer
var computerChoice = Math.random();
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

//RoShamBo!
var compare = function(choice1, choice2){
  var result;
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
compare(userChoice.toLowerCase(), computer);

module.exports = {
	compare: compare
}
