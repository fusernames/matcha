global.__basedir = __dirname;
const express = require('express');
const app = express();
const userRouter = require('./routers/userRouter');
const bodyParser = require("body-parser")

app.set('view engine', 'ejs');
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/public', express.static('public'));
app.use(userRouter);

app.get('/', function(req, res) {
  res.render('index');
});
app.listen(3000);
