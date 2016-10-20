var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('./db/mongoose');

//routes
var cities = require('./routes/cities');

var app = express();

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

var staticPath = 'public';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api/', cities);

app.use(express.static(staticPath));
app.use('/', express.static(staticPath));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  console.dir(err);
  res.status(err.status || 500);
  if(err.status === 500) {
    console.error(err.stack);
    res.json({error: 'Internal Server Error'});
  }
  else if(err.status === 404) {
    res.render('error');    //render error page
  } else {
    res.json({error: err.message})
  }
});

var server = http.createServer(app);
server.listen('3000');
