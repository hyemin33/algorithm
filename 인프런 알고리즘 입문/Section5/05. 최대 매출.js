/** ### 문제 풀이
 * 이동하면서 뒤에 숫자는 더하고 앞의 숫자는 빼면서 비교한다
 */

function solution(k, arr) {
  let answer,
    sum = 0;

  // 처음 k개의 합을 구해서 시작함
  for (let i = 0; i < k; i++) sum += arr[i];
  answer = sum;

  // 그 이후 해당 값 기준으로 앞뒤 더하고 뺴서 비교하기
  for (let i = k; i < arr.length; i++) {
    sum += arr[i] - arr[i - k]; // 오른쪽 더하고 왼쪽 빼기
    answer = Math.max(answer, sum);
  }
  return answer;
}

let a = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
console.log(solution(3, a));
