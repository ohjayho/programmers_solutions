function solution(arr) {
    const width = arr[0].length;
    const height = arr.length;
    if(width>height){
        console.log('hey')
        return [...arr, ...Array.from({length:width-height}, ()=> new Array(width).fill(0))];
    } else if(width<height){
        return arr.map((el)=>{
            return [...el, ...(Array(height-width).fill(0))]
        });
    }else{
        return arr;
    }
}