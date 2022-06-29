var express = require('express');
var router = express.Router();

router.get('/data', function(req, res, next) {
  console.log(req.query)
  // res.json({name:req.query.fname})
  res.render('index', { title: req.query.fname });
});
module.exports = router;