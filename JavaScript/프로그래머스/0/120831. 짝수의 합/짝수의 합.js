function solution(n) {
    let result=0;
    for(let i=n;i>0;i--){
        if(!(i%2)){
            result+=i;
        }
    }
    return result;
}