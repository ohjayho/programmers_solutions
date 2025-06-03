function solution(num_list) {
    let odd = 0;
    let even = 0;
    num_list.forEach((num)=> num%2? odd+=1: even+=1);
    return [even, odd];
}