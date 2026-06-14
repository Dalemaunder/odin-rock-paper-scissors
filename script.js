// script.js

// Game logic variables
let userChoice = "";
let computerChoice = "";
let playAgain = "";

// Score tracking
let humanScore = 0;
let computerScore = 0;


function getHumanChoice() {
    // Loop while the user input isn't valid
    do {
	userChoice = prompt("Rock, Paper, or Scissors?: ").toLowerCase();
    } while (userChoice != "rock" && userChoice != "paper" && userChoice != "scissors")

    return userChoice;
}

function getComputerChoice() {
    // Generate a number from 1 to 3 and assign the computer's choice based on it
    let numericChoice = Math.floor(Math.random() * 3) + 1;
    switch (numericChoice) {
	case 1:
	    computerChoice = "rock";
	    break;
	case 2:
	    computerChoice = "paper";
	    break;
	case 3:
	    computerChoice = "scissors";
	    break;
    }

    return computerChoice;
}


function playRound(humanChoice, computerChoice) {
    // Tie
    if (humanChoice === computerChoice) {
	console.log("Tie!")
    } else {
	switch (humanChoice) {
	    // Paper beats rock
	    case "rock":
		if (computerChoice === "paper") {
		    console.log("Computer wins the round!");
		    computerScore += 1;
		} else {
		    console.log("You win the round!");
		    humanScore += 1;
		}
		break;
	    // Scissors beat paper
	    case "paper":
		if (computerChoice === "scissors") {
		    console.log("Computer wins the round!");
		    computerScore += 1;
		} else {
		    console.log("You win the round!");
		    humanScore += 1;
		}
		break;
	    // Rock beats scissors
	    case "scissors":
		if (computerChoice === "rock") {
		    console.log("Computer wins the round!");
		    computerScore += 1;
		} else {
		    console.log("You win the round!");
		    humanScore += 1;
		}
		break;
	}
    }
}


function playGame() {
    let rounds = 5;

    for (i = 1; i <= rounds; i++) {
	console.log("-- Round " + i + " of " + rounds + " --");

	userChoice = getHumanChoice();
	console.log("You have chosen: " + userChoice);

	computerChoice = getComputerChoice();
	console.log("Computer has chosen: " + computerChoice);

	playRound(userChoice, computerChoice);

	console.log(" -- Current scores --");
	console.log("Player: " + humanScore);
	console.log("Computer: " + computerScore);
	console.log(""); // Blank line for tidier console output
    }

    // Output the result
    if (humanScore === computerScore) {
	console.log("The game is a tie at " + humanScore + "-" + computerScore + "! What're the odds?");
    } else if (humanScore > computerScore) {
	console.log("The player wins " + humanScore + " to "  + computerScore + ". Congratulations!");
    } else {
	console.log("The computer wins " + computerScore + " to "  + humanScore + ". Better luck next time!");
    }
}


// Continuously loop while the 'playAgain' variable is "yes"
do {
    playGame();

    // Loop while the user's input isn't "yes" or "no"
    do {
	playAgain = prompt("Would you like to play again? (yes | no): ").toLowerCase();
    } while (playAgain != "yes" && playAgain != "no");

} while (playAgain === "yes");
