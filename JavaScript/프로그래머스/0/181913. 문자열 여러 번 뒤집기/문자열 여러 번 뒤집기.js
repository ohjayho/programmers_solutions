function solution(my_string, queries) {
    let result = my_string;
    function flip(input, query){
        const prefix = input.slice(0,query[0]);
        const infix = input.slice(query[0],query[1]+1).split('').reverse().join('');
        const postfix = input.slice(query[1]+1,input.length);
        return prefix+infix+postfix;
    }
    for(let q of queries){
        result = flip(result, q);
    }
    return result;
}