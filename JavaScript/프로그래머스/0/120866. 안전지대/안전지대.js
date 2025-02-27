function solution(board) {
    const danger = [[0,0],[1,0],[-1,0],[0,1],[0,-1],[-1,1],[-1,-1],[1,1],[1,-1]];
    let result = 0;
    const newBoard = JSON.parse(JSON.stringify(board));
    for(let i=0; i<board[0].length; i++){
        for(let j=0; j<board.length; j++){
            if(board[i][j]){
                for(let move of danger){
                    const newX = i+move[0];
                    const newY = j+move[1];
                    if(newX>=0 && newX<board[0].length && newY>=0 && newY<board.length){
                        newBoard[newX][newY] = 1;
                    }
                }
            }
        }
    }
    for(let i=0; i<newBoard.length; i++){
        for(let j=0; j<newBoard[0].length; j++){
            if(!newBoard[i][j]){
                result += 1;
            }
        }
    }
    return result;
}