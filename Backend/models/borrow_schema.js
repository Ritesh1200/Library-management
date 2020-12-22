var mongoose = require('mongoose') ;

var db = mongoose.Schema;
var schema = new db ({
   id : {
      type : 'String' ,
      require : 'true'
   },
   name : {
      type : 'String' ,
      require : 'true'
   },
   category : {
      type : 'String' ,
      require : 'true'
   },
   date : {
      type : 'String' ,
      require : 'true'
   },
   sdate : {
      type : 'String' ,
      require : 'true'
   },
   returned : {
      type : 'string' ,
      required : 'true'
   }

});

var borrow = mongoose.model('borrow',schema);
module.exports = borrow ;

