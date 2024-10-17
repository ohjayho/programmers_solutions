function solution(num_list) {
    let odd = 0;
    let even = 0;
    num_list.map((cur,idx)=>{if(idx%2===1){odd+=cur}else{even+=cur}});
    return Math.max(odd,even);
}