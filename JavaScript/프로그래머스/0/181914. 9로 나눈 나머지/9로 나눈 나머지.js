function solution(number) {
    number = number.split('').map(a=>parseInt(a));
    let sum = number.reduce((sum,a)=>sum+a);
    return sum%9;
}