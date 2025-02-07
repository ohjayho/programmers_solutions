function solution(n, k) {
    const freeDrink = n/10;
    return 12000*n+2000*(k-Math.floor(freeDrink))
}