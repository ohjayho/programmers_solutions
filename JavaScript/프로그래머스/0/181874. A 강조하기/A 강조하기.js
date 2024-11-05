function solution(myString) {
    let result = myString.split('').map((str)=>{
        if(str==='a') return 'A';
        else if(str===str.toUpperCase()&&str!='A'){
            return str.toLowerCase();
        }
        return str;
    })
    return result.join('');
}