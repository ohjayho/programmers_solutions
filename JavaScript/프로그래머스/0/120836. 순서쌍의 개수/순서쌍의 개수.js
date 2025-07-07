function solution(n) {
    let total = 0;
    for(let i=n; i>0; i--){
        if(n%i===0){
            total += 1;
        }
    }
    return total;
}