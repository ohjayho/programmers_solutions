function solution(n) {
    let num = 0;
    for(let i = 0; i < n; i++){
        num++;
        while(String(num).includes(3) || num%3===0){
            num++;
        }
    }
    return num;
}