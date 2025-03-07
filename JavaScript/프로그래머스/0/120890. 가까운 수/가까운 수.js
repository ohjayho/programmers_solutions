function solution(array, n) {
    array.push(n);
    array.sort((a,b)=>a-b);
    const idx = array.indexOf(n);
    if(idx === array.length-1){
        return array[idx-1];
    }
    if(idx === 0){
        return array[1];
    }
    if(Math.abs(n-array[idx-1]) > Math.abs(n-array[idx+1])){
        return array[idx+1];
    } else {
        return array[idx-1]
    }
}