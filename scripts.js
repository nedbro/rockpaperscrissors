function computerPlay() {
    let options = ["rock", "paper", "scrissors"];
    let choice = options[Math.floor(Math.random() * options.length)];
    return choice;
}

function playerInput() {
    let playerChoice;

    while (playerChoice != "paper" && playerChoice != "rock" && playerChoice != "scrissors") {
        playerChoice = prompt("Welcome to Rock-Paper-Scrissors! \n What do you choose? Rock - Paper or Scrissors?").toLowerCase();
    }

    return playerChoice;
}

function win(player, computer, winner) {
    if (winner == "draw") {
        alert(player.toUpperCase() + " VS " + computer.toUpperCase() + " DRAW! ");
    } else {
        alert(player.toUpperCase() + " VS " + computer.toUpperCase() + " THE " + winner.toUpperCase() + " WON! ");
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
    let playerChoice = playerInput();
    let computerChoice = computerPlay();

    decideTheWinner(playerChoice, computerChoice);
    game();
}

window.onLoad(game());