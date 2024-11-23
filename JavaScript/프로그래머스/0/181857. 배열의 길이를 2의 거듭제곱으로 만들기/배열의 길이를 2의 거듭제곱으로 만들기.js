function solution(arr) {
    const len = arr.length;
    let n = 0;
    while(len>2**n){
        n += 1;
    }
    const newArr = Array(2**n-len).fill(0);
    return [...arr, ...newArr];
}