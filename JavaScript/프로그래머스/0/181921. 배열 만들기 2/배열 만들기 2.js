function solution(l, r) {
    let a = ['5','0'];
    let result = [];
    for(let i=l; i<=r; i++){
        let newNum = i;
        newNum = (newNum + '').split('');
        fiveZero = newNum.every(ele => a.includes(ele));
        if(fiveZero){
            result.push(parseInt(newNum.join('')));
        }
    }
    return result.length ? result : [-1];
}