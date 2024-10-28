const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let x, y;


readline.on('line', function(line) {
    [x,y] = line.split(' ').map(el => parseInt(el));
}).on('close', function(){
    const winRate = Math.floor(100*y/x);
    if(winRate>=99){
        console.log(-1);
        process.exit();
    }
    let end = x;
    let start = 0;
    let result = -1;
    while(start <= end){
        let middle = Math.floor((start+end)/2);
        let newRate = Math.floor(100*(y+middle)/(x+middle));
        if(newRate>winRate){
            result = middle;
            end = middle-1;
        }else{
            start = middle+1;
        }
    }
    console.log(result);
    process.exit();
});