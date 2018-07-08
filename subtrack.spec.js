const expect = require('chai').expect;
const subtract = require('./subtract');

describe('subtract', () => {
  it('subtract two numbers', () => {
    const result = subtract(4, 6);
    expect(result).to.equal(-2);
  });
});