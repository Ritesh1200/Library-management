var express = require('express');
var schema = require('../models/admin_schema');
const bodyparser = require('body-parser');

// for session
var cookieParser = require('cookie-parser');
var session = require('express-session'); 
var adminPassport = require('passport');
var studentpassport = require('passport');


// require('./passport')(adminPassport); 



var router = express.Router();

// Body-parser middleware 
router.use(bodyparser.urlencoded({ extended: false }));
router.use(bodyparser.json());

// inictializing session 
router.use(cookieParser());
router.use(session({secret: "Shh, its a secret!"}));

router.get('/checker',(req,res)=>{
   console.log(req.user)   ;
   return res.send({value:req.user , error: "no"});
 })
 router.get('/wrong' ,(req , res , next)=>{
   return res.send({error: "enter correct password"});
 })

router.post('/', adminPassport.authenticate('admin',{
   successRedirect:"/admin_login/checker",
   failureRedirect:"/admin_login/wrong"
 }));
module.exports = router ;