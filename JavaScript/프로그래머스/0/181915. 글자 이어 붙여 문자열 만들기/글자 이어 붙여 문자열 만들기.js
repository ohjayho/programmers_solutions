function solution(my_string, index_list) {
    let result = '';
    my_string = my_string.split('');
    index_list.map(a=>{
        result += my_string[a];
    })
    return result;
}