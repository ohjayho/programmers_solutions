function solution(participant, completion) {
    let withdrawal = '';
    const countParticipants = {};
    participant.forEach((par)=>{
        countParticipants[par] ? countParticipants[par] += 1 : countParticipants[par] = 1;
    })
    const countCompletions = {};
    completion.forEach((com)=>{
        countCompletions[com] ? countCompletions[com] += 1 : countCompletions[com] = 1;
    })
    
    participant.some((par)=>{
        if(countCompletions[par] === 0 || countCompletions[par] !== countParticipants[par]){
            withdrawal = par;
            return true; //break
        }
    })
    return withdrawal;
}