function solution(code) {
    let mode = 0;
    let result = '';
    for(let i=0; i<code.length; i++){
        if(code[i]==1){
            if(!mode){
                mode = 1;
            }else{
                mode = 0;
            }
        } else {
            if(i%2==0&&mode==0){
                result += code[i];
            }
            if(i%2==1&&mode==1){
                result += code[i];
            }
        }
    }
    return result ? result : 'EMPTY';  
    }
    