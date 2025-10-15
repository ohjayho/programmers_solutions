function solution(s) {
    let result = [];
    for (let i=0; i<s.length; i++){
        if(s.lastIndexOf(s[i]) === s.indexOf(s[i])) result.push(s[i])
    }
    return result.sort().join('');
}