
function connect(){
	var socket = io.connect('http://localhost:3001');
	console.log('Socket connected');

	socket.on('move', function(data){
		console.log(data);
	});
}

window.onload = function(){
	// alert('ll');
	connect();
	// alert('load');
}