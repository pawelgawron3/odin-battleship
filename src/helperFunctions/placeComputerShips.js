import { Ship } from '../classes/ship.js';

export function placeComputerShips(gameController) {
  const shipsToPlace = gameController.shipsToPlace;

  for (let length of shipsToPlace) {
    let placed = false;

    while (!placed) {
      const row = Math.floor(Math.random() * 10);
      const col = Math.floor(Math.random() * 10);
      const direction = Math.random() < 0.5 ? 'horizontally' : 'vertically';

      const ship = new Ship(length);

      if (gameController.computer.gameboard.canPlaceShip(ship, row, col, direction)) {
        gameController.computer.gameboard.placeShip(ship, [row, col], direction);
        placed = true;
      }
    }
  }
}
