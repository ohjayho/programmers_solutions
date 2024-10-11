function solution(arr, intervals) {
    let result = [];
    intervals.map((interval)=>{
        result = [...result,...arr.slice(interval[0],interval[1]+1)];
    })
    return result;
}