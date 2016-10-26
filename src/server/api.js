var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('./db/mongoose');

//routes
var cities  = require('./routes/cities');
var weather = require('./routes/weather');

var app = express();

// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

var staticPath = 'public';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api/', cities);
app.use('/api/', weather);

app.use(express.static(staticPath));
app.use('/', express.static(staticPath));

var server = http.createServer(app);
server.listen('3000');

console.log('API server started')
