function solution(slice, n) {
    const pizza = n/slice
    if(parseInt(pizza) === pizza){
        return pizza;
    } else {
        return Math.floor(pizza)+1;
    }
}