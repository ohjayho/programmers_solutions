function solution(arr1, arr2) {
    const lenOne = arr1.length;
    const lenTwo = arr2.length;
    if(lenOne === lenTwo){
        const sumOne = arr1.reduce((cur,acc)=>acc+=cur);
        const sumTwo = arr2.reduce((cur,acc)=>acc+=cur);
        if(sumOne===sumTwo) return 0;
        return sumOne > sumTwo ? 1:-1;
    }else{
        return lenOne > lenTwo ? 1:-1;
    }
}