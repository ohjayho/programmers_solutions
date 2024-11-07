function solution(my_string, alp) {
    return my_string.split('').map((str)=>str===alp?str.toUpperCase():str).join('');
}