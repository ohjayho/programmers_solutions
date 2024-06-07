function solution(arr, queries) {
    let result = [];
    queries.map((query)=> {
        let newArr = arr.slice(query[0],query[1]+1).sort((a,b)=>a-b);
        let addNum = -1
        for(let num of newArr){
          if(num > query[2]) {
                addNum = num;
                break;
            }            
        }
        result.push(addNum);
    });
        
    return result;
}