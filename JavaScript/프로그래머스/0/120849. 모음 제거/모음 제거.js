function solution(my_string) {
    const vowel = ['a','e','i','o','u'];
    
    return my_string.split('').filter((chr)=>!vowel.includes(chr)).join('');
}