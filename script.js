// script.js
//
// CREATE user_choice variable
let user_choice = ""
// CREATE computer_choice
let computer_choice = ""
// CREATE play_again
let play_again = ""

// DO
do {
//  DO
    do {
//   PROMPT the user for their move and STORE it in user_choice
//   CONFIRM that the user's input is either "rock", "paper", or "scissors", case insensitive
	do {
	    user_choice = prompt("Rock, Paper, or Scissors?: ");
	} while (user_choice != "rock" && user_choice != "paper" && user_choice != "scissors")

//   GENERATE the computer's move and STORE it in computer_choice
	let numeric_choice = Math.floor(Math.random() * 3) + 1;
	switch (numeric_choice) {
	    case 1:
		computer_choice = "rock"
		break;
	    case 2:
		computer_choice = "paper"
		break;
	    case 3:
		computer_choice = "scissors"
		break;
	}

//   IF user_choice and computer_choice are the same, OUTPUT "Tie, go again!"
	if (user_choice === computer_choice) {
	    console.log("Tie! Go again!")
	}

//  WHILE user_choice is the same as computer_choice
    } while (user_choice === computer_choice)
//
//  CASE user_choice:
//  "rock":
//   IF computer_choice is "paper", OUTPUT "Computer Wins!" ELSE OUTPUT "You Win!"
//  "paper":
//   IF computer_choice is "scissors", OUTPUT "Computer Wins!" ELSE OUTPUT "You Win!"
//  "scissors":
//   IF computer_choice is "rock", OUTPUT "Computer Wins!" ELSE OUTPUT "You Win!"
    switch (user_choice) {
	case "rock":
	    (computer_choice === "paper") ? console.log("Computer Wins!") : console.log("You Win!")
	    break;
	case "paper":
	    (computer_choice === "scissors") ? console.log("Computer Wins!") : console.log("You Win!")
	    break;
	case "scissors":
	    (computer_choice === "rock") ? console.log("Computer Wins!") : console.log("You Win!")
	    break;
    }
//
//  
//  PROMPT the user if they'd like to play again and STORE it in play_again
    do {
	play_again = prompt("Would you like to play again? (yes | no): ");
    } while (play_again != "yes" && play_again != "no");
//  CONFIRM that the user's choice is either "yes" or "no"

// WHILE play_again is "yes"
} while (play_again === "yes");

