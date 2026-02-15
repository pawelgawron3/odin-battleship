import { computerAttack } from './computerAttack.js';
import { updateGameStatus } from './updateGameStatus.js';
import { renderAttacks } from './renderAttacks.js';
import { markSurroundingCells } from './markSurroundingCells.js';
import { Ship } from '../classes/ship.js';

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

  const targetBoard = gameController.computer.gameboard;
  const wasShip = targetBoard.board[row][col] !== null;

  targetBoard.receiveAttack([row, col]);
  renderAttacks(gameController, gridElement, 'computer');

  const hitSquare = gameController.computer.gameboard.board[row][col];
  if (hitSquare instanceof Ship && hitSquare.isSunk()) {
    markSurroundingCells(gameController.computer.gameboard, hitSquare);
    renderAttacks(gameController, gridElement, 'computer');
  }

  if (gameController.computer.gameboard.allShipsSunk()) {
    alert('You won!');
    gameController.gameOver = true;
    updateGameStatus(gameController);
    return;
  }

  if (!wasShip) {
    gameController.switchTurn();
    setTimeout(() => computerAttack(gameController), 1000);
  }
  updateGameStatus(gameController);
}
