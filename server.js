var express = require('express');
var app = express();
var calculator = require('./calculator');

app.get('/', function (req, res) {
  res.send('hello calculator world')
})

app.get('/add/:x/:y', function (req, res) {
  const result = calculator.add(parseInt(req.params.x, 10), parseInt(req.params.y, 10));
  res.send(result+ '');
});

app.get('/subtract/:x/:y', function (req, res) {
  const result = calculator.subtract(parseInt(req.params.x, 10), parseInt(req.params.y, 10));
  res.send(result + '');
})

module.exports = app;