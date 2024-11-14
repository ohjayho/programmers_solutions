function solution(arr) {
    let newArr = [...arr];
    let curArr = [...arr];
    let a = [0];
    let count = 0;
    function isSame(arr,newArr){
        return arr.every((ele,idx)=>ele===newArr[idx]);
    }
    while(true){
        newArr = newArr.map((ele)=>{
            if(ele>=50&&ele%2===0){
                return ele/2;
            }
            if(ele<50&&ele%2)
            {
                return ele*2+1;
            }
            return ele;
        });
        if(isSame(curArr,newArr)){
            break;
        }
        curArr = newArr;
        count += 1;
    }
    return count;
}