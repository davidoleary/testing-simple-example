const expect = require('chai').expect;
const add = require('./add');

describe('add', () => {
  it('add two numbers', () => {
    expect(true).to.equal(true);
  });

  it('add two numbers', () => {
    const result = add(4, 6);
    expect(result).to.equal(10);
  });
});
