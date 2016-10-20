var express = require('express');
var router = express.Router();
var mongoose = require('../db/mongoose');

var City = mongoose.model('City')

/* GET home page. */
router.get('/cities', function(req, res, next) {
  var q = req.query.q || ""

  if(q.length >= 3) {
    City.find({name : new RegExp('^' + q, 'i')}, function (err, docs) {
        res.json({
           data : docs
        });
    });
  }
  else {
    res.json({
      data : []
    })
  }
});

module.exports = router;
