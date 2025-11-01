function solution(my_str, n) {
    const result = [];
    for(let i=0; i<my_str.length; i+=n){
        const sliced = my_str.slice(i,i+n)
        console.log(i,i+n)
        result.push(sliced)
    }
    return result
}