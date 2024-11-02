function solution(arr, query) {
    query.map((q,idx)=>{
        arr = idx%2===0 ? arr.slice(0,q+1) : arr.slice(q);
    })
    return arr;
}