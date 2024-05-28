function solution(num_list) {
    let mul = 1;
    let square = 0;
    for(let i of num_list){
        mul *= i;
        square += i;
    }
    return mul<square**2 ? 1 : 0;
    
}