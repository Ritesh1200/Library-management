var express = require('express') ;
const bodyparser = require('body-parser') ;
var schema_admin = require('../models/admin_schema') ;


var router = express.Router() ;

// Body-parser middleware 
router.use(bodyparser.urlencoded({extended:false})) ;
router.use(bodyparser.json()) ;

// get book borrowed by perticular 
router.get('/:id' , function(req , res , next) {
   console.log("this is log");
   schema_admin.findOne({ _id : req.params.id }, function(err , student) {
      if(err) throw err ;

      return res.send({ value : student , error : "no"}) ;
   })
});


module.exports = router;