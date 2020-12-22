var express = require('express');
var schema = require('../models/student_schema');

// for authentication
var session = require('express-session');
var studentpassport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
// var studentpassport= require('./passport');


var router = express.Router();
router.get('/', function(req ,res){
   console.log("base1")
   return res.send({value:"this is gjjet"});
})
var token;
router.get('/checker',(req,res)=>{
   console.log(req.user);
   return res.send({value:req.user , error: "no"});
 })
 router.get('/wrong' ,(req , res , next)=>{
   return res.send({error: "enter correct password"});
 })

router.post('/', studentpassport.authenticate('student',{
   successRedirect:"/student_login/checker",
   failureRedirect:"/student_login/wrong"
 }));

module.exports = router;
