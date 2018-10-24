function computerPlay() {
    let options = ["rock", "paper", "scrissors"];
    let choice = options[Math.floor(Math.random() * options.length)];
    return choice;
}

function playerInput() {
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
}

window.onLoad(game());