const assert = require('assert');

const calculateNumber = require('./0-calcul');

describe('calculateNumber function', () => {
  it('should round and return sum of two positive params', () => {
    const result = calculateNumber(2.5, 3.7);
    assert.strictEqual(result, 7);
  });

  it('should round and return sum of two negative params', () => {
    const result = calculateNumber(-2.5, -3.7);
    assert.strictEqual(result, -6);
  });

  it('should round and add a positve to a negative param', () => {
    const result = calculateNumber(2.5, -3.7);
    assert.strictEqual(result, -1);
  });

  it('should round and add two whole numbers', () => {
    const result = calculateNumber(3, 11);
    assert.strictEqual(result, 14);
  });

  it('should round and add a decimal to a whole number', () => {
    const result = calculateNumber(2.5, 7);
    assert.strictEqual(result, 10);
  });

  it('should round and add a zero to another zero', () => {
    const result = calculateNumber(0, 0);
    assert.strictEqual(result, 0);
  });
});
