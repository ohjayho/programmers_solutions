function solution(my_string) {
    let result = '';
    let resultArray = [];
    for(let i of my_string){
        if(i===' '){
            if(result.length){
                resultArray.push(result);
                result = '';
            }
        }else{
            result += i;
            console.log(result)
        }
    }
    if(result.length){
        resultArray.push(result);
    }
    return resultArray;
}