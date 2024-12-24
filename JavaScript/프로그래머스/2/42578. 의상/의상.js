function solution(clothes) {
    const cony_clothes = new Map();
    let result = 1;
    for(let item of clothes){
        if(cony_clothes.has(item[1])){
            cony_clothes.set(item[1], cony_clothes.get(item[1])+1);
        } else {
            cony_clothes.set(item[1], 1);
        }
    }
    
    for(let i of cony_clothes.values()){
        result *= i+1;
    }
    
    return result-1;
}