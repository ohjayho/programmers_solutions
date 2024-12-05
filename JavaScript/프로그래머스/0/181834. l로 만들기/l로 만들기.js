function solution(myString) {
    return myString.split('').map((str)=>str.charCodeAt()<108?str='l':str).join('');
}