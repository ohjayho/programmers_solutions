function solution(maps) {
    const rows = maps.length;
    const cols = maps[0].length;
    const dx = [0,0,-1,1] // 상,하,좌,우
    const dy = [-1,1,0,0]
    const q = [[0,0]];

    while(q.length){
        const [x,y] = q.shift();
        for(let i=0; i<4; i++){
            const nx = x+dx[i];
            const ny = y+dy[i];
            if(nx>=0 && nx<rows && ny>=0 && ny<cols){
                if(maps[nx][ny]===1){
                    q.push([nx,ny]);
                    maps[nx][ny] = maps[x][y]+1;
                }
            }
        }
    }
    return maps[rows-1][cols-1]===1 ? -1: maps[rows-1][cols-1];
    

    
}