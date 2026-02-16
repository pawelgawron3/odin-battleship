import { Player } from './player.js';
import { Ship } from './ship.js';

class GameController {
  constructor() {
    this.user = new Player('user');
    this.computer = new Player('computer');
    this.currentTurn = 'user';
    this.gameOver = false;
    this.currentDirection = 'horizontally';
    this.shipsToPlace = [5, 4, 3, 3, 2, 2, 1];
    this.currentShipIndex = 0;
    this.computerMemory = {
      mode: 'hunt', //'hunt' or 'target'
      directionsToTry: [],
    };
  }

  get currentShipLength() {
    return this.shipsToPlace[this.currentShipIndex];
  }

  placeUserShip(row, col) {
    const length = this.currentShipLength;
    if (!length) return false;

    const ship = new Ship(length);
    if (this.user.gameboard.canPlaceShip(ship, row, col, this.currentDirection)) {
      this.user.gameboard.placeShip(ship, [row, col], this.currentDirection);

      this.currentShipIndex++;
      return true;
    }

    return false;
  }

  rotateShip() {
    this.currentDirection =
      this.currentDirection === 'horizontally' ? 'vertically' : 'horizontally';
  }

  allShipsPlaced() {
    return this.currentShipIndex >= this.shipsToPlace.length;
  }

  switchTurn() {
    this.currentTurn = this.currentTurn === 'user' ? 'computer' : 'user';
  }
}

export { GameController };
