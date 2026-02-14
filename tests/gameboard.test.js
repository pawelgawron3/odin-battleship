import { Gameboard } from '../src/classes/gameboard.js';
import { Ship } from '../src/classes/ship.js';

describe('Test Gameboard class', () => {
  let gameboard;

  beforeEach(() => {
    gameboard = new Gameboard();
  });

  test('Gameboard class is defined', () => {
    expect(Gameboard).not.toBeUndefined();
    expect(gameboard).toBeInstanceOf(Gameboard);
  });

  test('Should place ship at specified coordinates', () => {
    gameboard.placeShip(new Ship(2), [1, 1], 'horizontally');
    expect(gameboard.board[1][1]).toBeInstanceOf(Ship);
    expect(gameboard.board[1][2]).toBeInstanceOf(Ship);
  });

  test('canPlaceShip() should detect collisions', () => {
    expect(gameboard.canPlaceShip(new Ship(2), 0, 8, 'horizontally')).toBe(true);
    expect(gameboard.canPlaceShip(new Ship(2), 0, 9, 'horizontally')).toBe(false);

    const ship1 = new Ship(3);
    gameboard.placeShip(ship1, [1, 1], 'horizontally');

    const ship2 = new Ship(2);
    expect(gameboard.canPlaceShip(ship2, 0, 0, 'vertically')).toBe(false);
    expect(gameboard.canPlaceShip(ship2, 2, 0, 'horizontally')).toBe(false);
    expect(gameboard.canPlaceShip(ship2, 2, 4, 'horizontally')).toBe(false);
    expect(gameboard.canPlaceShip(ship2, 2, 5, 'horizontally')).toBe(true);
    expect(gameboard.canPlaceShip(ship2, 4, 0, 'vertically')).toBe(true);
  });

  test('receiveAttack() determines whether or not the attack hit a ship', () => {
    const ship = new Ship(1);
    gameboard.placeShip(ship, [2, 2], 'horizontally');

    gameboard.receiveAttack([2, 2]);
    expect(ship.isSunk()).toBe(true);
    expect(gameboard.hits).toContainEqual([2, 2]);

    gameboard.receiveAttack([8, 7]);
    expect(gameboard.misses).toContainEqual([8, 7]);
  });

  test('Gameboard should be able to report whether or not all of their ships have been sunk', () => {
    const ship1 = new Ship(1);
    const ship2 = new Ship(1);
    gameboard.placeShip(ship1, [2, 2], 'horizontally');
    gameboard.placeShip(ship2, [3, 3], 'vertically');
    gameboard.receiveAttack([2, 2]);
    gameboard.receiveAttack([3, 3]);

    expect(gameboard.allShipsSunk()).toBe(true);
  });
});
