function solution(board, k) {
    let width = board[0].length;
    let height = board.length;
    let sum = 0;
    for(let i=0; i<height; i++){
        for(let j=0; j<width; j++){
            if(i+j<=k){
                sum += board[i][j]
            }
        }
    }
    return sum;
}