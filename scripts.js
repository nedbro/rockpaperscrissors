function computerPlay() {
    let choice = options[Math.floor(Math.random() * options.length)];
    return choice;
}

function showPlayerChoices() {

    for(let i = 0; i < 3; i++){
        let element = document.createElement("button");
        element.className = "choices";
        element.textContent = options[i];
        container.appendChild(element);
    }
}


function decideTheWinner(player, computer) {
    if (player == computer) {

        win(player, computer, "draw")

    } else if (player == "rock") {

        if (computer == "scrissors") {
            win(player, computer, "player");
        } else {
            win(player, computer, "computer");
        }

    } else if (player == "scrissors") {

        if (computer == "paper") {
            win(player, computer, "player");
        } else {
            win(player, computer, "computer");
        }

    } else if (player == "paper") {

        if (computer == "rock") {
            win(player, computer, "player");
        } else {
            win(player, computer, "computer");
        }
    }

}

function game() {
    gameButton.style.display = "none";

    let computerChoice = computerPlay();
    showPlayerChoices();
}

const gameButton = document.querySelector("#game");
gameButton.addEventListener("click",game);

const container = document.querySelector(".container");
const options = ["rock", "paper", "scrissors"];
