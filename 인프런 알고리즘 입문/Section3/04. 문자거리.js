/** ### 문제 풀이
 * 문자열이 100을 넘지 않으므로 거리의 초기값은 100으로 잡는다.
 * 반복문을 돌면서 t를 만나면 dis를 0으로 리셋하고 계속 +1을 한다.
 * 최솟값을 찾아야하므로 뒤에서부터 다시 반복문을 돌면서 똑같이 실행하고
 * 만약 값이 다를 경우는 이전에 있던 answer 값과 비교하여 더 작은 값을 넣어준다.
 */

function solution(s, t) {
  let answer = [];
  let distance = 100;
  for (x of s) {
    if (x === t) {
      distance = 0;
    } else {
      distance += 1;
    }
    answer.push(distance);
  }

  distance = 100;
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === t) {
      distance = 0;
    } else {
      distance += 1;
      answer[i] = Math.min(answer[i], distance);
    }
  }

  return answer;
}
let str = "teachermode";
console.log(solution(str, "e"));
