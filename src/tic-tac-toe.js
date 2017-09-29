class TicTacToe {
    constructor() {

    	this.rez = 'x';
    	this.kol = 0;
    	this.pole = [
    	   [null, null, null],
    	   [null, null, null],
    	   [null, null, null],
    	];
    }

    getCurrentPlayerSymbol() {
    	return this.rez;
    }

    nextTurn(rowIndex, columnIndex) {
    	if (this.pole[rowIndex][columnIndex] == null) {
    		this.kol++;
    		this.pole[rowIndex][columnIndex] = this.rez;
    		if (this.rez == 'x') this.rez = 'o';
    		else this.rez = 'x';
    	}
    }

    isFinished() {
    	if (this.isDraw() || this.getWinner()) return true;
    	else return false;
    }

    getWinner() {
    	if(
    	    (this.pole[0][0] == 'x' && this.pole[0][1] == 'x' && this.pole[0][2] == 'x') ||
    		(this.pole[1][0] == 'x' && this.pole[1][1] == 'x' && this.pole[1][2] == 'x') ||
    		(this.pole[2][0] == 'x' && this.pole[2][1] == 'x' && this.pole[2][2] == 'x') ||

    		(this.pole[0][0] == 'x' && this.pole[1][0] == 'x' && this.pole[2][0] == 'x') ||
    		(this.pole[0][1] == 'x' && this.pole[1][1] == 'x' && this.pole[2][1] == 'x') ||
    		(this.pole[0][2] == 'x' && this.pole[1][2] == 'x' && this.pole[2][2] == 'x') ||

    		(this.pole[0][0] == 'x' && this.pole[1][1] == 'x' && this.pole[2][2] == 'x') ||
    		(this.pole[2][0] == 'x' && this.pole[1][1] == 'x' && this.pole[0][2] == 'x')
    		)
    		{return 'x';} 
    	else 
    	if (
    		(this.pole[0][0] == 'o' && this.pole[0][1] == 'o' && this.pole[0][2] == 'o') ||
    		(this.pole[1][0] == 'o' && this.pole[1][1] == 'o' && this.pole[1][2] == 'o') ||
    		(this.pole[2][0] == 'o' && this.pole[2][1] == 'o' && this.pole[2][2] == 'o') ||

    		(this.pole[0][0] == 'o' && this.pole[1][0] == 'o' && this.pole[2][0] == 'o') ||
    		(this.pole[0][1] == 'o' && this.pole[1][1] == 'o' && this.pole[2][1] == 'o') ||
    		(this.pole[0][2] == 'o' && this.pole[1][2] == 'o' && this.pole[2][2] == 'o') ||

    		(this.pole[0][0] == 'o' && this.pole[1][1] == 'o' && this.pole[2][2] == 'o') ||
    		(this.pole[2][0] == 'o' && this.pole[1][1] == 'o' && this.pole[0][2] == 'o')
    		){
    		return 'o';}
    	else return null;
    }

    noMoreTurns() {
    	if (this.kol == 9){
    	 return true;
    	}
    	else { 
    		return false;
    	}
    }

    isDraw() {
    	if (this.noMoreTurns() && !(this.getWinner())) 
    	{
    		return true;
    	}
    	else {
    		return false;
    	}
    }

    getFieldValue(rowIndex, colIndex) {
    	return this.pole[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;

