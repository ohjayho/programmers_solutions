function solution(numbers) {
    const sortedNum = numbers.sort((a,b)=>b-a);
    return Math.max(sortedNum[0]*sortedNum[1],sortedNum[sortedNum.length-1]*sortedNum[sortedNum.length-2]);
}