
var io = require('socket.io')();
var ctrlBoard = require('./controllers/board');

io.on('connection', function(socket){
	ctrlBoard.connect(io, socket);
	socket.on('disconnect', ctrlBoard.disconnect);
	socket.on('message', function(msg){
		ctrlBoard.message(message, io);
	});
});

module.exports = io;
