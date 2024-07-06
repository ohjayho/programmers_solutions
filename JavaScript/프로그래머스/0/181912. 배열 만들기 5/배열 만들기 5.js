function solution(intStrs, k, s, l) {
    let solution = [];
    intStrs.map((i)=>{
        const num = parseInt(i.slice(s,l+s));
        if(num>k){
            solution.push(num);
        }
    });
    return solution;
}