function solution(order) {
    let result = 0;
    order.toString().split('').map((num)=>{
        if(num%3===0&&num!=='0'){
            result += 1;
        }
    });
    return result;
}