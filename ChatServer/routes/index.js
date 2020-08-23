var express = require('express');
var router = express.Router();
var customvars = require('../customvars');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: customvars.title });
});

module.exports = router;
