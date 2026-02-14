import { Gameboard } from './gameboard.js';

class Player {
  constructor(playerType) {
    if (playerType !== 'user' && playerType !== 'computer') {
      throw new Error('Invalid player type');
    }
    this.type = playerType;
    this.gameboard = new Gameboard();
  }
}

export { Player };
