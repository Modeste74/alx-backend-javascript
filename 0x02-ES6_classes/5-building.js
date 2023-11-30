export default class Building {
  constructor(sqft) {
    this._sqft = typeof sqft === 'number' ? sqft : 0;
  }

  get sqft() {
    return this._sqft;
  }

  // Abstract Method
  // eslint-disable-next-line class-methods-use-this
  evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}
