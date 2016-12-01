var async = require('async');

var messages = [];
var sockets = [];


function broadcast(event, data) {
  sockets.forEach(function (socket) {
    socket.emit(event, data);
  });
}

function updateRoster() {
  async.map(
    sockets,
    function (socket, callback) {
      socket.name;
      callback;
    },
    function (err, names) {
      broadcast('roster', names);
    }
  );
}

module.exports.listen = function(io, socket){

    console.log('new client connected');

    messages.forEach(function (data) {
      socket.emit('message', data);
    });

    sockets.push(socket);

    console.log( 'clients: ' + sockets.length);

    socket.on('disconnect', function () {
      sockets.splice(sockets.indexOf(socket), 1);
      updateRoster();
    });

    socket.on('message', function (msg) {
      var text = String(msg || '');

     console.log( msg);

      if (!text)
        return;

        var data = {
          name: socket.name,
          text: text 
        };
        
        broadcast('message', data);
        messages.push(data);
    });

    socket.on('identify', function (name) {
      socket.name = String(name || 'Anonymous');
        updateRoster();
    });
}

