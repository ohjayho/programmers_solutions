function solution(num){
    let start = 1;
    let end = parseInt(num);
    let result = 0;
    while(start<=end){
        let mid = Math.floor((start+end)/2);
        let sum = Math.floor(mid*(mid+1)/2);
        if(sum<=num){
            result = mid;
            start = mid+1;
        }else{
            end = mid-1;
        }
    }
    console.log(result);
}

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let input = [];
rl.on('line',(line)=>{
    input.push(line);
}).on('close',()=>{
   for(let i=1; i<=input[0]; i++){
     solution(input[i]);
   }
    process.exit();
})
