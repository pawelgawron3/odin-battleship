class Ship {
  #hits = 0;

  constructor(length) {
    if (!Number.isInteger(length) || length <= 0) {
      throw new Error('Ship length must be a positive integer');
    }

    this.length = length;
    this.coordinates = [];
  }

  hit() {
    this.#hits++;
  }

  isSunk() {
    return this.length - this.#hits <= 0 ? true : false;
  }

  setCoordinates(coordsArray) {
    this.coordinates = coordsArray;
  }
}

export { Ship };
