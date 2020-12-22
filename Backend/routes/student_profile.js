var express = require('express') ;
const bodyparser = require('body-parser') ;
var schema_student = require('../models/student_schema') ;
var schema_borrow = require('../models/borrow_schema') ;
var session = require('express-session');


var router = express.Router() ;

// Body-parser middleware 
router.use(bodyparser.urlencoded({extended:false})) ;
router.use(bodyparser.json()) ;

// get book borrowed by perticular 
router.get('/:id' , function(req , res , next) {
   if(req.user){
   schema_student.findOne({ _id : req.params.id }, function(err , student) {
      if(err) throw err ;
      schema_borrow.find({ id : student.student_id} , function(err , book){
         if(err) throw err ;

         return res.send({ value : student , book : book , error : "no"}) ;
      })
   })
   }else {
      return res.send({error : "user is not authenticate "});
   }
});


module.exports = router;