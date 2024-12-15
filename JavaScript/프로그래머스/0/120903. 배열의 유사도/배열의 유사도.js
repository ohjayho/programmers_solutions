function solution(s1, s2) {
    let count = 0;
    s1.map((el)=>{
        if(s2.includes(el)) count+=1;
    })
    return count;
}