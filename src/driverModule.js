import { Player } from './classes/player.js';
import { createBoard } from './helperFunctions/generateBoard.js';

const userGrid = document.getElementById('userGrid');
const computerGrid = document.getElementById('computerGrid');

export function driverModule() {
  createBoard(userGrid);
  createBoard(computerGrid);
}
