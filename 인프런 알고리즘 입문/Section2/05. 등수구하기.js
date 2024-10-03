/** ### 문제 풀이
 * 각 점수별 반복문을 돌면서 등수를 체크한다.
 *
 */

function solution(arr) {
  let answer = [];
  for (let i = 0; i < arr.length; i++) {
    let rank = 1;
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] < arr[j]) rank++;
    }
    answer.push(rank);
  }
  return answer;
}

let arr = [87, 92, 92, 100, 76];
console.log(solution(arr));
