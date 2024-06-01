function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    let index = Math.floor(Math.random() * 3);
    let choice = choices[index];
    return choice;
}

function getHumanChoice() {
    let userChoice = prompt("Please enter rock, paper, or scissors:");
    console.log(`User choice: ${userChoice}`);
    userChoice = userChoice.toLowerCase();
    
    let robotChoice = getComputerChoice();  // Get robot's choice
    console.log(`Robot chose ${robotChoice}`);  // Log robot's choice
    
    switch(userChoice) {
        case 'rock':
            return 0;
        case 'paper':
            return 1;
        case 'scissors':
            return 2;
        default:
            console.log("Invalid choice! Please enter rock, paper, or scissors.");
            return getHumanChoice();  // Prompt again for valid input
    }
}

function game() {
    let robot = 0;
    let human = 0;

    while (human < 5 && robot < 5) {
        let humanChoice = getHumanChoice();  // Call getHumanChoice() to get user's choice
        let robotChoice = getComputerChoice();

        if (humanChoice === robotChoice) {
            console.log("Tie!"); 
        } else if ((humanChoice - robotChoice + 3) % 3 === 1) {
            robot += 1;
            console.log("Robot wins this round!");
        } else {
            human += 1;
            console.log("Human wins this round!");
        }
    }

    if (human === 5) {
        console.log("Human wins the game!");
    } else {
        console.log("Robot wins the game!");
    }
}

// Start the game
game();
