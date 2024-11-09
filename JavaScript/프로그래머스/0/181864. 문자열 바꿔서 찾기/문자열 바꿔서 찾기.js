function solution(myString, pat) {
    const newString = myString.split('').map((str)=>{
        if(str==='A') return 'B';
        if(str==='B') return 'A';
        return str
    })
    return newString.join('').includes(pat)?1:0;
}