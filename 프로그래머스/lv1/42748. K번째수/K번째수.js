function solution(array, commands) {
    let answer = [];

    commands.map(([start,end,k])=>{
        const kNumber = array.slice(start-1, end).sort((a,b)=> a-b)[k-1]
        answer.push(kNumber);
    })
    
    return answer;
}                                                                           