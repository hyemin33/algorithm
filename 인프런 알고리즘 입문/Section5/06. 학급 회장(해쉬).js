/** ### 문제 풀이
 */

function solution(s){  
  let answer;
  let sH = new Map();
  for(let x of s){
      if(sH.has(x)) // 그 문자의 키가 들어있는지 
        sH.set(x, sH.get(x)+1); // 있으면 +1
      else sH.set(x, 1); // 없으면 새로 추가
  }
  let max=Number.MIN_SAFE_INTEGER;
  for(let [key, val] of sH){
      if(val>max){
          max=val;
          answer=key;
      }
  }
  return answer;
}

let str="BACBACCACCBDEDE";
console.log(solution(str)); 