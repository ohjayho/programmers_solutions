function solution(my_string) {
    const result = Array.from({length:52},(v)=>0);
    for(let i of my_string){
        const code = i.charCodeAt();
        if(code >= 65 && code <= 90){
            result[code-65] += 1;
        } else {
            result[code-71] += 1;
        }
    }
    return result;
}