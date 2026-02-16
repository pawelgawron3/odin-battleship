export function getTargetAdjacentCells(row, col, board) {
  return [
    [row - 1, col],
    [row + 1, col],
    [row, col - 1],
    [row, col + 1],
  ].filter(([r, c]) => {
    const isBounds = r >= 0 && r < 10 && c >= 0 && c < 10;

    const alreadyAttacked =
      board.misses.some(([row, col]) => row === r && col === c) ||
      board.hits.some(([row, col]) => row === r && col === c);

    return isBounds && !alreadyAttacked;
  });
}
