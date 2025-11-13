function solution(numbers, k) {
    let idx = 0;
    let count = 1;
    while(1){
        if(idx === numbers.length){
            idx = 0;
        } else if(idx === numbers.length + 1) {
            idx = 1;
        }
        if(count === k) return numbers[idx];
        idx += 2;
        count += 1;
    }
}