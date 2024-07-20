function solution(q, r, code) {
    let result = [];
    code.split('').map((ch,idx)=>{
        if(idx%q===r){
            result.push(ch);
        }
    })
    return result.join('');
}