function solution(n) {
    let result = [];
    while(n!==1){
        result.push(n);
        n%2 ? n=3*n+1 : n/=2;
    }
    result.push(1);
    return result;
}