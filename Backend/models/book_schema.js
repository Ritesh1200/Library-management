var mongoose = require('mongoose') ;

var db = mongoose.Schema;
var schema = new db ({
   name : {
      type : 'String' ,
      require : 'true'
   },
   author : {
      type : 'String' ,
      require : 'true'
   },
   category : {
      type : 'String' ,
      require : 'true'
   }
});

var book = mongoose.model('book',schema);
module.exports = book ;

