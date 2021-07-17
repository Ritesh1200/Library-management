var express = require('express') ;
const bodyparser = require('body-parser') ;
var schema = require('../models/borrow_schema') ;

var router = express.Router() ;

// Body-parser middleware
router.use(bodyparser.urlencoded({extended:false})) ;
router.use(bodyparser.json()) ;

// get book borrowed by perticular
router.put('/:id' , function(req , res , next) {
  console.log("nvuei");
   schema.findOneAndUpdate({ id : req.params.id,name:req.body.book ,returned: req.body.return},{returned:'yes'},{new: true}, function(err , book) {
      if(err) throw err ;

      console.log("vfd"+book)
      res.send({value : book , error : "no"}) ;
   })
});

module.exports = router ;
