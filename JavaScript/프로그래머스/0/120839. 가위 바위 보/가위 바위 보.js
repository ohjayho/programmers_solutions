function solution(rsp) {
    const data = {
        2 : 0,
        0 : 5,
        5 : 2
    }
    return rsp.split('').map((action)=>data[action]).join('');
}