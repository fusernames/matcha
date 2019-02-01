const express = require('express');
const router = express.Router();
const userController = require(__basedir + '/controllers/userController');
const validator = require(__basedir + '/models/validator.js');

router
// Login
.get('/login', function(req, res) {
  res.render('user/login');
})
.post('/login', function(req, res) {
  var errors = validator(req.body.username, 'Nom d\'utilisateur').isString().min(2).max(10).getErrors();
  console.log(errors);
  res.redirect('/login');
})
// Register
.get('/register', function(req, res) {
  res.render('user/register');
})
.post('/register', function(req, res) {
  res.redirect('/register');
})

module.exports = router;
