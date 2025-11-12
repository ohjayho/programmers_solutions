function solution(s) {
    let numbers = s.split(' ');
    let result = 0;
    for(let i=0; i<numbers.length; i++){
        if(numbers[i] === 'Z'){
            result -= parseInt(numbers[i-1])
        } else {
            result += parseInt(numbers[i])
        }
    }
    return result;
}