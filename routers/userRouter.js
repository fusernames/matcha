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
  //validator(req.body.username).string().min(2).max(15);
  validator.check(req.body.username).isString().min(2).max(15);
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
