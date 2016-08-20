var express = require('express');
var router = express.Router();

router.get('/albums', function(req, res, next) {
  res.render('albums/index');
});

router.get('/albums/new', function(req, res, next) {
  res.render('albums/new');
});

module.exports = router;
