function solution(str1, str2) {
    let result = [];
    let length = Math.max(str1.length, str2.length);
    for(let i=0; i<length; i++){
        result += str1[i];
        result += str2[i];
    }
    str1.length > str2.length ? result += str1.slice(str2.length) : result += str2.slice(str1.length);
    return result;
}