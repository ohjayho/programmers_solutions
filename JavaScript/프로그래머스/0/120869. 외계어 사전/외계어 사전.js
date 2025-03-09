function solution(spell, dic) {
    const len = spell.length;
    for(let word of dic){
        if(word.length == len){
            const sortedWord = word.split('').sort().join('');
            const dicWord = spell.sort().join('');
            if(sortedWord === dicWord){
                return 1
            }
        }
    }
    return 2;
}