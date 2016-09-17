function TicTacToe() {
	this.inputManager = new InputManager();
	this.board = new Board();
	this.turnManager = new TurnManager();

	this.gameEnd = false;
	this.marker = "X";
	this.boardDimensions = [3 , 3];
}


TicTacToe.prototype.initialize = function() {
	this.boardDimensions = this.inputManager.promptBoardSize();
	this.board.createBoard(this.boardDimensions);
	this.gameLoop();
};

TicTacToe.prototype.gameLoop = function() {
	while(!this.gameEnd) {
		if(this.marker === "X") {
			this.marker = "O";
		}
		else {
			this.marker = "X";
		}
		this.turnManager.playerTurn( this.board, this.marker );
	}
};

var ticTacToe = new TicTacToe();
ticTacToe.initialize();