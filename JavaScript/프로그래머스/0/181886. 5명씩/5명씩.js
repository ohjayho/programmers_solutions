function solution(names) {
    const result = [];
    names.map((name,idx)=>{if(idx%5===0)result.push(name);})
    return result;
}