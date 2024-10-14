function solution(str_list) {
    const left = str_list.indexOf('l');
    const right = str_list.indexOf('r');
    if(left===-1&&right===-1){
        return [];
    }
    if(left===-1){
        return str_list.slice(right+1);
    }
    if(right===-1){
        return str_list.slice(0,left);
    }
    return left < right ? str_list.slice(0,left) : str_list.slice(right+1);
}