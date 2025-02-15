function solution(n) {
    const numberToString = n.toString().split('');
    return numberToString.reduce((acc,cur)=>acc+=parseInt(cur),0);
}