function solution(n) {
    let num = 1;
    const factorial = (n) => {
        if(n===1) return 1;
        return n*factorial(n-1);
    }
    while(true){
        const fact = factorial(num);
        if(fact > n){
            return num-1;
        } else {
            num++;
        }
    }
}