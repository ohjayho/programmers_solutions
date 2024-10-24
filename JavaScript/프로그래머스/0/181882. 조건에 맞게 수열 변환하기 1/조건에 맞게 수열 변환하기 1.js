function solution(arr) {
    let newArr = arr.map((ele)=>{
        if(ele%2===0&&ele>=50) return ele/=2;
        if(ele%2===1&&ele<50) return ele*=2;
        return ele;
    }
    );
    return newArr;
}