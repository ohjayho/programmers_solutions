function solution(strArr) {
    let maxLen = 0;
    strArr.forEach((str)=>maxLen=Math.max(str.length,maxLen));
    let lenArr = Array(maxLen+1).fill(0);
    strArr.forEach((str)=>lenArr[str.length]+=1);
    return Math.max(...lenArr);
}