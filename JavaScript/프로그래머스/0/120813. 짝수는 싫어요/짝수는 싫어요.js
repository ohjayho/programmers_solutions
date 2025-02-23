function solution(n) {
    const numbers = [];
    for(let i=1; i<=n; i++){
        numbers.push(i);
    }
    return numbers.filter((n)=>{
        if(n%2) return n;
    })
}