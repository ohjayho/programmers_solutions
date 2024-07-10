function solution(my_string) {
    let result = [];
    const len = my_string.length
    for(let i=0; i<len; i++){
        result.push(my_string.slice(i,len));
    }
    return result.sort();
}