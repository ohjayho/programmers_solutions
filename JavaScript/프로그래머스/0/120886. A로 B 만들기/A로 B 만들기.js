function solution(before, after) {
    const a = {};
    const b = {};
    for(let i of before){
        if(!a[i]) a[i] = 1;
        a[i] += 1;
    }
    for(let i of after){
        if(!b[i]) b[i] = 1;
        b[i] += 1;
    }
    for(let i of after){
        if(a[i]!=b[i]) return 0;
    }
    return 1;
}