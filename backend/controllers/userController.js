var userController = {
  login : function(req, res) {
    if (req.method == 'POST') {
      console.log('test');
    }
    res.render('user/login');
  }
}

module.exports = userController;
