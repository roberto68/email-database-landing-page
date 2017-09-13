var http = require('http');
var express = require('express');
var fs = require('fs');
app = express.createServer();
app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
});

app.post('/submit', function(req, res) {
  fs.appendFile('emailDatabase.txt', req.body.email, function (err) {
        if (err) throw err;
  	  console.log('Saved!');
    });

});

//app.listen(3000);
console.log("server listening on 3000");
