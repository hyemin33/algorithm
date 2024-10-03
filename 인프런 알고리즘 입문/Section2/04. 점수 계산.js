/** ### 문제 풀이
 * 연속으로 올라가는 점수를 score에 담고 맞출때마다 점수를 부여한다.
 * 틀릴 경우 연속 점수를 0으로 리셋한다.
 */

function solution(arr) {
  let answer = 0;
  let score = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1) {
      score += 1;
      answer += score;
    } else {
      score = 0;
    }
  }
  return answer;
}

let arr = [1, 0, 1, 1, 1, 0, 0, 1, 1, 0];
console.log(solution(arr));
