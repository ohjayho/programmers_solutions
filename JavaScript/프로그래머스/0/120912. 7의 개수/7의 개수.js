function solution(array) {
    const str = array.join('')
    return str.split('').reduce((acc,cur)=> cur === '7' ? acc+1 : acc, 0)
}