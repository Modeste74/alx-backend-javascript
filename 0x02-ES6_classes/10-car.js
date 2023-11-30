export default class Car {
  constructor(brand, motor, color) {
    this._brand = typeof brand === 'string' ? brand : '';
    this._motor = typeof motor === 'string' ? motor : '';
    this._color = typeof color === 'string' ? color : '';
  }

  get brand() {
    return this._brand;
  }

  get motor() {
    return this._motor;
  }

  get color() {
    return this._color;
  }

  cloneCar() {
    const clonedCar = Object.assign(
      Object.create(Object.getPrototypeOf(this)),
      this,
    );
    return clonedCar;
  }
}
