export function renderBoard(gameboard, gridElement) {
  const cells = gridElement.querySelectorAll('.cell');

  cells.forEach((cell) => {
    const [row, col] = cell.dataset.index.split(',').map(Number);

    if (gameboard.board[row][col] !== null) {
      cell.classList.add('user-cell');
    }
  });
}
