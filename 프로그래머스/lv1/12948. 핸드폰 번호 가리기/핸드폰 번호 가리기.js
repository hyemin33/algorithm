function solution(phone_number) {
   let phone_back = phone_number.slice(-4);
   let phone_front = '' ;
    for(let i = 0; i < phone_number.length - 4 ; i++){
        phone_front += '*'
    }
    
     let answer =phone_front + phone_back
    return answer
}