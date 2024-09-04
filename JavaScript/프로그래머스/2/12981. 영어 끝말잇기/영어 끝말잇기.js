function solution(n, words) {
    // const savedWords = new Set();
    const savedWords = [];
    let prevLetter = words[0][0];
    for(let i=0; i<words.length; i++){
        let word = words[i];
        if(word[0] !== prevLetter || savedWords.includes(word)){
            return [i%n+1,Math.floor(i/n)+1];
        }
        savedWords.push(word);
        prevLetter = word.slice(-1);
    }
    return [0,0];
}