var express = require('express');
const bodyparser = require('body-parser');
var session = require('express-session');

var router = express.Router();

// Body-parser middleware
router.use(bodyparser.urlencoded({ extended: false }));
router.use(bodyparser.json());

router.get('/' , function(req , res , next) {
   req.logout();
   res.send({error : "user logout succesfull"}) ;

});

module.exports = router ;
