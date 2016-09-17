function Board() {
	this.board = [];
	this.line = [];
}


Board.prototype.createBoard = function(boardDimensions) {

	for(var i = 0; i < boardDimensions[0]; i++) {
		this.line.push([i]);
	}
	for(var i = 0; i < boardDimensions[1]; i++) {
		this.board.push( this.line.map( function( x ) {
			return i + x;
		}));
	}
};

Board.prototype.printBoard = function() {
	for(var line in this.board) {
		document.write("<br>" + this.board[line] + "<br>");
	}
	document.write("<br>");
};

Board.prototype.makeMove = function(position, marker) {
	this.board[position.charAt(0)][position.charAt(1)] = marker;
};

Board.prototype.checkMove = function(position) {
	if(this.board[position.charAt(0)][position.charAt(1)] === position) {
		return true;
	}
	else{
		document.write("Invalid move. Try again." + "<br>");
		return false;
	}
};

