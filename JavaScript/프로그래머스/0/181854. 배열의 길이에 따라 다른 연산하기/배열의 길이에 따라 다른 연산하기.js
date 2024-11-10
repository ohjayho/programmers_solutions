function solution(arr, n) {
    return arr.length%2? arr.map((ele,idx)=>{
        if(!(idx%2)) return ele+=n
        return ele;}) : arr.map((ele,idx)=>{
        if(idx%2) return ele+=n
        return ele;});
}