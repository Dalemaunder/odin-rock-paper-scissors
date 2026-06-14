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

function playRound() {
    // Loop while the user and computer imput aren't the same
    do {
	user_choice = getHumanChoice();
	console.log("You have chosen: " + user_choice);

	computer_choice = getComputerChoice();
	console.log("Computer has chosen: " + computer_choice);

	if (user_choice === computer_choice) {
	    console.log("Tie! Go again!");
	}

    } while (user_choice === computer_choice);

    // Primary game logic for when there isn't a tie
    switch (user_choice) {
	case "rock":
	    if (computer_choice === "paper") {
		console.log("Computer Wins!");
		computerScore += 1;
	    } else {
		console.log("You Win!");
		humanScore += 1;
	    }
	    break;
	case "paper":
	    if (computer_choice === "scissors") {
		console.log("Computer Wins!");
		computerScore += 1;
	    } else {
		console.log("You Win!");
		humanScore += 1;
	    }
	    break;
	case "scissors":
	    if (computer_choice === "rock") {
		console.log("Computer Wins!");
		computerScore += 1;
	    } else {
		console.log("You Win!");
		humanScore += 1;
	    }
	    break;
    }
}


// Continuously loop while the 'play_again' variable is "yes"
do {
    playRound();


    console.log(" -- Current scores --");
    console.log("Player: " + humanScore);
    console.log("Computer: " + computerScore);
    console.log(""); // Blank line for tidier console output

    // Loop while the user's input isn't "yes" or "no"
    // TODO: Prompt gives button options, implement the "Cancel" button
    do {
	play_again = prompt("Would you like to play again? (yes | no): ").toLowerCase();
    } while (play_again != "yes" && play_again != "no");

} while (play_again === "yes");

