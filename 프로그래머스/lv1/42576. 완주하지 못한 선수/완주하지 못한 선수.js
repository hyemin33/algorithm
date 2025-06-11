function solution(participant, completion) {
    let hasMap = new Map();
    
    for(let i = 0 ; i < participant.length ; i++) {
        let person1 = participant[i];
        let person2 = completion[i];
        hasMap.set(person1, (hasMap.get(person1) || 0) +1);
        hasMap.set(person2, (hasMap.get(person2) || 0) -1);
    }
    
    for(let [key,value] of hasMap) {
        if(value > 0) return key
    }
}