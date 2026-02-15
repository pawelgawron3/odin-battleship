import { renderBoard } from './renderBoard';

const userGrid = document.getElementById('userGrid');

export function handleUserPlacement(e, controller) {
  const cell = e.target;
  if (!cell.classList.contains('cell')) return;

  const [row, col] = cell.dataset.index.split(',').map(Number);

  const placed = controller.placeUserShip(row, col);

  if (placed) {
    renderBoard(controller.user.gameboard, userGrid);

    if (controller.allShipsPlaced()) {
      alert('All ships have been placed!');
    }
  }
}
