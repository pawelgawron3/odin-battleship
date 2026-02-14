import { Ship } from './ship';

class Gameboard {
  constructor() {
    this.board = [...Array(10)].map(() => Array(10).fill(null));
    this.misses = [];
    this.hits = [];
    this.shipsFleet = [];
  }

  areAdjCellsEmpty(r, c) {
    for (let dr = -1; dr <= 1; dr++) {
      for (let dc = -1; dc <= 1; dc++) {
        let nr = r + dr;
        let nc = c + dc;
        if (nr >= 0 && nr < 10 && nc >= 0 && nc < 10) {
          if (this.board[nr][nc] !== null) return false;
        }
      }
    }
    return true;
  }

  canPlaceShip(ship, row, col, direction) {
    if (row < 0 || row > 9 || col < 0 || col > 9) return false;
    if (direction === 'horizontally' && col + ship.length - 1 > 9) return false;
    if (direction === 'vertically' && row + ship.length - 1 > 9) return false;

    for (let i = 0; i < ship.length; i++) {
      let r = direction === 'vertically' ? row + i : row;
      let c = direction === 'horizontally' ? col + i : col;
      if (!this.areAdjCellsEmpty(r, c)) return false;
    }

    return true;
  }

  placeShip(ship, coords, direction) {
    let [row, col] = coords;
    if (!this.canPlaceShip(ship, row, col, direction)) return;

    for (let i = 0; i < ship.length; i++) {
      let r = direction === 'vertically' ? row + i : row;
      let c = direction === 'horizontally' ? col + i : col;
      this.board[r][c] = ship;
    }

    this.shipsFleet.push(ship);
  }

  receiveAttack(coords) {
    let [row, col] = coords;
    let square = this.board[row][col];

    if (square instanceof Ship) {
      square.hit();
      this.hits.push([row, col]);
    } else if (square === null) {
      this.misses.push([row, col]);
    }
  }

  allShipsSunk() {
    return this.shipsFleet.every((ship) => ship.isSunk());
  }
}

export { Gameboard };
