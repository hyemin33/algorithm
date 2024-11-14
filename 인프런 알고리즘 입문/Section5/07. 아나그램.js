/** ### 문제 풀이
 */

function solution(str1, str2) {
  let answer = "YES";
  let sH = new Map();
  for (let x of str1) {
    if (sH.has(x)) sH.set(x, sH.get(x) + 1);
    else sH.set(x, 1);
  }
  for (let x of str2) { // str2를 돌면서 해당 알파벳이 있으면 -1을 한다
    if (!sH.has(x) || sH.get(x) == 0) return "NO"; // 해당 알파벳이 없거나, 0일때
    sH.set(x, sH.get(x) - 1);
  }
  return answer;
}

let a = "AbaAeCe";
let b = "baeeACA";
console.log(solution(a, b));
