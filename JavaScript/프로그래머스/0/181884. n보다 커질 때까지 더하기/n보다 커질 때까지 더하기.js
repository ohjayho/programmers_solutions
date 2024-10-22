function solution(numbers, n) {
    let result = 0;
    for(let i of numbers){
        result += i;
        if(result>n){
            return result;
        }
    }
}