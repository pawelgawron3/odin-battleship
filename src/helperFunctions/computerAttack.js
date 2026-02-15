import { renderAttacks } from './renderAttacks';
import { updateGameStatus } from './updateGameStatus';

export function computerAttack(gameController) {
  if (gameController.gameOver) return;

  let row, col;

  do {
    row = Math.floor(Math.random() * 10);
    col = Math.floor(Math.random() * 10);
  } while (
    gameController.user.gameboard.hits.some(([r, c]) => r === row && c === col) ||
    gameController.user.gameboard.misses.some(([r, c]) => r === row && c === col)
  );

  gameController.user.gameboard.receiveAttack([row, col]);
  renderAttacks(gameController, document.getElementById('userGrid'), 'user');

  if (gameController.user.gameboard.allShipsSunk()) {
    alert('You lost! Better luck next time :)');
    gameController.gameOver = true;
    return;
  }

  if (!gameController.user.gameboard.hits.some(([r, c]) => r === row && c === col)) {
    gameController.switchTurn();
  }

  updateGameStatus(gameController);
}
