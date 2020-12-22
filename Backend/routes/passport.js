var LocalStrategy  = require('passport-local').Strategy;
var studentschema = require('../models/student_schema');
var adminschema = require('../models/admin_schema');
var passport=require("passport")


var which ;
   passport.use("student",new LocalStrategy({
      // setting student_id name to username :)
      usernameField: 'student_id',
      passwordField: 'password'
   },
      function(username, password, done) {
         which = "student" ;
         studentschema.findOne({ student_id : username ,password : password} , function (err, user) {
          if (err) { return done(err); }
          if (!user) { return done(null, false); }
          return done(null, user);
        });
      }
   ));

   
passport.serializeUser(function(user, done) {
   console.log(user);
   done(null, user._id);
 });
 
// passport.deserializeUser(function(id, done) {
//    studentschema.findOne({_id:id},(err,data)=>{
//       if(err){
//          console.log("passport error",err)
//       }else{
//          done(null ,data );
//       }
//    })
   
// });
   

   passport.use('admin' , new LocalStrategy({
      // setting admin_id name to username :)
      usernameField: 'admin_id',
      passwordField: 'password'
   },
      function(username, password, done) {
         which = "admin" ;
         adminschema.findOne({ admin_id : username ,password : password} , function (err, user) {
          if (err) { return done(err); }
          if (!user) { return done(null, false); }

          return done(null, user);
        });
      }
   ));

   passport.deserializeUser(function(id, done) {
      console.log(id);
      if(which == "student"){
      studentschema.findOne({_id:id},(err,user)=>{
         if(err){
            console.log("passport error",err)
         }else{
            console.log(user);
            done(null ,user );
         }
      })
   }else {
      adminschema.findOne({_id:id},(err,user)=>{
         if(err){
            console.log("passport error",err)
         }else{
            console.log(user);
            done(null ,user );
         }
      })
   }
      
   });
