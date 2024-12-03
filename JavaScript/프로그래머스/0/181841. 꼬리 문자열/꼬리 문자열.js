function solution(str_list, ex) {
    str_list = str_list.filter((str)=>!str.includes(ex));
    return str_list.join('');
}