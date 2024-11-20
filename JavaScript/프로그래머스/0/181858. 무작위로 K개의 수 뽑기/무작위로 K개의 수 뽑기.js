function solution(arr, k) {
    let newArr = [];
    arr.forEach((el)=>{
        if(newArr.length===k) return;
        if(!newArr.includes(el))newArr.push(el)
    });
    if(newArr.length<k){
        const minus = new Array(k-newArr.length).fill(-1);
        newArr = [...newArr, ...minus];
    }
    return newArr;
}