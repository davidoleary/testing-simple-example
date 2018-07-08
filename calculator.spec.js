const expect = require('chai').expect;
const calc = require('./calculator');

describe('calcultor', () => {
  it('can add', () => {
    const result = calc.add(2, 6);
    expect(result).to.equal(8);
  });

  it('can subtract', () => {
    const result = calc.subtract(5, 62);
    expect(result).to.equal(-57);
  });

  it('can multiply', () => {
    const result = calc.multiply(3, 9);
    expect(result).to.equal(27);
  });
});