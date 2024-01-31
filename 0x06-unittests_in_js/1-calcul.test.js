const assert = require('assert');

const calculateNumber = require('./1-calcul');

describe('calculateNumber function', () => {
  describe('SUM operations', () => {
    it('should round and return sum of two positive params', () => {
      const result = calculateNumber('SUM', 2.5, 3.7);
      assert.strictEqual(result, 7);
    });

    it('should round and return sum of two negative params', () => {
      const result = calculateNumber('SUM', -2.5, -3.7);
      assert.strictEqual(result, -6);
    });

    it('should round and add a positve to a negative param', () => {
      const result = calculateNumber('SUM', 2.5, -3.7);
      assert.strictEqual(result, -1);
    });

    it('should round and add two whole numbers', () => {
      const result = calculateNumber('SUM', 3, 11);
      assert.strictEqual(result, 14);
    });

    it('should round and adds a decimal and whole number', () => {
      const result = calculateNumber('SUM', 2.5, 7);
      assert.strictEqual(result, 10);
    });
    it('should round and adds a zero to another zero', () => {
      const result = calculateNumber('SUM', 0, 0);
      assert.strictEqual(result, 0);
    });
  });

  describe('SUBTRACT operation', () => {
    it('should round and return difference of two positive params', () => {
      const result = calculateNumber('SUBTRACT', 3.7, 2.5);
      assert.strictEqual(result, 1);
    });

    it('should round and return difference of two negative params', () => {
      const result = calculateNumber('SUBTRACT', -2.5, -3.7);
      assert.strictEqual(result, 2);
    });

    it('should round and subtract a positve from a negative param', () => {
      const result = calculateNumber('SUBTRACT', 2.5, -3.7);
      assert.strictEqual(result, 7);
    });

    it('should round and subtract two whole numbers', () => {
      const result = calculateNumber('SUBTRACT', 3, 11);
      assert.strictEqual(result, -8);
    });

    it('should round and subtract decimal from a whole number', () => {
      const result = calculateNumber('SUBTRACT', 7, 2.5);
      assert.strictEqual(result, 4);
    });
    it('should round and subtract a number from zero', () => {
      const result = calculateNumber('SUBTRACT', 7, 0);
      assert.strictEqual(result, 7);
    });
    it('should round and subtract a zero from a zero', () => {
      const result = calculateNumber('SUBTRACT', 0, 0);
      assert.strictEqual(result, 0);
    });
  });

  describe('DIVIDE operation', () => {
    it('should round and divides two positive params', () => {
      const result = calculateNumber('DIVIDE', 3.7, 2.5);
      assert.strictEqual(result, 1.3333333333333333);
    });

    it('should round and divides two negative params', () => {
      const result = calculateNumber('DIVIDE', -2.5, -3.7);
      assert.strictEqual(result, 0.5);
    });

    it('should round and divide a positve by a negative param', () => {
      const result = calculateNumber('DIVIDE', 2.5, -3.7);
      assert.strictEqual(result, -0.75);
    });

    it('should round and divide two whole numbers', () => {
      const result = calculateNumber('DIVIDE', 3, 11);
      assert.strictEqual(result, 0.2727272727272727);
    });

    it('should round and divide decimal by a whole number', () => {
      const result = calculateNumber('DIVIDE', 2.5, 7);
      assert.strictEqual(result, 0.42857142857142855);
    });
    it('should round and divide a whole by zero', () => {
      const result = calculateNumber('DIVIDE', 2.5, 0);
      assert.strictEqual(result, 'Error');
    });
    it('should round and divide a zero by zero', () => {
      const result = calculateNumber('DIVIDE', 0, 0);
      assert.strictEqual(result, 'Error');
    });
  });
 });
