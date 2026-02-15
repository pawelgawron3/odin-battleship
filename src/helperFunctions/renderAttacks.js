export function renderAttacks(gameController, gridElement, playerType) {
  const gameboard =
    playerType === 'user' ? gameController.user.gameboard : gameController.computer.gameboard;

  const cells = gridElement.querySelectorAll('.cell');

  cells.forEach((cell) => {
    const [row, col] = cell.dataset.index.split(',').map(Number);

    if (gameboard.hits.some(([r, c]) => r === row && c === col)) {
      cell.classList.add('hit');
      cell.classList.remove('miss');
      cell.classList.remove('user-cell');
    } else if (gameboard.misses.some(([r, c]) => r === row && c === col)) {
      cell.classList.add('miss');
      cell.classList.remove('hit');
    } else {
      cell.classList.remove('hit', 'miss');
    }
  });
}
