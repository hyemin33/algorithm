/* 마라톤 참여한 선수들 = participant
   완주한 선수들 = completion
   완주하지 못한 선수 이름을 return 해라.
   
   participant 선수들 중 completion에 없는 선수를 return 하면 된다.
   이들 중 동명이인이 있을 수 있다.
*/
function solution(participant, completion) {
    let answer = []
    participant.sort();
    completion.sort();
    
    for(let i = 0; i<participant.length; i++ ){
        if(participant[i] !== completion[i]) return participant[i]
    }
    
  
}