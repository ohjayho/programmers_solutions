function solution(arr) {
    let i = 0;
    const stk = [];
    while(i<arr.length){
        if(!(stk.length)){
            stk.push(arr[i]);
            i+=1;
        } else{
            if(stk[stk.length-1]===arr[i]){
                stk.pop();
                i+=1;
            } else {
                stk.push(arr[i]);
                i+=1;
            }
        }
    }
    return stk.length ? stk:[-1];
}