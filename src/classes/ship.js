class Ship {
  #hits = 0;

  constructor(length) {
    if (!Number.isInteger(length) || length <= 0) {
      throw new Error('Ship length must be a positive integer');
    }

    this.length = length;
  }

  hit() {
    this.#hits++;
  }

  isSunk() {
    return this.length - this.#hits <= 0 ? true : false;
  }
}

export { Ship };
