var express = require('express') ;
const bodyparser = require('body-parser') ;
var schema = require('../models/borrow_schema') ;
var schema_student = require('../models/student_schema');

var router = express.Router() ;

// Body-parser middleware 
router.use(bodyparser.urlencoded({extended:false})) ;
router.use(bodyparser.json()) ;

// get book borrowed by perticular 
router.get('/:id' , function(req , res , next) {
   schema.find({ id : req.params.id }, function(err , book) {
      if(err) throw err ;

      res.send({value : book , error : "no"}) ;
   })
});

// enter in database
router.post('/:id' ,function(req , res , next) {
   schema_student.find({ _id : req.params.id }, function(err , student) {
      if(err) throw err ;

      var name = req.body.name ;
      var category = req.body.category ;
      var date = req.body.date ;
      var id ;
      var obj = {
         id : student[0].student_id,
         name : req.body.name,
         category : req.body.category,
         date : req.body.date,
         sdate : req.body.sdate,
         returned : "no"
      }

      // check the form if it is empty
      if(name == ''){
         return res.send({ error : "please enter name"}) ;
      }
      if(category == ''){
         return res.send({ error : "please enter category"}) ;
      }
      if(date == ''){
         return res.send({ error : "please enter date"}) ;
      }

      else{
         schema.create(obj , function(err , borrow) {
            if(err) throw err ;

            return res.send({value : borrow , error : "no"}) ;
         }) 
      }
   })
   
}) ;

module.exports = router ;