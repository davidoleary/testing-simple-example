const add = require('./add');
const subtract = require('./subtract');

const multiply = (x, y) => {
  return x * y;
}


const calculator = {
  add,
  subtract,
  multiply,
}

module.exports = calculator;