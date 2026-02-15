import { createBoard } from './helperFunctions/createBoard.js';
import { handleUserPlacement } from './helperFunctions/handleUserPlacement.js';
import { GameController } from './classes/gameController.js';

const rotateShipBtn = document.querySelector('#rotateShip');
const userGrid = document.getElementById('userGrid');
const computerGrid = document.getElementById('computerGrid');

let gameController = new GameController();

userGrid.addEventListener('click', (e) => handleUserPlacement(e, gameController));
rotateShipBtn.addEventListener('click', () => gameController.rotateShip());

export function driverModule() {
  createBoard(userGrid);
  createBoard(computerGrid);
}
