export function updateGameStatus(gameController) {
  const statusEl = document.querySelector('#gameStatus');
  const pEl = statusEl.querySelector('p');

  if (gameController.gameOver === false) {
    pEl.textContent = gameController.currentTurn === 'user' ? 'Your turn' : "Computer's turn";
  } else {
    pEl.textContent = 'Game ended!';
  }
}
