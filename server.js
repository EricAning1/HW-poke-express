const express = require('express');
const app = express();
const port = 3000;
const pokemon = require('./models/pokemon.js');

app.get('/', function (req, res) {
  res.send('Welcome to the Pokemon App!');
});

app.get('/pokemon', function (req, res) {
  res.send('pokemon');
});

app.listen(port, function () {
  console.log(`listening on port ${port}`);
});
