function solution(my_string, s, e) {
    let prefix = my_string.slice(0,s);
    let infix = my_string.slice(s,e+1).split('').reverse().join('');
    let postfix = my_string.slice(e+1,my_string.length);
    return prefix+infix+postfix;
}