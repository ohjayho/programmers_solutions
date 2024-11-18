function solution(myStr) {
    myStr = myStr.replaceAll('a','c');
    myStr = myStr.replaceAll('b','c');
    const resultStr = myStr.split('c').filter((str)=>str);
    return resultStr.length ? resultStr : ["EMPTY"];
}