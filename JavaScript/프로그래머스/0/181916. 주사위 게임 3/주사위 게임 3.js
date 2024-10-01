function solution(a, b, c, d) {
    let arr = [a,b,c,d];
    arr = arr.sort((a,b)=>a-b);
    if(arr[0]===arr[3]){
        return 1111*arr[0]
    }
    if(arr[0] === arr[2] && arr[2]!==arr[3]){
        return (10*arr[0]+arr[3])**2;
    }
    if(arr[0] !== arr[1] && arr[1] === arr[3]){
        return (10*arr[1]+arr[0])**2;
    }
    if(arr[0] === arr[1] && arr[2] === arr[3] && arr[1] !== arr[2]){
        return (arr[0]+arr[2])*Math.abs((arr[0]-arr[2]));
    }
    if(arr[0] === arr[1] && arr[2] !== arr[3] && arr[1] !== arr[2]){
        return arr[2]*arr[3];
    }
    if(arr[2] === arr[3] && arr[0] !== arr[1] && arr[1] !== arr[2]){
        return arr[0]*arr[1];
    }
    if(arr[1] === arr[2] && arr[0] !== arr[3] && arr[0] !== arr[1]){
        return arr[0]*arr[3];
    }
    if(arr[0] !== arr[1] && arr[1] !== arr[2] && arr[2] !== arr[3]){
        return arr[0];
    }
    
}