var userChoice = prompt("Rock, Paper or Scissors?")
var computerChoice = Math.random() //Math.random() selects a random number from 0 to 1

if(computerChoice>=0&&computerChoice<=0.33){
	console.log("rock");
} else if(computerChoice>=0.34&&computerChoice<=0.66){
	console.log("paper");
}else{
	console.log("scissors");
};

console.log("Computer: " + computerChoice);

var compare = function(choice1,choice2){
	if(choice1===choice2){
		return "Tie!";
		//if i tie, how do i make the game run again? 
	} else if (choice1==="rock"){
		if(choice2==="scissors"){
			return "Rock wins!";
		} else {
			return "Paper wins!";
		}
	} else if(choice1==="paper"){
		if(choice2==="rock"){
			return "Paper wins!";
		} else{
			return "Scissors wins!";
		}
	} else if(choice1==="scissors"){
		if(choice2==="paper"){
			return "Scissors wins!";
		} else{
			return "Rock wins!";
		}
	}
};

compare(userChoice,computerChoice);

