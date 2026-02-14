import { Player } from '../src/classes/player.js';
import { Gameboard } from '../src/classes/gameboard.js';

describe('Test Player class', () => {
  let user;
  let computer;

  beforeEach(() => {
    user = new Player('user');
    computer = new Player('computer');
  });

  test('Player class is defined', () => {
    expect(Player).not.toBeUndefined();
    expect(user).toBeInstanceOf(Player);
    expect(computer).toBeInstanceOf(Player);
  });

  test('Should throw an error with invalid player type', () => {
    expect(() => new Player()).toThrow();
    expect(() => new Player('aloha')).toThrow();
  });

  test('Each Player instance should have its own Gameboard object', () => {
    expect(user.gameboard).not.toBeUndefined();
    expect(user.gameboard).toBeInstanceOf(Gameboard);
    expect(computer.gameboard).not.toBeUndefined();
    expect(computer.gameboard).toBeInstanceOf(Gameboard);
  });
});
