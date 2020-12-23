var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
const bodyparser = require('body-parser') ;
var LocalStrategy  = require('passport-local').Strategy;
var session = require('express-session');
var studentpassport    = require('passport');
var adminPassport = require('passport');


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var student_register = require('./routes/student_register') ;
var admin_register = require('./routes/admin_register') ;
var borrow = require('./routes/borrow') ;
var book = require('./routes/book') ;
var student_login = require('./routes/student_login') ;
var admin_login = require('./routes/admin_login') ;
var logout = require('./routes/logout') ;
const passportt = require('./routes/passport');
var cors = require('cors')
var student_profile = require('./routes/student_profile');
var admin_profile = require('./routes/admin_profile');
var student_return = require('./routes/return');
var cookieParser=require('cookie-parser')


var app = express();

// Body-parser middleware

// inictializing session
app.use(cookieParser())
app.use(session({
   secret: "Shh, its a secret!" ,
   name : "ritesh",
   resave: true,
   saveUninitialized: true,
   cookie:{
    maxAge:3000000,
    httpOnly:false,
    secure:false
   }
}));


// cors
app.use(cors({
  origin : ['http://localhost:4200', 'http://127.0.0.1:4200'],
  credentials:true
}) ) ;

// initializing passport
require("./routes/passport")
app.use(studentpassport.initialize());
app.use(studentpassport.session());

app.use(adminPassport.initialize()) ;
app.use(adminPassport.session()); // persistent login sessions

// Database connect
var url = 'mongodb+srv://demo:1234@cluster0.ugnnu.mongodb.net/mydb?retryWrites=true&w=majority' ;
mongoose.connect(
  url ,
  {'useNewUrlParser': true ,'useUnifiedTopology': true,'useCreateIndex': true , 'useFindAndModify' : false} ,
  function() {
    console.log ('connected to mongoDB') ;
  });


var db = mongoose.connection;
db.on('error',console.error.bind(console, 'connection error'));
db.once('open', function(){
  console.log('connected');
});

// Body-parser middleware
app.use(bodyparser.urlencoded({extended:false})) ;
app.use(bodyparser.json()) ;


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use(express.static(path.join(__dirname,'../dist/librarymanagementsystem')))
app.get('/',(req,res)=>{
  res.sendFile(path.join(__dirname,'../dist/librarymanagementsystem/index.html'))
})

app.use('/index', indexRouter);
app.use('/users', usersRouter);
app.use('/student_register' , student_register) ;
app.use('/admin_register' , admin_register) ;
app.use('/borrow' , borrow) ;
app.use('/book' , book) ;
app.use('/student_login' , student_login) ;
app.use('/admin_login' , admin_login) ;
app.use('/logout' , logout) ;
app.use('/student_profile' , student_profile);
app.use('/admin_profile' , admin_profile);
app.use('/return' , student_return);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
