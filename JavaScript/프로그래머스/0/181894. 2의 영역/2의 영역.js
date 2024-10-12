function solution(arr) {
    let startSecond = arr.indexOf(2);
    let endSecond = startSecond+1;
    for(let i=arr.length-1; i>=0; i--){
        if(arr[i]===2){
            endSecond = i;
            break;
        }
    }
    return startSecond !== -1 ? arr.slice(startSecond,endSecond+1) : [-1];
}