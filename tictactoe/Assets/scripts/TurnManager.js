function TurnManager() {
	this.inputManager = new InputManager();
}

TurnManager.prototype.playerTurn = function( board, marker ) {

	var validMove = false;
	while(!validMove) {
		board.printBoard();
		var move = this.inputManager.promptMove();
		validMove = board.checkMove(move);
	}
	board.makeMove(move, marker);
};