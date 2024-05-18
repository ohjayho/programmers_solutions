const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    let n = Number(input[0]);
    let num = '';
    n % 2 == 0 ? num = 'even' : num = 'odd';
    console.log(`${n} is ${num}`);
});