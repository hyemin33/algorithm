function solution(s) {
    let numArr = s.split(' ').map(Number);
    numArr.sort((a,b)=>a-b)
    let answer = numArr[0]+' '+numArr[numArr.length -1] 
    return answer
}