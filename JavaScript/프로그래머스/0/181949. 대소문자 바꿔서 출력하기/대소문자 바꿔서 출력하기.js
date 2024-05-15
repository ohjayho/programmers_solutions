const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    let str = input[0];
    let newStr = '';
    for(let s of str){
        if(s>='A' && s<='Z'){
            s = s.toLowerCase();
        }else{
            s = s.toUpperCase();
        }
        newStr += s;
}
    console.log(newStr);
});