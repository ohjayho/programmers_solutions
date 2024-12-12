function solution(order) {
    let total = 0;
    order.forEach((menu)=>menu.includes('latte') ? total+=5000 : total+=4500);
    return total;
}