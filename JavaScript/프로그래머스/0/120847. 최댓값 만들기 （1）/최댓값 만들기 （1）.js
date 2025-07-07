function solution(numbers) {
    const sortedNums = numbers.sort((a,b)=>b-a);
    const len = sortedNums.length;
    return sortedNums[0]*sortedNums[1];
}