import { renderAttacks } from './renderAttacks';
import { updateGameStatus } from './updateGameStatus';
import { Ship } from '../classes/ship.js';
import { markSurroundingCells } from './markSurroundingCells.js';

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

  const targetBoard = gameController.user.gameboard;

  const wasShip = targetBoard.board[row][col] !== null;

  targetBoard.receiveAttack([row, col]);
  renderAttacks(gameController, document.getElementById('userGrid'), 'user');

  const hitSquare = gameController.user.gameboard.board[row][col];
  if (hitSquare instanceof Ship && hitSquare.isSunk()) {
    markSurroundingCells(gameController.user.gameboard, hitSquare);
    renderAttacks(gameController, document.getElementById('userGrid'), 'user');
  }

  if (gameController.user.gameboard.allShipsSunk()) {
    alert('You lost! Better luck next time :)');
    gameController.gameOver = true;
    return;
  }

  if (!wasShip) {
    gameController.switchTurn();
  } else {
    setTimeout(() => computerAttack(gameController), 1000);
    return;
  }

  updateGameStatus(gameController);
}
