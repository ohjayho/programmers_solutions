function solution(num_list) {
    let odd = '';
    let even = '';
    for(let i of num_list){
        if(i%2){
            odd += i;
        } else {
            even += i;
        }
    }
    return Number(odd)+Number(even);
}