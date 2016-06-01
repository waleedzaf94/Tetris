
var board = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
var canvas;
var ctx;
var bsize = 120;
var bLoaded = false;
var cLoaded = false;
var crLoaded = false;
var turn = true;
var block, circle, cross;
var footer;
var wins = 0, losses = 0;

function updateBoard() {

	// canvas.width += 0;

	if (bLoaded == false){
		block.onload = function() {
			for (var i=0; i<3; i++){
				for (var j=0; j<3; j++){
					if (board[i][j] == 0){
						ctx.drawImage(block, j*bsize, i*bsize, bsize, bsize);
					}
				}
			}
		}
		bLoaded = true;
	}
	else{
		for (var i=0; i<3; i++){
			for (var j=0; j<3; j++){
				if (board[i][j] == 0){
					ctx.drawImage(block, j*bsize, i*bsize, bsize, bsize);
				}
			}
		}
	}
	if (cLoaded == false){
		circle.onload = function() {
			for (var i=0; i<3; i++){
				for (var j=0; j<3; j++){
					if (board[i][j] == 1){
						ctx.drawImage(circle, j*bsize, i*bsize, bsize, bsize);
					}
				}
			}
		}
		cLoaded = true;
	}
	else{
		for (var i=0; i<3; i++){
			for (var j=0; j<3; j++){
				if (board[i][j] == 1){
					ctx.drawImage(circle, j*bsize, i*bsize, bsize, bsize);
				}
			}
		}
	}
	if (crLoaded == false){
		cross.onload = function() {
			for (var i=0; i<3; i++){
				for (var j=0; j<3; j++){
					if (board[i][j] == 2){
						ctx.drawImage(cross, j*bsize, i*bsize, bsize, bsize);
					}
				}
			}
		}
		crLoaded = true;
	}
	else{
		for (var i=0; i<3; i++){
			for (var j=0; j<3; j++){
				if (board[i][j] == 2){
					ctx.drawImage(cross, j*bsize, i*bsize, bsize, bsize);
				}
			}
		}
	}
}

function init(){
	// footer = document.getElementById("foot");
	canvas = document.getElementById("mainCanvas");
	ctx = canvas.getContext("2d");
	canvas.addEventListener("click", mouseHandler, false);
	// updateTime();
	block = new Image();
	circle = new Image();
	cross = new Image();
	block.src = "Images/Block.gif";
	circle.src = "Images/Circle.gif";
	cross.src = "Images/Cross.gif";
	updateBoard();
}

function mouseHandler(event) {
	var rect = canvas.getBoundingClientRect();
	var x = event.clientX - rect.left;
	var y = event.clientY - rect.top;
	console.log("X: " + x + " Y: " + y);
	var row = Math.floor(y/bsize);
	var col = Math.floor(x/bsize);
	console.log("Row: " + row + " Col: " + col);

	if (turn == true){
		if (board[row][col] == 0){
			board[row][col] = 1;
			turn = false;
			updateBoard();
			checkGameOver();
			compMove();
		}
	}
}

function compMove() {
	while (true){
		var x = Math.floor(Math.random() * 3);
		var y = Math.floor(Math.random() * 3);
		if (board[x][y] == 0){
			board[x][y] = 2;
			turn = true;
			updateBoard();
			checkGameOver();
			break;
		}
	}
}

function resetGame() {
	post('/game', { wins: wins, losses: losses })
	board = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
	updateBoard();
	turn = true;
}

function checkGameOver() {
	if (board[0][0] == board[0][1] && board[0][1] == board[0][2] && board[0][0] != 0){
		if (turn == false){
			// prompt("You Win!");
			alert("You Win!");
			wins++;
		}
		else{
			// prompt("You Lose!");
			alert("You Lose!");
			losses++;
		}
		resetGame();
	}
	else if (board[1][0] == board[1][1] && board[1][1] == board[1][2] && board[1][0] != 0){
		if (turn == false){
			// prompt("You Win!");
			alert("You Win!");
			wins++;
		}
		else{
			// prompt("You Lose!");
			alert("You Lose!");
			losses++;
		}
		resetGame();
	}
	else if (board[2][0] == board[2][1] && board[2][1] == board[2][2] && board[2][0] != 0){
		if (turn == false){
			// prompt("You Win!");
			alert("You Win!");
			wins++;
		}
		else{
			// prompt("You Lose!");
			alert("You Lose!");
			losses++;
		}
		resetGame();
	}
	else if (board[0][0] == board[1][0] && board[1][0] == board[2][0] && board[0][0] != 0){
		if (turn == false){
			// prompt("You Win!");
			alert("You Win!");
			wins++;
		}
		else{
			// prompt("You Lose!");
			alert("You Lose!");
			losses++;
		}
		resetGame();
	}
	else if (board[0][1] == board[1][1] && board[1][1] == board[2][1] && board[0][1] != 0){
		if (turn == false){
			// prompt("You Win!");
			alert("You Win!");
			wins++;
		}
		else{
			// prompt("You Lose!");
			alert("You Lose!");
			losses++;
		}
		resetGame();
	}
	else if (board[0][2] == board[1][2] && board[1][2] == board[2][2] && board[0][2] != 0){
		if (turn == false){
			// prompt("You Win!");
			alert("You Win!");
			wins++;
		}
		else{
			// prompt("You Lose!");
			alert("You Lose!");
			losses++;
		}
		resetGame();
	}
	else if (board[0][0] == board[1][1] && board[1][1] == board[2][2] && board[0][0] != 0){
		if (turn == false){
			// prompt("You Win!");
			alert("You Win!");
			wins++;
		}
		else{
			// prompt("You Lose!");
			alert("You Lose!");
			losses++;
		}
		resetGame();
	}
	else if (board[0][2] == board[1][1] && board[1][1] == board[2][0] && board[0][2] != 0){
		if (turn == false){
			// prompt("You Win!");
			alert("You Win!");
			wins++;
		}
		else{
			// prompt("You Lose!");
			alert("You Lose!");
			losses++;
		}
		resetGame();
	}
}

function updateTime(){
	var date = new Date();
	var hours = date.getHours();
	var mins = date.getMinutes();
	var secs = date.getSeconds();
	if (hours < 10) hours = "0" + hours;
	if (mins < 10) mins = "0" + mins;
	if (secs < 10) secs = "0" + secs;
	footer.innerHTML = hours + ":" + mins + ":" + secs;
	setTimeout(updateTime, 1000);
}

function post(path, params, method){
	method = method || "post";

	var form = document.createElement("form");
	form.setAttribute("method", method);
	form.setAttribute("action", path);

	for (var key in params){
		if (params.hasOwnProperty(key)){
			var hiddenField = document.createElement("input");
			hiddenField.setAttribute("type", "hidden");
			hiddenField.setAttribute("name", key);
			hiddenField.setAttribute("value", params[key]);

			form.appendChild(hiddenField);
		}
	}

	document.body.appendChild(form);
	form.submit();
}

window.onload = init;
