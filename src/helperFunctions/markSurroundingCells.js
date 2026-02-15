export function markSurroundingCells(gameboard, ship) {
  ship.coordinates.forEach(([row, col]) => {
    for (let dr = -1; dr <= 1; dr++) {
      for (let dc = -1; dc <= 1; dc++) {
        const nr = row + dr;
        const nc = col + dc;

        if (nr >= 0 && nr < 10 && nc >= 0 && nc < 10) {
          const alreadyHit = gameboard.hits.some(([r, c]) => r === nr && c === nc);

          const alreadyMiss = gameboard.misses.some(([r, c]) => r === nr && c === nc);

          if (!alreadyHit && !alreadyMiss) {
            gameboard.misses.push([nr, nc]);
          }
        }
      }
    }
  });
}
