var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log("hellosdsd")
  var hlo = "this is hl" ;
  res.send({data:hlo});
});

module.exports = router;
