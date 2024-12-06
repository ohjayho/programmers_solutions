function solution(n) {
    const twoDArray = Array.from({length:n}, ()=>Array.from({length:n},()=>0));
    for(let i=0;i<n;i++){
        twoDArray[i][i] = 1;
    }
    return twoDArray;
}