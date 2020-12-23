var express = require('express') ;
const bodyparser = require('body-parser') ;
var schema = require('../models/student_schema') ;

var router = express.Router() ;

// Body-parser middleware
router.use(bodyparser.urlencoded({extended:false})) ;
router.use(bodyparser.json()) ;


// enter in database
router.post('/' ,function(req , res , next) {
   var password = req.body.password ;
   var name = req.body.name ;
   var student_id = req.body.student_id ;
   var email = req.body.email ;
   var phone_no = req.body.phone_no ;
   var gender = req.body.gender ;

   // check the form if it is empty
   if(name == ''){
      return res.send({error:"please enter name"}) ;
   }
   if(password == ''){
      return res.send({error:"please enter password"}) ;
   }
   if(student_id == ''){
      return res.send({error:"please enter student id"}) ;
   }
   if(email == ''){
      return res.send({error:"please enter email"}) ;
   }
   if(phone_no == ''){
      return res.send({error:"please enter phone no"}) ;
   }
   if(gender == ''){
      return res.send({error:"please enter gender"}) ;
   }

   // student name must not have special charactor
   var nameRegEx = /^[a-zA-Z\s]{2,20}$/
   if(!nameRegEx.test(name)) {
      return res.send({error:"enter valid name"}) ;

   }

   // password is too long or too short and not take special charactor (RegExp concept)
   if( password.length < 8 || password.length > 20  || password.search(/[a-z]/) == -1 || password.search(/[A-Z]/) == -1 || password.search(/[0-9]/) == -1 ) {
      return res.send({error:"please exter valid password"}) ;

   }

   // student id conditions
   if(student_id.length < 5 || student_id.length > 10 ) {
      return res.send({error:"please enter valid student id"}) ;

   }

   // email condition
   var emailRegEx = /^([a-zA-Z0-9]+)@([a-zA-Z]+)\.([a-zA-Z]{2,4})$/
   if(!emailRegEx.test(email)) {
      return res.send({error:"please enter valid email"}) ;

   }

   // mobile no conditions
   var mobileRegEx = /^[7-9][0-9]{9}$/ ;
   if(!mobileRegEx.test(phone_no)) {
      return res.send({error:"please enter valid phone no"}) ;

   }

   // check for unique value then update
   var valu = 1;
   if (valu) {
      schema.find({ student_id: student_id }, function (err, stu) {
         if (err) throw err ;
         if (stu.length!=0) {
            return res.send({error:"this id is already taken"}) ;

         }
         else {
            schema.find({ phone_no: phone_no }, function (err, data) {
               if (err) throw err;
               if (data.length!=0) {
                  return res.send({error:"this mobile no. is already taken"}) ;

               }
               else {
                  schema.find({ email: email }, function (err, data) {
                     if (err) throw err;
                     if (data.length!=0) {
                        return res.send({error:"this email is already taken"}) ;
                     }
                     else {
                        schema.create(req.body , function (err , admin) {
                           if(err) throw err ;
                           var err = "no"
                           console.log("hello bhai kesa h tu")
                           return res.send({value:admin , error: err}) ;
                        })
                     }
                  })
               }
            })
         }
      })
   }
}) ;

////////////////////// UPDATE /////////////////////////////////


router.put('/:id' , function(req , res , next) {
   var password = req.body.password ;
   var name = req.body.name ;
   var student_id = req.body.student_id ;
   var email = req.body.email ;
   var phone_no = req.body.phone_no ;
   var gender = req.body.gender ;

   // check the form if it is empty
   if(name == ''){
      return res.send({error : "please enter name"}) ;
   }
   if(password == ''){
      return res.send({error : "please enter password"}) ;
   }
   if(student_id == ''){
      return res.send({error : "please enter id"}) ;
   }
   if(email == ''){
      return res.send({error : "please enter email"}) ;
   }
   if(phone_no == ''){
      return res.send({error : "please enter phone no "}) ;
   }
   if(gender == ''){
      return res.send({error : "please enter gender"}) ;
   }

   // student name must not have special charactor
   var nameRegEx = /^[A-Z][a-zA-Z\s]{2,20}$/
   if(!nameRegEx.test(name)) {
      return res.send({error : "please enter valid name"}) ;
   }

   // password is too long or too short and not take special charactor (RegExp concept)
   if( password.length < 8 || password.length > 20  || password.search(/[a-z]/) == -1 || password.search(/[A-Z]/) == -1 || password.search(/[0-9]/) == -1 ) {
      return res.send({error : "please enter valid password"}) ;
   }

   // admin id conditions
   if(student_id.length < 5 || student_id.length > 10 ) {
      return res.send({error : "please enter valid id"}) ;
   }

   // email condition
   var emailRegEx = /^([a-zA-Z0-9]+)@([a-zA-Z]+)\.([a-zA-Z]{2,4})$/
   if(!emailRegEx.test(email)) {
      return res.send({error : "please enter valid email"}) ;
   }

   // mobile no conditions
   var mobileRegEx = /^[7-9][0-9]{9}$/ ;
   if(!mobileRegEx.test(phone_no)) {
      return res.send({error : "please enter valid phone no"}) ;
   }

   // creating variables
   var stundentid
   var stundentno
   var stundentemail

   schema.findById(req.params.id , function(err , data ) {
      if(err) throw err ;

      if(data.student_id != student_id) {
          stundentid  = true ;
      }
      if(data.email != email) {
         stundentemail = true ;
      }
      if(data.phone_no != phone_no) {
         stundentno = true ;
      }
   })


   // check for unique value then update
   schema.find({ student_id: student_id }, function (err, stu) {
      if (err) throw err ;

      if (stundentid && stu.length != 0 ) {
         return res.send({error : "this id is already taken"}) ;
      }
      else{
         schema.find({ phone_no: phone_no }, function (err, data) {
            if (err) throw err;

            if (stundentno && data.length != 0) {
               return res.send({error : "this phone no  is already taken"}) ;
            }
            else {
               schema.find({ email: email }, function (err, data) {
                  if (err) throw err;

                  if (stundentemail && data.length != 0) {
                     return res.send({error : "this email id is already taken"}) ;

                  }
                     else{
                        schema.findByIdAndUpdate( req.params.id , req.body , {new: true}, function(err , student) {
                           if (err) throw err ;

                           return res.send({ value : student , error : "no"}) ;
                        })
                        // we use {new : true }
                        // an option that asks mongoose to return the updated version
                        // of the document instead of the pre-updated one.
                     }
               })
            }
         })


      }
   })

});

module.exports = router ;

