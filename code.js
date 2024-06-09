document.addEventListener("DOMContentLoaded", () => {
    // Get computer choice
    function getComputerChoice() {
        const choices = ["rock", "paper", "scissors"];
        const index = Math.floor(Math.random() * 3);
        return choices[index];
    }

    // Returns rock, paper, or scissors when the image is clicked
    function getHumanChoice(callback) {
        const rock = document.getElementById("rock");
        const paper = document.getElementById("paper");
        const scissors = document.getElementById("scissors");

        rock.addEventListener("click", () => callback("rock"));
        paper.addEventListener("click", () => callback("paper"));
        scissors.addEventListener("click", () => callback("scissors"));
    }

    // Display robot's choice
    function displayRobotChoice(choice) {
        const container = document.querySelector(".robot");
        container.innerHTML = ''; // Clear previous choice

        let iconClass;
        if (choice === "rock") {
            iconClass = "fa-hand-back-fist";
        } else if (choice === "paper") {
            iconClass = "fa-hand";
        } else if (choice === "scissors") {
            iconClass = "fa-hand-scissors";
        }

        const icon = document.createElement("i");
        icon.classList.add("fa-solid", iconClass);
        container.appendChild(icon);
    }

    function displayHumanChoice(choice) {
        const container = document.querySelector(".human");
        container.innerHTML = ''; // Clear previous choice

        let iconClass;
        if (choice === "rock") {
            iconClass = "fa-hand-back-fist";
        } else if (choice === "paper") {
            iconClass = "fa-hand";
        } else if (choice === "scissors") {
            iconClass = "fa-hand-scissors";
        }

        const icon = document.createElement("i");
        icon.classList.add("fa-solid", iconClass);
        container.appendChild(icon);
    }

    
    // Game function
    function game() {
        let robot = 0;
        let human = 0;

        function handleHumanChoice(choice) {
            // Get robot choice
            const robotChoice = getComputerChoice();

            // Display their choices
            displayHumanChoice(choice);
            displayRobotChoice(robotChoice);
            console.log("Human chose:", choice);
            console.log("Robot chose:", robotChoice);

            // Handle ties and wins
            if (choice === robotChoice) {
                console.log("Tie!");
            } else if (
                (choice === "rock" && robotChoice === "scissors") ||
                (choice === "paper" && robotChoice === "rock") ||
                (choice === "scissors" && robotChoice === "paper")
            ) {
                console.log("Human wins this round!");
                human++;
            } else {
                console.log("Robot wins this round!");
                robot++;
            }

            // Update scores
            document.querySelector(".humanScore").textContent = human;
            document.querySelector(".robotScore").textContent = robot;

            console.log("Human score:", human);
            console.log("Robot score:", robot);

            if(human === 5||robot ===5){
                container = document.querySelector(".results");
                if (human === 5) {
                    container.textContent = "Human wins!";
                } else {
                    container.textContent = "Robot wins!";
                }
                human = 0;
                robot = 0;
            }
        }

        // Start getting human's choice
        getHumanChoice(handleHumanChoice);
    }

    // Start the game
    game();
});
