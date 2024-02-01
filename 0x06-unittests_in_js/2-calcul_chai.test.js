const chai = require('chai');

const { expect } = chai;

const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber function', () => {
  describe('SUM operations', () => {
    it('should round and return sum of two positive params', () => {
      const result = calculateNumber('SUM', 2.5, 3.7);
      expect(result).to.equal(7);
    });

    it('should round and return sum of two negative params', () => {
      const result = calculateNumber('SUM', -2.5, -3.7);
      expect(result).to.equal(-6);
    });

    it('should round and add a positve to a negative param', () => {
      const result = calculateNumber('SUM', 2.5, -3.7);
      expect(result).to.equal(-1);
    });

    it('should round and add two whole numbers', () => {
      const result = calculateNumber('SUM', 3, 11);
      expect(result).to.equal(14);
    });

    it('should round and adds a decimal and whole number', () => {
      const result = calculateNumber('SUM', 2.5, 7);
      expect(result).to.equal(10);
    });

    it('should round and adds a zero to another zero', () => {
      const result = calculateNumber('SUM', 0, 0);
      expect(result).to.equal(0);
    });
  });

  describe('SUBTRACT operation', () => {
    it('should round and return difference of two positive params', () => {
      const result = calculateNumber('SUBTRACT', 3.7, 2.5);
      expect(result).to.equal(1);
    });

    it('should round and return difference of two negative params', () => {
      const result = calculateNumber('SUBTRACT', -2.5, -3.7);
      expect(result).to.equal(2);
    });

    it('should round and subtract a positve from a negative param', () => {
      const result = calculateNumber('SUBTRACT', 2.5, -3.7);
      expect(result).to.equal(7);
    });

    it('should round and subtract two whole numbers', () => {
      const result = calculateNumber('SUBTRACT', 3, 11);
      expect(result).to.equal(-8);
    });

    it('should round and subtract decimal from a whole number', () => {
      const result = calculateNumber('SUBTRACT', 7, 2.5);
      expect(result).to.equal(4);
    });
    it('should round and subtract a number from zero', () => {
      const result = calculateNumber('SUBTRACT', 7, 0);
      expect(result).to.equal(7);
    });
    it('should round and subtract a zero from a zero', () => {
      const result = calculateNumber('SUBTRACT', 0, 0);
      expect(result).to.equal(0);
    });
  });

  describe('DIVIDE operation', () => {
    it('should round and divides two positive params', () => {
      const result = calculateNumber('DIVIDE', 3.7, 2.5);
      expect(result).to.be.closeTo(1.3333333333333333, 0.0001);
    });

    it('should round and divides two negative params', () => {
      const result = calculateNumber('DIVIDE', -2.5, -3.7);
      expect(result).to.be.closeTo(0.5, 0.0001);
    });

    it('should round and divide a positve by a negative param', () => {
      const result = calculateNumber('DIVIDE', 2.5, -3.7);
      expect(result).to.be.closeTo(-0.75, 0.0001);
    });

    it('should round and divide two whole numbers', () => {
      const result = calculateNumber('DIVIDE', 3, 11);
      expect(result).to.be.closeTo(0.2727272727272727, 0.0001);
    });

    it('should round and divide decimal by a whole number', () => {
      const result = calculateNumber('DIVIDE', 2.5, 7);
      expect(result).to.be.closeTo(0.42857142857142855, 0.0001);
    });
    it('should round and divide a whole by zero', () => {
      const result = calculateNumber('DIVIDE', 2.5, 0);
      expect(result).to.equal('Error');
    });
    it('should round and divide a zero by zero', () => {
      const result = calculateNumber('DIVIDE', 0, 0);
      expect(result).to.equal('Error');
    });
  });
 });
