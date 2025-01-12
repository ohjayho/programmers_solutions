function solution(n) {
    let result = 0;
    for(let i=n; i>0; i--){
        let count = 0;
        for(let j=i; j>0; j--){
            if(i%j===0){
                count += 1;
            }
        }
        if(count >= 3){
            result += 1;
        }
    }
    return result;
}