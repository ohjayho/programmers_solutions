function solution(numbers, direction) {
    if(direction === 'left'){
        return [...numbers.slice(1), numbers[0]];
    } else {
        let len = numbers.length;
        return [numbers[len-1], ...numbers.slice(0,len-1)]
    }
}