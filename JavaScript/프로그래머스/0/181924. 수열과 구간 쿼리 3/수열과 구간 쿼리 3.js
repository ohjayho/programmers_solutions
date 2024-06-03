function solution(arr, queries) {
    let idx = Array(arr.length).fill().map((v,i)=>i);
    let result = [];
    for(let i=0;i<queries.length; i++){
        let temp = idx[queries[i][0]];
        idx[queries[i][0]]  = idx[queries[i][1]];
        idx[queries[i][1]] = temp;
    }
    for(let j=0;j<idx.length;j++){
        result.push(arr[idx[j]])
    }
    return result;
}