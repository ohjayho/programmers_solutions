function solution(n, k) {
    let result = [];
    let num = 1;
    for(let i=k; i<=n; i=num*k){
        result.push(i);
        num += 1;
    }
    return result;
}