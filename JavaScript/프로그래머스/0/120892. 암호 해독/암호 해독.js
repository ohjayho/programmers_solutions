function solution(cipher, code) {
    return cipher.split('').reduce((acc,cur,idx)=>{
        if((idx+1)%code===0){
            return acc+cur;
        }
        return acc;
    },'');
}