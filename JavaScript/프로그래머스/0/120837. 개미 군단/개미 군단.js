function solution(hp) {
    let result = 0;
    for(let i=5; i>=1; i-=2){
        result = result + parseInt(hp/i);
        hp %= i;
    }
    return result
}