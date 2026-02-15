import { createBoard } from './helperFunctions/createBoard.js';
import { handleUserPlacement } from './helperFunctions/handleUserPlacement.js';
import { GameController } from './classes/gameController.js';
import { handlePlayerAttack } from './helperFunctions/handlePlayerAttack.js';
import { placeComputerShips } from './helperFunctions/placeComputerShips.js';

const rotateShipBtn = document.querySelector('#rotateShip');
const userGrid = document.getElementById('userGrid');
const computerGrid = document.getElementById('computerGrid');

let gameController = new GameController();
placeComputerShips(gameController);

userGrid.addEventListener('click', (e) => handleUserPlacement(e, gameController));
rotateShipBtn.addEventListener('click', () => gameController.rotateShip());
computerGrid.addEventListener('click', (e) => handlePlayerAttack(e, gameController, computerGrid));

export function driverModule() {
  createBoard(userGrid);
  createBoard(computerGrid);
}
