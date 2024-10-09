/** ### 문제 풀이
 * 반복문을 돌며 다음 문자와 같은지를 체크하여 같으면 카운트 추가
 * 다르면 answer에 문자와 카운트를 추가하고 카운트를 리셋한다.
 */

function solution(str) {
  let answer = "";
  let loopCount = 1;
  for (let i = 0; i <= str.length - 1; i++) {
    if (str[i] === str[i + 1]) {
      loopCount += 1;
    } else {
      loopCount === 1
        ? (answer += str[i])
        : (answer = answer + str[i] + loopCount);
      loopCount = 1;
    }
  }
  return answer;
}

let str = "KKHSSSSSSSE";
console.log(solution(str));
