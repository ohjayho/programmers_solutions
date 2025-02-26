function solution(keyinput, board) {
    const maxX = parseInt(board[0]/2);
    const maxY = parseInt(board[1]/2);
    let coords = [0,0];
    const move = {
        left: [-1,0],
        right: [1,0],
        up: [0,1],
        down: [0,-1]
    };
    for(let command of keyinput){
        const newX = coords[0]+move[command][0];
        const newY = coords[1]+move[command][1];
        if(Math.abs(newX)<=maxX && Math.abs(newY)<=maxY){
            coords = [newX,newY];
        }
    }
    return coords;
}