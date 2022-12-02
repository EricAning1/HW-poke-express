const express = require('express');
const app = express();
const port = 3000;
const pokemon = require('./models/pokemon.js');
const expressReactViews = require('express-react-views');

app.get('/', function (req, res) {
  res.send('Welcome to the Pokemon App!');
});

app.set('view engine', 'jsx');
app.engine('jsx', expressReactViews.createEngine());

app.get('/pokemon', function (req, res) {
  res.render('Index', { pokemon: pokemon });
});

app.get('/pokemon/:id', function (req, res) {
  res.send(req.params.id);
});

app.listen(port, function () {
  console.log(`listening on port ${port}`);
});
