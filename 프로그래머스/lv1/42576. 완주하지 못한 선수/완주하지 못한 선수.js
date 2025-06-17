function solution(participant, completion) {
    let map = new Map();

    for(let i = 0; i < participant.length; i++){
        const participantName = participant[i];
        const completionName = completion[i];
        map.set(participantName, (map.get(participantName) || 0) + 1);
        
         if(i < completion.length) {
            map.set(completionName, (map.get(completionName) || 0) - 1)
         }
    }
    
    for([key, value] of map) {
         if(value > 0) return key
    }
}