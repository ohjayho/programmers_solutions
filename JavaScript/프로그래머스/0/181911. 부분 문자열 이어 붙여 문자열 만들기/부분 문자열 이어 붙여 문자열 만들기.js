function solution(my_strings, parts) {
    let len = my_strings.length;
    let result = '';
    for(let i=0; i<len; i++){
        let newArr = my_strings[i].split('');
        result += newArr.slice(parts[i][0],parts[i][1]+1).join('');
    }
    return result;
}