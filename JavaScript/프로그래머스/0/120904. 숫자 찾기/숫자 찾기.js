function solution(num, k) {
    const numStr = num.toString();
    return numStr.includes(k) ? numStr.indexOf(k)+1 : -1;
}