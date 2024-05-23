function solution(ineq, eq, n, m) {
    let result = '';
    if(ineq == '>'){
        if(eq== '='){
            n >= m ? result = 1 : result = 0;
        } else {
            n > m ? result = 1 : result = 0;
        }
    } else {
        if(eq == '='){
            n <= m ? result = 1 : result = 0;
        } else {
            n < m ? result = 1 : result = 0;
        }
    }
    return result;
}