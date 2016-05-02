var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/rule/:ruleid', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
