const statusDisplay = document.querySelector('.status');
let gameActive = true;
let currentPlayer = "X";
// de speelveld
let gameState = ["", "", "", "", "", "", "", "", ""];
const winningMessage = () => `Speler ${currentPlayer} Heeft gewonnen! <a href="level2.html">Ga naar Level 2</a>`;
const drawMessage = () => `Het spel heeft is gelijkgespeeld!`;
const currentPlayerTurn = () => `het is ${currentPlayer}'s beurt`;

// hier wordt de result welke cell is gespeeld playerchange en welke cell geclicked is
statusDisplay.innerHTML = currentPlayerTurn();
function cellPlayed() {

}
function playerChange() {

}
function resultValidation() {

}
function cellClick() {

}
function restartGame() {

}

// query for position is printed and when you click on restart button
document.querySelectorAll('.position').forEach(position => position.addEventListener('click', cellClick));
document.querySelector('.restart').addEventListener('click', restartGame);

// which cell are you pressing
function cellClick(clickedCellEvent) {
    const clickedCell = clickedCellEvent.target;
    const clickedCellIndex = parseInt(
        clickedCell.getAttribute('data-cell-index')
    );
    if (gameState[clickedCellIndex] !== "" || !gameActive) {
        return;
    }
    cellPlayed(clickedCell, clickedCellIndex);
    resultValidation();
}

// which cell you pressed
function cellPlayed(clickedCell, clickedCellIndex) {
    gameState[clickedCellIndex] = currentPlayer;
    clickedCell.innerHTML = currentPlayer;
}

// the win combinations
const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

// whether you won the round or not
function resultValidation() {
    let roundWon = false;
    for (let i = 0; i <= 7; i++) {
        const winCondition = winningConditions[i];
        let a = gameState[winCondition[0]];
        let b = gameState[winCondition[1]];
        let c = gameState[winCondition[2]];
        if (a === '' || b === '' || c === '') {
            continue;
        }
        if (a === b && b === c) {
            roundWon = true;
            break
        }
    }
    if (roundWon) {
        statusDisplay.innerHTML = winningMessage();
        gameActive = false;
        return;
    }
    playerChange();
}
// which player is playing
function playerChange() {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    statusDisplay.innerHTML = currentPlayerTurn();
}

// to restart the game
function restartGame() {
    gameActive = true;
    currentPlayer = "X";
    gameState = ["", "", "", "", "", "", "", "", ""];
    statusDisplay.innerHTML = currentPlayerTurn();
    document.querySelectorAll('.position')
        .forEach(position => position.innerHTML = "");
}
