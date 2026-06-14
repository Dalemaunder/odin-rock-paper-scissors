// script.js

// Game logic variables
let user_choice = "";
let computer_choice = "";
let play_again = "";

// Score tracking
let humanScore = 0;
let computerScore = 0;


function getHumanChoice() {
    // Loop while the user input isn't valid
    do {
	user_choice = prompt("Rock, Paper, or Scissors?: ").toLowerCase();
    } while (user_choice != "rock" && user_choice != "paper" && user_choice != "scissors")

    return user_choice;
}

function getComputerChoice() {
    // Generate a number from 1 to 3 and assign the computer's choice based on it
    let numeric_choice = Math.floor(Math.random() * 3) + 1;
    switch (numeric_choice) {
	case 1:
	    computer_choice = "rock";
	    break;
	case 2:
	    computer_choice = "paper";
	    break;
	case 3:
	    computer_choice = "scissors";
	    break;
    }

    return computer_choice;
}


function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
	console.log("Tie!")
    } else {
	switch (humanChoice) {
	    case "rock":
		if (computerChoice === "paper") {
		    console.log("Computer wins the round!");
		    computerScore += 1;
		} else {
		    console.log("You win the round!");
		    humanScore += 1;
		}
		break;
	    case "paper":
		if (computerChoice === "scissors") {
		    console.log("Computer wins the round!");
		    computerScore += 1;
		} else {
		    console.log("You win the round!");
		    humanScore += 1;
		}
		break;
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

	user_choice = getHumanChoice();
	console.log("You have chosen: " + user_choice);

	computer_choice = getComputerChoice();
	console.log("Computer has chosen: " + computer_choice);

	playRound(user_choice, computer_choice);

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


// Continuously loop while the 'play_again' variable is "yes"
do {
    playGame();

    // Loop while the user's input isn't "yes" or "no"
    // TODO: Prompt gives button options, implement the "Cancel" button
    do {
	play_again = prompt("Would you like to play again? (yes | no): ").toLowerCase();
    } while (play_again != "yes" && play_again != "no");

} while (play_again === "yes");
