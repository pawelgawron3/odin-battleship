import { Ship } from '../src/classes/ship.js';

describe('Test Ship class', () => {
  let ship;

  beforeEach(() => {
    ship = new Ship(3);
  });

  test('Ship class is defined', () => {
    expect(Ship).not.toBeUndefined();
    expect(ship).toBeInstanceOf(Ship);
  });

  test('Should throw error if length is invalid', () => {
    expect(() => new Ship(-1)).toThrow();
  });

  test('Should have length property', () => {
    expect(ship.length).not.toBeUndefined();
    expect(typeof ship.length).toBe('number');
  });

  test('Should have hit() method', () => {
    expect(ship.hit).not.toBeUndefined();
    expect(typeof ship.hit).toBe('function');
  });

  test('Should have isSunk() method', () => {
    expect(ship.isSunk).not.toBeUndefined();
    expect(typeof ship.isSunk).toBe('function');
  });

  test('isSunk() should return true if the ship has been hit length times', () => {
    expect(ship.isSunk()).toBe(false);
    ship.hit();
    ship.hit();
    ship.hit();
    expect(ship.isSunk()).toBe(true);
  });
});
