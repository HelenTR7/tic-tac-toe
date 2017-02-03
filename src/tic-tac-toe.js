class TicTacToe {
    constructor() {
    	this.field = [
    	   [null, null, null],
    	   [null, null, null],
    	   [null, null, null],
    	];
    	this.mark = 'x';
    	this.filledCell = 0;
    }

    getCurrentPlayerSymbol() {
    	return this.mark;
    }

    nextTurn(rowIndex, columnIndex) {
    	if (this.field[rowIndex][columnIndex] == null) {
    		this.filledCell++;
    		this.field[rowIndex][columnIndex] = this.mark;
    		if (this.mark == 'x') this.mark = 'o';
    		else this.mark = 'x';
    	}
    }

    isFinished() {
    	if (this.isDraw() || this.getWinner()) return true;
    	else return false;
    }

    getWinner() {
    	if
    		((this.field[0][0] == 'x' && this.field[0][1] == 'x' && this.field[0][2] == 'x') ||
    		(this.field[1][0] == 'x' && this.field[1][1] == 'x' && this.field[1][2] == 'x') ||
    		(this.field[2][0] == 'x' && this.field[2][1] == 'x' && this.field[2][2] == 'x') ||

    		(this.field[0][0] == 'x' && this.field[1][0] == 'x' && this.field[2][0] == 'x') ||
    		(this.field[0][1] == 'x' && this.field[1][1] == 'x' && this.field[2][1] == 'x') ||
    		(this.field[0][2] == 'x' && this.field[1][2] == 'x' && this.field[2][2] == 'x') ||

    		(this.field[0][0] == 'x' && this.field[1][1] == 'x' && this.field[2][2] == 'x') ||
    		(this.field[2][0] == 'x' && this.field[1][1] == 'x' && this.field[0][2] == 'x'))
    		return 'x';
    	else if 
    		((this.field[0][0] == 'o' && this.field[0][1] == 'o' && this.field[0][2] == 'o') ||
    		(this.field[1][0] == 'o' && this.field[1][1] == 'o' && this.field[1][2] == 'o') ||
    		(this.field[2][0] == 'o' && this.field[2][1] == 'o' && this.field[2][2] == 'o') ||

    		(this.field[0][0] == 'o' && this.field[1][0] == 'o' && this.field[2][0] == 'o') ||
    		(this.field[0][1] == 'o' && this.field[1][1] == 'o' && this.field[2][1] == 'o') ||
    		(this.field[0][2] == 'o' && this.field[1][2] == 'o' && this.field[2][2] == 'o') ||

    		(this.field[0][0] == 'o' && this.field[1][1] == 'o' && this.field[2][2] == 'o') ||
    		(this.field[2][0] == 'o' && this.field[1][1] == 'o' && this.field[0][2] == 'o'))
    		return 'o';
    	else return null;
    }

    noMoreTurns() {
    	if (this.filledCell == 9) return true;
    	else return false;
    }

    isDraw() {
    	if (this.noMoreTurns() && !(this.getWinner())) return true;
    	else return false;
    }

    getFieldValue(rowIndex, colIndex) {
    	return this.field[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
