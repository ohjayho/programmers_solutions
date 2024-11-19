function solution(arr, flag) {
    let resultArr = [];
    flag.forEach((fl,idx)=>{
        if(fl){
            const newArr = new Array(arr[idx]*2).fill(arr[idx]);
            resultArr = [...resultArr, ...newArr];
        } else {
            resultArr = resultArr.slice(0,resultArr.length-arr[idx]);
        }
    })
    return resultArr;
}
