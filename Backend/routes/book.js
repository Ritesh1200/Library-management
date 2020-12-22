var express = require('express') ;
const bodyparser = require('body-parser') ;
var schema = require('../models/book_schema') ;

var router = express.Router() ;

// Body-parser middleware 
router.use(bodyparser.urlencoded({extended:false})) ;
router.use(bodyparser.json()) ;

router.get('/' , function(req , res , next){
   schema.find({} , function (err , book){
      if(err) throw err ;

      console.log("second",req.admin);
      return res.send({value :book , error : "no"});
   })
})

// enter in database
router.post('/' , function(req , res , next) {

   // creating instance of each data
   var name = req.body.name ;
   var author = req.body.author ;
   var category = req.body.category ;

   // check the form if it is empty
   if(name == ''){
      return res.end('please enter name') ;
   }
   if(author == ''){
      return res.end('please enter author name') ; 
   }
   if(category == ''){
      return res.end('please enter category') ;
   }

   else{
      schema.create(req.body , function(err , book) {
         if(err) throw err ;

         return res.send({value : book , error : "no"}) ;
      })
   }
});

module.exports = router ; 