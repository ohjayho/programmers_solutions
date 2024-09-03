function solution(n, words) {
    savedWords = new Set();
    prevWord = words[0][0]
    for(i = 0; i<words.length; i++){
        word = words[i];
        if(word[0] !== prevWord || savedWords.has(word)){
            return [i%n+1, Math.floor(i/n)+1];
        }
        savedWords.add(word);
        prevWord = word.slice(-1);
    }
    return [0,0]
}