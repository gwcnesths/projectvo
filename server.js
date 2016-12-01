/*
* Simple Http Server using Express 
*  author: Weijian Zeng
*/

require('dotenv').config({silent: true});


var http = require('http');
var path = require('path');

var socketio = require('socket.io');
var express = require('express');
const favicon = require('favicon');
const bodyParser = require('body-parser');
const compression = require('compression');
const cors = require('cors');
const passport = require('passport');


var routes = require('./server/api');
//
// ## SimpleServer `SimpleServer(obj)`
//
// Creates a new instance of SimpleServer with the following options:
//  * `port` - The HTTP port to listen on. If `process.env.PORT` is set, _it overrides this value_.
//
var app = express();
var server = http.createServer(app);
var io = socketio.listen(server);


// middleware 
app.use(cors());
app.use(compression());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(passport.initialize());

// define public/client folder
app.use(express.static(path.resolve(__dirname, 'client')));

// page routes
app.use(require('./server/api'));

// socket routes
io.sockets.on('connection', function(socket){
  
  console.log('starting sockets');
  
  require('./server/socket').listen(io, socket);
});

//Return the index for any other GET request
app.get('/*', function (req, res) {
    res.sendFile('index.html', {root: path.join(__dirname, './client')});
});


server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
  var addr = server.address();
  console.log("Chat server listening at", addr.address + ":" + addr.port);
});
