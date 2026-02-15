import { computerAttack } from './computerAttack.js';
import { updateGameStatus } from './updateGameStatus.js';
import { renderAttacks } from './renderAttacks.js';

export function handlePlayerAttack(e, gameController, gridElement) {
  if (gameController.gameOver || gameController.currentTurn !== 'user') return;

  const cell = e.target;
  if (!cell.classList.contains('cell')) return;

  const [row, col] = cell.dataset.index.split(',').map(Number);

  if (
    gameController.computer.gameboard.hits.some(([r, c]) => r === row && c === col) ||
    gameController.computer.gameboard.misses.some(([r, c]) => r === row && c === col)
  )
    return;

  gameController.computer.gameboard.receiveAttack([row, col]);
  renderAttacks(gameController, gridElement, 'computer');

  if (gameController.computer.gameboard.allShipsSunk()) {
    alert('You won!!');
    gameController.gameOver = true;
    return;
  }

  if (!gameController.computer.gameboard.hits.some(([r, c]) => r === row && c === col)) {
    gameController.switchTurn();
    setTimeout(() => computerAttack(gameController), 1000);
  }
  updateGameStatus(gameController);
}
