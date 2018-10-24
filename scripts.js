function computerPlay() {
    let choice = options[Math.floor(Math.random() * options.length)];
    return choice;
}

function playerInput(e){
    let playerInput = e.target.textContent;
    if(playerInput != "rock" && playerInput != "paper" && playerInput != "scrissors") return;

    decideTheWinner(playerInput,computerPlay());
}


function displayPlayerChoices() {
    let elements = document.querySelectorAll(".choices");

    if (elements.length === 0) {

        for(let i = 0; i < 3; i++){
           let element = document.createElement("button");
            element.className = "choices";
            element.textContent = options[i];
            element.addEventListener("click",playerInput);
            container.appendChild(element);
        }

    } else {

        for(let i = 0; i < elements.length; i++){
            elements[i].remove();
        }

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
    displayPlayerChoices(); 
}



const gameButton = document.querySelector("#game");
gameButton.addEventListener("click",game);

const container = document.querySelector(".container");

const options = ["rock", "paper", "scrissors"];

