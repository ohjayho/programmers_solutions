function solution(A, B) {
    let cnt = 0;
    for(let i=0; i<A.length; i++){
        if(A === B){
            return cnt;
        }
        A = A.split('');
        const lastLetter = A.pop();     
        A.unshift(lastLetter);
        A = A.join('');
        cnt += 1;
    }
    return -1;
}