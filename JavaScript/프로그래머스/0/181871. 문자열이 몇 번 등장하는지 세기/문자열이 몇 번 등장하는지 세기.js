function solution(myString, pat) {
    let result = 0;
    let patLength = pat.length;
    for(let i=0; i<myString.length; i++){
        const newString = myString.slice(i,i+patLength);
        if(newString === pat){
            result += 1;
        }
    }
    return result;
}