function solution(rank, attendance) {
    let lineUp = {};
    rank.forEach((rk,idx)=>{lineUp[rank[idx]]=idx;});
    rank = rank.filter((rk,idx)=>attendance[idx]);
    rank = rank.sort((a,b)=>a-b);
    return 10000*lineUp[rank[0]]+100*lineUp[rank[1]]+lineUp[rank[2]];
}