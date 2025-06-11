function solution(progresses, speeds) {
    let answer = [];
    let days = progresses.map((progress, index)=>(
        Math.ceil((100 - progress)/speeds[index])
    ))
    

    let count = 1;
    let maxDay = days[0];
    
    for (i=1; i < days.length ; i++){
        if(days[i] > maxDay) {
            answer.push(count);
            count = 1;
            maxDay = days[i];
            
        } else {
            count++;
        }
         
    }
    
    answer.push(count);

    return answer;

}