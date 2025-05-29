function solution(i, j, k) {
    let cnt = 0;
    for(let l=i; l<=j; l++){
        for(let m of String(l)){
            if(Number(m)==k){
                cnt += 1;
            }
        }
    }
    return cnt;

}