function solution(my_string) {
    const new_string = my_string.split('').map((ch)=>{
        const code = ch.charCodeAt();
        if(code >= 97){
            return ch.toUpperCase();
        } else {
            return ch.toLowerCase();
        }
    })
    
    return new_string.join('');
}