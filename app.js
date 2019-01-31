const express = require('express');
const app = express();
const userController = require('./controllers/userController');

app.set('view engine', 'ejs');

app.use('/public', express.static('public'));
app.use(userController);

app.get('/', function(req, res) {
  res.render('index');
});

app.locals.user = 'cc';

app.listen(3000);
