function InputManager() {

}

InputManager.prototype.promptBoardSize = function() {
	var boardLength = 0;
	var boardWidth = 0;

	while(!Number.isInteger(boardLength) || boardLength < 2 || boardLength > 9) {
		boardLength = prompt("Enter the length of the board");
		boardLength = Math.floor(boardLength);
	}
	while(!Number.isInteger(boardWidth) || boardWidth < 2 || boardWidth > 9) {
		boardWidth = prompt("Enter the width of the board");
		boardWidth = Math.floor(boardWidth);
	}
	return [boardLength, boardWidth];
};

InputManager.prototype.promptMove = function() {
	var field = "?";

	//add check for valid input
	field = prompt("Enter a field");
	return field;
};

